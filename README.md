# Argent Bank - React Frontend

Argent Bank is a responsive **React frontend application** for a fictional online banking platform.  
It allows users to securely authenticate, view and edit their profile, access multiple bank accounts, and manage their transactions.  
Built with **React 20, Redux Toolkit, Axios, CSS, and React Router v6**, this project demonstrates modern frontend architecture and API integration in a real-world SaaS use case.  

This project is part of the **OpenClassrooms – Web Integrator** path (Project 10). 

---

## 🚀 Features

- User authentication (JWT login)
- Dashboard with user profile information
- Multiple accounts list (fetched dynamically from API)
- Transaction history per account
- Transaction detail expansion (category, notes)
- Edit profile (user name /first name / last name)
- Responsive design (mobile-first)

---

## 🛠️ Tech Stack

- **React 20** (Create React App)
- **Redux Toolkit** (state management)
- **Axios** (API calls)
- **React Router v6**
- **CSS** (styling)
- **JWT Authentication**

---

## 📂 Project Structure

src/
├── components/ # Reusable React components
├── features/ # Redux slices (auth, accounts, transactions)
├── pages/ # Application pages (Login, Dashboard, etc.)
├── services/ # API services (axios calls)
├── styles/ # SCSS global + variables
└── App.js # Main app & routing

---

## 🔑 API Endpoints

Backend available at: `http://localhost:3001/api/v1`

- `POST /user/login` → Authenticate user (returns JWT)
- `POST /user/profile` → Get user profile (requires JWT)
- `PUT /user/profile` → Update user profile
- `GET /accounts` → Get all user accounts
- `GET /accounts/:id/transactions` → Get account transactions

---

2️⃣ Backend Setup
cd Backend
npm install


Create a .env file in Backend/ with your MongoDB URL & JWT secret:

PORT=3001
MONGO_URI=mongodb://localhost:27017/argentbank
JWT_SECRET=yourSecretKey


Start Backend:
npm install
npm run dev:server


API will be available at 👉 http://localhost:3001/api/v1

Swagger docs available at 👉 http://localhost:3001/api-docs

3️⃣ Frontend Setup

Open a new terminal:

cd react-frontend
npm install
npm start

Frontend will run at 👉 http://localhost:3000

🧪 Scripts
Backend
cd Backend
npm install
npm run dev:server

Frontend
cd react-frontend
npm start

## 📸 Screenshots

### 🟢 Login
![Login](./img/login.png)

### 🟢 Dashboard (Accounts Overview)
![Dashboard](./img/dashboard.png)

### 🟢 Transactions
![Transactions](./img/transactions.png)

### 🟢 Transaction Details
![Transaction Details](./img/transaction-details.png)


👤 Author

Sun Ting (Solène)

GitHub: https://github.com/Smy619

Formation: OpenClassrooms - Web integrator

