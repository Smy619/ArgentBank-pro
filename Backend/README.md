# Argent Bank API

This repository contains the backend API for the Argent Bank banking web application.

It handles:

- User authentication via JWT
- Protected profile endpoints
- Secure username updates
- MongoDB database integration
- Production deployment on Render
- Swagger/OpenAPI documentation

## 🚀 Production Backend URL
https://argentbank-pro.onrender.com
> This URL is used by the deployed frontend.


## 🧾 Swagger API Documentation

### Production

https://argentbank-pro.onrender.com/api-docs

### Local
http://localhost:3001/api-docs

## 🧰 Tech Stack
| Layer | Technology |
|-------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas |
| Auth | JWT |
| API Spec | Swagger/OpenAPI |
| Hosting | Render.com |

## 📦 Installation

Clone the project:
git clone https://github.com/Smy619/ArgentBank-pro.git

Navigate to backend folder:
cd Backend

Install dependencies:
npm install

⚙️ Running Locally

Development server:

npm run dev:server

Backend will be available at:
http://localhost:3001


👤 Seeded Test Users

Tony Stark

Email: tony@stark.com

Password: test1234

Steve Rogers

Email: steve@rogers.com

Password: test1234

Note: These are stored securely (hashed) in MongoDB.

🔐 Authentication

All secured routes require:

Authorization: Bearer <jwt_token>
Token is returned from /login.

📌 API Endpoints
✅ Signup
POST /api/v1/user/signup

✅ Login
POST /api/v1/user/login

Response:
{
  "token": "<jwt>"
}

✅ Get Profile (requires token)
GET /api/v1/user/profile

✅ Update Profile Username (requires token)
PUT /api/v1/user/profile

{
  "userName": "NewName"
}

🔐 Token Middleware
Located at:

middleware/tokenValidation.js

Validates JWT from header.

🌍 Environment Variables
Create .env in /Backend:

TOKEN_SECRET=YourSecretHere
MONGODB_URI=your_mongodb_atlas_connection
PORT=3001
ENABLE_SWAGGER=true

🧠 Security Notes
Passwords are hashed using bcrypt
JWT expires in 24h
_id, password, and __v fields are removed when returned as objects

🛠 Script Reference
| Script                | Description               |
| --------------------- | ------------------------- |
| `npm run dev:server`  | Start backend in dev mode |
| `npm run populate-db` | Insert seed demo users    |

⚠️ Render Cold Start Warning

Render free tier may sleep after inactivity.

The first request may return:
Failed to fetch
Simply retry after a few seconds.

This backend satisfies:

✅ JWT authentication
✅ Profile fetch route
✅ Profile update route
✅ Password hashing
✅ Swagger documentation
✅ Production hosting

🧑‍💻 Author

Sun Ting
Full-Stack Web Developer – France 🇫🇷