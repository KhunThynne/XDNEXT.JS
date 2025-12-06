# 🎨 XD Studio - Frontend

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**The client-side application for XD Studio, built with the latest web technologies.**

</div>

---

## 🛠️ Tech Stack

This project is built on the **Bleeding Edge** of the React ecosystem.

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Server Actions)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4 + [Radix UI](https://www.radix-ui.com/) (Headless Components)
-   **State Management**:
    -   Global UI State: [Zustand](https://github.com/pmndrs/zustand)
    -   Server State: [TanStack Query v5](https://tanstack.com/query/latest)
-   **Forms**: React Hook Form + Zod
-   **Real-time**: Socket.IO Client
-   **Internationalization**: `next-intl`

## 🚀 Getting Started

### Prerequisites

Ensure you have the backend services running (Postgres, Redis, KeystoneJS) or use Docker.

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 🏗️ Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📜 Key Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with TurboPack. |
| `npm run build` | Builds the application for production usage. |
| `npm run lint:fix` | Runs ESLint and automatically fixes fixable issues. |
| `npm run codegen` | Generates TypeScript types from GraphQL schema (KeystoneJS). |
