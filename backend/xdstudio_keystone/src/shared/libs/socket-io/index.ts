import { Server as HttpServer } from 'http';
import { KeystoneContext } from '@keystone-6/core/types';
import { Server as SocketIoServer } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import env from '../../../../env';

import { publisher, REDIS_URL } from '../redis/publisher';

const IntigrationSocketIo = async (server: HttpServer, context: KeystoneContext) => {
  const io = new SocketIoServer(server, {
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  let isRedisConnected = false;

  try {
    const subClient = publisher.duplicate();
    await Promise.all([publisher.connect(), subClient.connect()]);

    io.adapter(createAdapter(publisher, subClient));
    isRedisConnected = true;
    console.log(`✅ Socket.IO Adapter Connect Redis (${REDIS_URL}) แล้ว`);
    publisher.on('error', (err) => console.error('❌ Redis Publisher Error:', err));
  } catch (error) {
    console.error(`❌ Something wrong Redis  ${REDIS_URL}:`);
    console.error('   Socket.IO  Single-Server ( Redis Adapter)');
  }

  io.on('connection', (socket) => {
    console.log(`[Socket.IO] New client connected: ${socket.id}`);
    if (!isRedisConnected) {
      console.log(
        '   ⚠️ Alert: Redis Adapter is NOT active. Real-time across multiple workers will fail.',
      );
    }
  });

  return io;
};

export default IntigrationSocketIo;
