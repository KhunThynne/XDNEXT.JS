// src/libs/redis/publisher.ts

import { env } from "@/env";
import { createClient } from "redis";

const REDIS_HOST = env.REDIS_HOST || "localhost";
const REDIS_PORT = env.REDIS_PORT || "6379";
const REDIS_URL = `redis://${REDIS_HOST}:${REDIS_PORT}`;

const publisher = createClient({ url: REDIS_URL });
export interface PaymentSuccessEvent {
  type: "payment.success";
  data: {
    orderId: string;
    amount: number;
  };
}

export type RealtimeEvent = PaymentSuccessEvent;

export const SOCKET_EVENT_NAME = "keystone-update";

export const REALTIME_CHANNEL = "keystone-socket";

publisher.on("error", (err: unknown) =>
  console.error("❌ Redis Publisher Error:", err)
);
publisher.connect().then(() => {
  console.log("✅ Redis Publisher Client Connected.");
});

export const publishRealtimeEvent = async (event: RealtimeEvent) => {
  try {
    if (!publisher.isOpen) {
      await publisher.connect();
    }

    const message = JSON.stringify(event);
    await publisher.publish(REALTIME_CHANNEL, message);
    console.log(`📡 Published Event to Redis: ${event.type}`);
  } catch (e) {
    console.error(`🚨 Failed to publish event (${event.type}) to Redis:`, e);
  }
};
