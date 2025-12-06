<div align="center">

# 🚀 XD Studio
### The Next-Gen Full Stack Experience
🚀 Full Stack Web Application
<!-- stripe listen --forward-to localhost:3000/api/stripe/webhooks/ -->
🧩 Tech Stack
🖥️ Frontend
Next.js – React Framework with App Router support

TypeScript – Static typing for scalable code

Tailwind CSS – Utility-first CSS framework

shadcn/ui – Beautiful, customizable component library built on Radix UI

NextAuth.js – Authentication for Next.js

Zod – Type-safe schema validation

Redux Toolkit – State management made easy

🛠️ Backend
Express.js – Fast, minimalist Node.js web framework

TypeScript – Type safety across backend logic

GraphQL – Flexible API query language

Prisma ORM – Modern database toolkit (supports PostgreSQL, MySQL, SQLite, etc.)

🔐 Authentication
Uses NextAuth.js with support for:

Credentials Provider / OAuth Providers

Session-based auth across API and frontend

Secure route protection with middleware

✅ Form Validation
Implemented using Zod for both frontend and backend validation schemas, ensuring type-safe validation rules and reducing duplication.

📦 State Management
Utilizes Redux Toolkit to handle global state efficiently, with clean slice-based architecture and RTK Query (optional).

⚙️ Database
Managed via Prisma with support for:

Schema migrations

Type-safe query building

Seed and transaction handling

📡 API
Fully powered by GraphQL using Apollo Server on top of Express.js

Resolvers organized modularly with Prisma as the data source

Supports query/mutation structure and authentication guards

🛠️ Setup & Development
Prerequisites
Node.js ≥ 18

PostgreSQL or other database supported by Prisma

Development
bash
Copy
Edit


# Frontend
cd frontend

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![KeystoneJS](https://img.shields.io/badge/KeystoneJS-6.0-283142?style=for-the-badge&logo=keystone&logoColor=white)](https://keystonejs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

<p align="center">
  <b>A bleeding-edge enterprise application powered by Next.js 16 and KeystoneJS 6.</b><br />
  Designed for scalability, performance, and modern developer experience.
</p>

</div>

---

## 💎 Premium Tech Stack

This project leverages the latest and greatest technologies to ensure a robust and scalable architecture.

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | [**Next.js 16**](https://nextjs.org/) | App Router, Server Actions, and React 19 support. |
| **UI Library** | [**Radix UI**](https://www.radix-ui.com/) | Accessible, unstyled components for building high-quality design systems. |
| **Styling** | [**Tailwind CSS 4**](https://tailwindcss.com/) | A utility-first CSS framework for rapid UI development. |
| **State** | [**Zustand**](https://zustand-demo.pmnd.rs/) | A small, fast, and scalable bearbones state-management solution. |
| **Backend** | [**KeystoneJS 6**](https://keystonejs.com/) | Headless CMS and GraphQL API with powerful access control. |
| **Microservice** | [**FastAPI**](https://fastapi.tiangolo.com/) | High-performance Python framework for AI and utility services (Payment/Bot). |
| **Database** | [**PostgreSQL**](https://www.postgresql.org/) | The world's most advanced open source relational database. |
| **Infrastructure** | [**Docker**](https://www.docker.com/) | Containerized environment with Nginx reverse proxy. |

## ✨ Key Features

- **🔐 Robust Authentication**: Powered by NextAuth.js v5 and KeystoneJS session management.
- **🌍 Internationalization (i18n)**: Fully supported via `next-intl`.
- **⚡ Real-time Updates**: Integrated Socket.IO for live data and notifications.
- **🛒 Dynamic E-commerce**: Complex state management for carts and orders using TanStack Query.
- **🎨 Modern UI/UX**: Animations with Framer Motion and sleek accessible components.

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (Optional, for containerized run)
- [Python](https://www.python.org/) (For FastAPI service)

### 🛠️ Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/KhunThynne/XDStudio.git
    cd XDStudio
    ```

2.  **Environment Setup**
    Create `.env` files in `frontend/xdstudio` and `backend/xdstudio_keystone` based on the `.env.example` files provided.

### 🏃‍♂️ Running with Docker (Recommended)

The easiest way to start the entire stack is using Docker Compose.

```bash
docker-compose up --build
```
> This will start Frontend (Port 3000), Backend (Port 3001), PostgreSQL, Redis, and Nginx.

### 👨‍💻 Running Manually (Development)

If you prefer running services individually:

#### Frontend
```bash
cd frontend/xdstudio
npm install
npm run dev
```
> Accessible at `http://localhost:3000`

#### Backend (KeystoneJS)
```bash
cd backend/xdstudio_keystone
npm install
npm run dev
```
> Admin UI accessible at `http://localhost:3000` (proxied) or `http://localhost:3001`

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
