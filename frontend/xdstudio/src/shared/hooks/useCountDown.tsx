"use client";
import { useState, useEffect, useMemo } from "react";

/**
 * Type representing any valid time input for creation time:
 * - Unix timestamp (number)
 * - ISO date string (string)
 * - JavaScript Date object (Date)
 */
type Timestamp = number | string | Date;

/**
 * @interface CountdownProps
 * Properties required to initialize the countdown timer.
 */
export interface CountdownProps {
  /**
   * @property {Timestamp} createdAt
   * The absolute starting time when the event (e.g., QR code, order) was created.
   */
  createdAt: Timestamp;

  /**
   * @property {number} duration
   * The fixed lifetime of the event in **milliseconds** (Time-To-Live, TTL).
   * Example: For a 5-minute expiry, set this to 300000 (300 * 1000).
   */
  duration: number;

  /**
   * @property {number | Date | null} [now]
   * Optional: An external, reliable source for the current time (in milliseconds or Date Object).
   * If provided, the hook uses this for high-accuracy ticking instead of internal timers.
   */
  now?: number | Date | null;
}

/**
 * @interface CountdownReturn
 * The structure of the object returned by the useCountdown hook.
 */
export interface CountdownReturn {
  /**
   * @property {number} remainingTime
   * The remaining time in **seconds** (integer). Returns 0 if expired.
   */
  remainingTime: number;

  /**
   * @property {string} countdownTime
   * The remaining time formatted as a string in the "MM:SS" (Minutes:Seconds) format.
   */
  countdownTime: string;

  /**
   * @property {boolean} timeout
   * Flag indicating whether the countdown has finished and reached zero.
   * This is true when remainingTime is 0.
   */
  timeout: boolean;
}

// Helper function: Convert Date/number to Timestamp (milliseconds)
/**
 * @function useCountdown
 * Custom Hook for calculating and tracking a countdown timer based on a creation time
 * and a fixed duration.
 * * @param {CountdownProps} props - The configuration properties for the countdown.
 * @returns {CountdownReturn} An object containing the remaining time in seconds and the formatted string.
 */
const getTimestamp = (
  value: number | Date | undefined | null
): number | undefined => {
  if (value === undefined || value === null) return undefined;
  if (value instanceof Date) {
    return value.getTime();
  }
  if (typeof value === "number") {
    return value;
  }
  return undefined;
};
const formatCountdownTime = ({ totalSeconds }: { totalSeconds: number }) => {
  if (totalSeconds <= 0) {
    return "00:00";
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};
const useCountdown = ({
  createdAt,
  duration,
  now,
}: CountdownProps): CountdownReturn => {
  // Convert 'now' prop into a consistent number timestamp
  const nowTimestamp: number | undefined = useMemo(
    () => getTimestamp(now),
    [now]
  );

  // 1. Memoize Expiry Time
  const expiryTime: number = useMemo(() => {
    const startTime: number = new Date(createdAt).getTime();
    // T_Exp = T_Create + duration (since duration is now in ms)
    return startTime + duration; // <<<--- แก้ไขที่ 1: ลบ * 1000 ออก
  }, [createdAt, duration]);

  // 2. State for Remaining Time (Initial calculation is self-contained)
  const [remainingTime, setRemainingTime] = useState<number>(() => {
    const initialCurrentTime =
      nowTimestamp !== undefined ? nowTimestamp : Date.now();
    const initialTime: number = Math.floor(
      (expiryTime - initialCurrentTime) / 1000
    );
    return Math.max(0, initialTime);
  });

  useEffect(() => {
    const currentTimeSource =
      nowTimestamp !== undefined ? nowTimestamp : Date.now();
    const newInitialTime: number = Math.floor(
      (expiryTime - currentTimeSource) / 1000
    );
    setRemainingTime(Math.max(0, newInitialTime));
  }, [expiryTime, nowTimestamp]);

  useEffect(() => {
    if (remainingTime <= 0) {
      return;
    }

    if (nowTimestamp !== undefined) {
      const timeDifference: number = expiryTime - nowTimestamp;
      if (timeDifference <= 0) {
        setRemainingTime(0);
        return;
      }

      const newRemainingTime: number = Math.floor(timeDifference / 1000);
      if (newRemainingTime !== remainingTime) {
        setRemainingTime(newRemainingTime);
      }
      return;
    }

    const tick = (): void => {
      const timeDifference: number = expiryTime - Date.now();
      if (timeDifference <= 0) {
        setRemainingTime(0);
      } else {
        setRemainingTime(Math.floor(timeDifference / 1000));
      }
    };

    const intervalId: NodeJS.Timeout = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, [expiryTime, nowTimestamp, remainingTime]);

  return {
    remainingTime,
    countdownTime: formatCountdownTime({ totalSeconds: remainingTime }),
    timeout: remainingTime <= 0,
  };
};

export default useCountdown;
