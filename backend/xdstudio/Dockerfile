# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build TypeScript
RUN yarn build

# Stage 2: Runtime
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Optional: If you're using Prisma Client
RUN npx prisma generate

# Set environment variables at runtime via docker-compose or `.env`
ENV NODE_ENV=production

# Expose port
EXPOSE 4000

# Start the server
CMD ["node", "dist/bin/www.js"]
