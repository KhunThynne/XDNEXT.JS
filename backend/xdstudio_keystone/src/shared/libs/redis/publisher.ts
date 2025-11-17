// src/libs/redis/publisher.ts
import { Emitter } from '@socket.io/redis-emitter';
import { createClient } from 'redis';
import { RealtimeEvent, REALTIME_CHANNEL } from '@xd/shared';
import env from '../../../../env';

const REDIS_HOST = env.REDIS_HOST || 'localhost';
const REDIS_PORT = env.REDIS_PORT || '6379';
export const REDIS_URL = `redis://${REDIS_HOST}:${REDIS_PORT}`;

export const publisher = createClient({ url: REDIS_URL });
export const emitter = new Emitter(publisher);
export const publishRealtimeEvent = async (event: RealtimeEvent) => {
  try {
    if (!publisher.isOpen) {
      await publisher.connect();
    }
    const message = JSON.stringify(event);
    emitter.emit(REALTIME_CHANNEL, message);
    console.log(`📡 Published Event to Redis: ${event.type}`);
  } catch (e) {
    console.error(`🚨 Failed to publish event (${event.type}) to Redis:`, e);
  }
};
