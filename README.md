🚀 Full Stack Web Application
+-------------------+
|  Frontend (Next.js)  |
+-------------------+
          |
          | POST /api/resource
          v
+-------------------+
| Next.js Backend    |
| (API Route / Proxy)|
+-------------------+
| - Validate request (Zod)
| - Authenticate / Authorize
| - Error handling (handleError)
| - Call services
|   ├─ Keystone Backend (DB)
|   ├─ Core Backend (FastAPI / AI)
|   └─ Omise API (Payment)
+-------------------+
          |
          v
+-------------------+
| Response to Frontend|
+-------------------+

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
npm install
npm run dev

# Backend
cd backend
npm install
npx prisma generate
npm run dev
📄 License
MIT