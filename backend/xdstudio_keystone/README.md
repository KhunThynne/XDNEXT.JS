# 🛡️ XD Studio - Backend

<div align="center">

[![KeystoneJS](https://img.shields.io/badge/KeystoneJS-6.0-283142?style=for-the-badge&logo=keystone&logoColor=white)](https://keystonejs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

**The core content management and API layer for XD Studio.**

</div>

---

## 🏗️ Architecture

This service acts as the **source of truth** for data, utilizing KeystoneJS as a Headless CMS and GraphQL API.

-   **Core**: [KeystoneJS 6](https://keystonejs.com/)
-   **Database**: PostgreSQL
-   **ORM**: Prisma
-   **Caching & Queues**: Redis
-   **Real-time**: Socket.IO Server
-   **API**: GraphQL

## 🚀 Getting Started

### Prerequisites

-   PostgreSQL Database
-   Redis Server

*Tip: Use `docker-compose up -d postgresql redis` from the root directory to start infrastructure.*

### Development

```bash
# Install dependencies
npm install

# Start development server (Admin UI + API)
npm run dev
```

Visit the Admin UI at [http://localhost:3000](http://localhost:3000) (or 3001 if behind proxy).

### 🗄️ Database Management (Prisma)

We use Prisma to manage the database schema.

```bash
# Apply migrations to the database
npm run generate

# Push schema changes (Prototyping)
npm run push

# Open Prisma Studio (Database GUI)
npx prisma studio
```

## 📦 Deployment

```bash
# Build the project
npm run build

# Deploy migrations and start
npm run start
```
