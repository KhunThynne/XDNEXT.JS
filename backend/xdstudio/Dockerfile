# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build
RUN npx prisma generate

# Stage 2: Runtime
FROM node:18-alpine

WORKDIR /app

# Copy build files and prisma client
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

ENV NODE_ENV=production

# ถ้าอยากปลอดภัยให้ reinstall production deps สำหรับ alpine
RUN npm install --production --frozen-lockfile

EXPOSE 4000

CMD ["node", "dist/bin/www.js"]
