import path from 'path'
import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'product') {
  const envFiles = [
    path.resolve(process.cwd(), '.env.local'),
    '/backend/.env.local',
    path.resolve(process.cwd(), '../../.env'),
    '/backend/.env'
  ]

  for (const envPath of envFiles) {
    dotenv.config({
      path: envPath,
      debug: false,
      quiet: true
    })
  }
}
