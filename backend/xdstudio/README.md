# ExpressThynne.ty

# Express GraphQL Backend (with Prisma)

🚀 Backend API using [Express](https://expressjs.com/) + [GraphQL](https://graphql.org/) + [Prisma](https://www.prisma.io/) + [Zod](https://github.com/colinhacks/zod)

## 📦 Features

- ⚡ GraphQL API (`/graphql`) using `graphql-http`
- 🎯 Type-safe resolvers generated with `graphql-codegen`
- 🧩 Prisma ORM for database access
- 📐 Input validation with Zod
- 🧹 Clean build system with `tsc`, `tsc-alias`, and `copyfiles`
- 🛡️ ESLint with Prettier integration
- 🗂️ Environment config via `.env` and `dotenv`

---

## 📁 Folder Structure (Simplified)

backend/
├── bin/
│ └── www.ts # App entry point
├── src/
│ ├── graphql/ # GraphQL schema & resolvers
│ ├── middleware/ # Custom middlewares
│ ├── prisma/ # Prisma client & schema
│ ├── views/ # EJS templates (for any SSR or pages)
│ └── index.ts # Main express app
├── .env # Environment variables
├── codegen.ts # GraphQL Codegen config
├── tsconfig.json
└── package.json

---

## 🚀 Scripts

| Command         | Description                                     |
|----------------|-------------------------------------------------|
| `yarn dev`      | Run in development with hot-reload + codegen    |
| `yarn build`    | Compile TypeScript, fix aliases, copy non-TS    |
| `yarn start`    | Run compiled JS in production mode              |
| `yarn codegen`  | Generate TypeScript types from GraphQL schema   |
| `yarn lint`     | Run ESLint static analysis                      |
| `yarn lint:fix` | Auto-fix lint errors where possible             |
| `yarn clean`    | Remove `dist` folder                            |

---

## 🔧 Environment Setup

Create a `.env` file at the **project root**, not inside `src` or `backend`.

```env
NODE_ENV=development
DATABASE_URL=mysql://user:pass@localhost:3306/db
SECRET_KEY=your-secret
