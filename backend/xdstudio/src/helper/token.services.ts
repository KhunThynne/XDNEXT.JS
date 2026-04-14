import env from '@/env';
import { sign, verify } from 'jsonwebtoken';

export function generateAccessToken(payload: object) {
  return sign(payload, env.JWT_ACCESS_SECRET!, {
    expiresIn: (env.JWT_ACCESS_EXPIRES ?? '15m') as unknown as undefined,
  });
}
export function generateRefreshToken(payload: object) {
  return sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: (env.JWT_REFRESH_EXPIRES ?? '15m') as unknown as undefined,
  });
}

export function verifyAccessToken(token: string) {
  return verify(token, env.JWT_ACCESS_SECRET);
}

export function verifyRefreshToken(token: string) {
  return verify(token, env.JWT_REFRESH_SECRET);
}
