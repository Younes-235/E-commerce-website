========================================
Full-Stack E-Commerce Platform
========================================

Project Overview
----------------
A production-ready full-stack e-commerce web application featuring real-time inventory management, role-based access control, dynamic email notifications, and continuous activity auditing. Built with React, Node.js, Express, Prisma ORM, PostgreSQL, MongoDB, and TanStack Query.

Key Features
------------
- User Authentication (JWT-based Register/Login)
- Automated Dynamic Emails (Nodemailer integration generating temporary test accounts via Ethereal on registration)
- Role-Based Access Control (User & Admin permissions)
- Dynamic Product Catalog (Search, Category Filters, Sorting)
- Smart Shopping Cart (Automated backend stock clamping & auto-sync)
- User Profile Dashboard (/profile)
- Admin Management Panel (/admin)
- System Audit Logs (/admin/logs) for tracking event lifecycle
- System Health Monitoring (Dedicated API health check endpoint)
- Protected Routes using custom React components
- Full-Stack Containerization via Docker Compose (PostgreSQL, MongoDB, Backend API, and Frontend App)
- Unit & Integration Testing setup for Frontend and Backend

========================================

Tech Stack

Frontend
- React (v18)
- React Router (v6)
- TanStack Query (React Query v5)
- Axios
- Vite
- Context API (AuthContext)

Backend
- Node.js & Express.js
- Prisma ORM
- PostgreSQL & MongoDB
- JSON Web Tokens (JWT)
- Bcrypt Password Hashing
- Nodemailer (Temporary email generation during registration)

Testing & Infrastructure
- Jest & Supertest (Backend API Testing)
- Vitest & React Testing Library (Frontend UI Testing)
- Docker & Docker Compose

========================================

API Base & Service Paths

- Frontend Web Interface:   http://localhost:5173
- Backend API Base Path:   http://localhost:5000/api
- Health Check Endpoint:   http://localhost:5000/health

========================================

Application Routes

Public Routes
- /                          (Home)
- /products                  (Catalog)
- /products/:id              (Product Details)
- /login & /register         (Authentication)
- /unauthorized              (Access Denied)

Protected Routes (User & Admin)
- /cart                      (Shopping Cart & Checkout)
- /profile                   (User Profile Dashboard)

Protected Routes (Admin Only)
- /admin                     (Inventory & Store Management)
- /admin/logs                (System Activity Audit Trail)

========================================

How To Run

Step 1: Clone the Repository
---------------------------
git clone https://github.com/Younes-235/E-commerce-website.git
cd E-commerce-website

Step 2: Configure Environment Variables
-------------------------------------
Create a .env file inside the backend directory (backend/.env) with the following variables:

DATABASE_URL="postgresql://myuser:mypassword@postgres_db:5432/my_relational_db?schema=public"
MONGO_URI="mongodb://rootuser:rootpassword@mongo_db:27017/my_document_db?authSource=admin"
JWT_SECRET=4c9f1b7a2d8e6c3b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b
PORT=5000

Step 3: Run via Docker Compose (Recommended Full Stack)
------------------------------------------------------
# Build and spin up all containers (PostgreSQL, MongoDB, Backend API, Frontend App)
docker-compose up --build -d

Step 4: Running Tests Inside Docker Containers
----------------------------------------------
# Run Backend Tests inside running container
docker exec -it l5_backend npm test

# Run Frontend Tests inside running container
docker exec -it l5_frontend npm test

Step 5: Stopping Docker Containers
----------------------------------
# Stop containers while preserving data volumes
docker-compose stop

# Stop and remove containers, networks, and volumes
docker-compose down -v

Step 6: Alternative Local Development (Without Docker for Node services)
----------------------------------------------------------------------
# 1. Start only databases via Docker
docker-compose up -d postgres_db mongo_db

# 2. Setup & Run Backend locally
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run dev

# 3. Setup & Run Frontend locally (in a new terminal)
cd frontend
npm install
npm run dev

# 4. Run tests locally
cd backend && npm test
cd frontend && npm test

========================================

Project Repository

GitHub Repository:
https://github.com/Younes-235/E-commerce-website

========================================

Test Credentials

Admin Account
Email: admin@example.com
Password: AdminSecure123!

Customer Account
Email: customer@example.com
Password: password123

========================================

Technical Highlights

- Inventory Protection: Cart quantities automatically clamp to remaining product stock in real time during checkout or inventory updates.
- Activity Logging: Tracks major system actions including PRODUCT_CREATED, PRODUCT_UPDATED, PRODUCT_DELETED, USER_REGISTERED, ORDER_PLACED, and ORDER_STATUS_UPDATED.
- Automated Email Delivery: Integrated Nodemailer with Ethereal to automatically generate a new temporary test email inbox upon each user registration.
- Optimized Caching: TanStack Query manages cross-view state synchronization and background query invalidation.
- Security: Role middleware enforces strict JWT claims on administrative backend endpoints.

========================================