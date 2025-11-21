FROM node:23 AS base
# RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000
RUN npm install 

FROM base AS builder
WORKDIR /app
COPY . .
RUN --mount=type=secret,id=appenv_production \
    --mount=type=secret,id=appenv \
    set -a && \
    . /run/secrets/appenv_production && \
    . /run/secrets/appenv && \
    set +a && \
    npm run build

FROM base AS dev
ENV NODE_ENV=development
COPY . .
CMD ["npm", "run","dev"]

FROM base AS production
WORKDIR /app
ENV NODE_ENV=production

# RUN adduser -S nextjs -u 1001
# USER nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/messages ./messages
COPY --from=builder /app/configs ./configs
CMD ["next", "start"]


# DOCKER_BUILDKIT=1 docker buildx build --no-cache --target production --secret id=appenv,src=/d/WorkStation/XDStudio/.env.production --secret id=appenv_production,src=.env.production -t xdstudio/frontend .