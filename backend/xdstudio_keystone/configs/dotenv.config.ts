import path from 'path';
import * as dotenv from 'dotenv';
// export * from '@xd/shared/types/realtime';
const isProd = process.env.NODE_ENV === 'product';

const envFiles = isProd
  ? [
      '.env.production.local',
      '.env.production',
      '../../.env.production',
      'backend/.env.production',
      '.env', // fallback
    ]
  : ['../../.env', 'backend/.env', '.env'];

for (const envPath of envFiles) {
  dotenv.config({
    path: path.resolve(process.cwd(), envPath),
    override: true,
  });
}
