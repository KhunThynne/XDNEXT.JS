import clsx from "clsx";
import React from "react";

interface CountdownTimerProps extends WithClassName {
  count: number; // milliseconds
  onExpire?: () => void;
}

export const CountdownTimer = ({
  count,
  onExpire,
  className,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = React.useState(count);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          onExpire?.(); // notify parent
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [count, onExpire]);

  if (timeLeft <= 0) return <span>Expired</span>;

  const minutes = Math.floor(timeLeft / 1000 / 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return (
    <span className={clsx("font-mono text-lg", className)}>
      {formattedMinutes}:{formattedSeconds}
    </span>
  );
};
