# Argent Bank - React Frontend

**Dynamic Redux version of the Argent Bank project (OpenClassrooms P10)**  
Enhanced version featuring **real API calls**, **async state management**, and **modular React architecture**.


---

## 🚀 Features

- 🔐 Authentication with JWT (Login / Logout / Profile)
- 🧠 State management with **Redux Toolkit**
- 🌐 Dynamic API calls (GET, PATCH)
- 🧾 Transactions module with real backend structure
- 🎨 Responsive design + Converted assets to **WebP**
- 🧰 Clean, scalable folder organization

---

## 🛠️ Tech Stack

- **React 20 (Create React App)** – Frontend framework for building dynamic UI  
- **Redux Toolkit** – Centralized state management for authentication and user data  
- **Axios** – HTTP client for secure API communication  
- **React Router v6** – Client-side routing and protected route handling  
- **CSS** – Responsive and clean styling  
- **JWT Authentication** – Secure login, logout, and session persistence via token storage  
- **Swagger (OpenAPI 2.0)** – API documentation and endpoint specification


---

## 📂 Project Structure

src/
├── components/ # Reusable React components
├── features/ # Redux slices (auth, accounts, transactions)
├── pages/ # Application pages (Login, Dashboard, etc.)
├── services/ # API services (axios calls)
├── styles/ # CSS global + variables
└── App.js # Main app & routing

---

## 🔑 API Endpoints

Backend available at: `http://localhost:3001/api/v1`

- `POST /user/login` → Authenticate user (returns JWT)
- `POST /user/profile` → Get user profile (requires JWT)
- `PUT /user/profile` → Update user profile
- `GET /accounts` → Get all user accounts
- `GET /accounts/:id/transactions` → Get account transactions

### 📘 Notes
- All protected routes require a valid **JWT** in the `Authorization` header, formatted as:
- HTTP Status Codes implemented:
- `200` → Success  
- `400` → Bad request (invalid data)  
- `401` → Unauthorized (missing or invalid token)  
- `403` → Forbidden (accessing another user’s data)  
- `404` → Not found (resource doesn’t exist)  
- `500` → Internal server error  

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

