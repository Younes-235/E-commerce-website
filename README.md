# Full-Stack E-Commerce Platform

A production-ready full-stack e-commerce application featuring real-time inventory management, role-based access control, automated email notifications, and activity auditing.

Built with **React, Node.js, Express, Prisma ORM, PostgreSQL, MongoDB, Docker, and TanStack Query**.

---

## Features

- JWT Authentication (Register / Login)
- Role-Based Access Control (User & Admin)
- Dynamic Product Catalog
  - Search
  - Category Filtering
  - Sorting
- Smart Shopping Cart
  - Automatic Stock Clamping
  - Real-Time Synchronization
- User Dashboard (`/profile`)
- Admin Dashboard (`/admin`)
- Audit Log System (`/admin/logs`)
- Health Check API
- Protected Routes
- Dynamic Registration Emails (Nodemailer + Ethereal)
- Dockerized Full Stack
- Unit & Integration Testing

---

# Tech Stack

## Frontend

- React 18
- React Router v6
- TanStack Query v5
- Axios
- Vite
- Context API

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- MongoDB
- JWT Authentication
- Bcrypt
- Nodemailer

## Testing

### Backend

- Jest
- Supertest

### Frontend

- Vitest
- React Testing Library

## Infrastructure

- Docker
- Docker Compose

---

# Application URLs

| Service | URL |
| -------- | --- |
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000/api |
| Health Check | http://localhost:5000/health |

---

# Routes

## Public

```
/
/products
/products/:id
/login
/register
/unauthorized
```

## Protected (User & Admin)

```
/cart
/profile
```

## Admin Only

```
/admin
/admin/logs
```

---

# Running the Project

## 1. Clone Repository

```bash
git clone https://github.com/Younes-235/fullstack-ecommerce-younes-aly.git

cd fullstack-ecommerce-younes-aly
```

---

## 2. Configure Environment Variables

Inside the `backend` directory, either:

- Rename the included `.env.example` file to `.env`, **or**
- Create a new file named `.env` and copy the contents from `.env.example`.

Your `backend/.env` file should contain:

```env
DATABASE_URL="postgresql://myuser:mypassword@postgres_db:5432/my_relational_db?schema=public"

MONGO_URI="mongodb://rootuser:rootpassword@mongo_db:27017/my_document_db?authSource=admin"

JWT_SECRET=4c9f1b7a2d8e6c3b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b

PORT=5000
```

---

## 3. Run with Docker

```bash
docker-compose up --build -d
```

Once the containers have started, the application will be available at:

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/health

The `/health` endpoint can be used to confirm that the backend API is running successfully.

---

## 4. Run Tests

Backend:

```bash
cd backend
npm test
```

Frontend:

```bash
cd frontend
npm test
```

---

## 5. Stop Containers

Stop containers while preserving data:

```bash
docker-compose stop
```

Remove containers, networks, and volumes:

```bash
docker-compose down -v
```

---

# Local Development

Start only the databases:

```bash
docker-compose up -d postgres_db mongo_db
```

### Backend

```bash
cd backend

npm install

npx prisma generate

npx prisma migrate dev

npx prisma db seed

npm run dev
```

### Frontend

Open a new terminal:

```bash
cd frontend

npm install

npm run dev
```

---

# Test Accounts

## Admin

```text
Email: admin@example.com
Password: AdminSecure123!
```

## Customer

```text
Email: customer@example.com
Password: password123
```

---

# Technical Highlights

### Inventory Protection

Cart quantities automatically clamp to available inventory in real time.

### Activity Logging

Tracks:

- PRODUCT_CREATED
- PRODUCT_UPDATED
- PRODUCT_DELETED
- USER_REGISTERED
- ORDER_PLACED
- ORDER_STATUS_UPDATED

### Automated Emails

Every user registration generates a temporary Ethereal inbox through Nodemailer. (It's link can be found in the terminal after registration)

### Optimized Caching

TanStack Query keeps product, cart, and profile data synchronized across the application.

### Security

JWT authentication and role middleware secure all protected endpoints.

---

# Repository

https://github.com/Younes-235/fullstack-ecommerce-younes-aly