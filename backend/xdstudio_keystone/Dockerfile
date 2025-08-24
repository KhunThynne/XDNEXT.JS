ARG NODE_VERSION=20-alpine
ARG DUMB_INIT_VERSION=1.2.2

# Stage 1: Build
FROM node:${NODE_VERSION} AS build
ARG DUMB_INIT_VERSION

WORKDIR /backend/xdstudio_keystone

RUN apk update && apk add --no-cache \
    build-base \
    python3 \
    openssl-dev \
    wget \
    curl

RUN wget -O dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
    chmod +x dumb-init && \
    mv dumb-init /usr/local/bin/

COPY . /backend/xdstudio_keystone

RUN npm install --ignore-scripts


# Stage 2: Runtime
FROM node:${NODE_VERSION}

WORKDIR /backend/xdstudio_keystone
RUN apk add --no-cache openssl

COPY --from=build /usr/local/bin/dumb-init /usr/local/bin/dumb-init
COPY --from=build /backend/xdstudio_keystone /backend/xdstudio_keystone
# RUN npm run dev & sleep 5 && pkill -f "node" || true
RUN npx prisma generate
RUN npm run build
RUN npm cache clean --force
EXPOSE 3001

CMD ["dumb-init", "--", "npm", "start"]
