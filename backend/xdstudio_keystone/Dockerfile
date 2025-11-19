ARG NODE_VERSION=20-slim
ARG DUMB_INIT_VERSION=1.2.2

# Stage 1: Build
FROM node:${NODE_VERSION} AS build
ARG DUMB_INIT_VERSION

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    openssl \
    wget \
    curl \
    && rm -rf /var/lib/apt/lists/*


RUN wget -O dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
    chmod +x dumb-init && \
    mv dumb-init /usr/local/bin/

COPY . /app

RUN npm install --ignore-scripts
RUN npm dedupe
COPY . . 
RUN --mount=type=secret,id=appenv \
    --mount=type=secret,id=appenv_production \
    set -a && \
    . /run/secrets/appenv && \
    . /run/secrets/appenv_production && \
    set +a && \
    npx prisma generate  && npm run build
    

# Stage 2: Runtime
FROM build AS production

WORKDIR /app
# RUN apk add --no-cache openssl

COPY --from=build /usr/local/bin/dumb-init /usr/local/bin/dumb-init
COPY --from=build /app /app
RUN npm run dev & sleep 5 && pkill -f "node" || true

RUN npm cache clean --force
EXPOSE 3001

CMD ["dumb-init", "--", "npm", "start"]
