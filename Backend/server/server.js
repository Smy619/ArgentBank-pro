require('dotenv').config()

const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagger.yaml')
const dbConnection = require('./database/connection')
const { validateToken } = require('./middleware/tokenValidation')

const app = express()
const PORT = process.env.PORT || 3001

// DB connect
dbConnection()

// CORS whitelist
const allowedOrigins = [
  "https://argent-bank-pro.vercel.app",
  "https://argent-bank-e7fdgcg4m-solennes-projects-8d96e84f.vercel.app",
  "http://localhost:3000"
]

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"), false);
  },
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}))

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static PWA related files
app.use(express.static("public"))

// Routes without auth
app.use('/api/v1/user', require('./routes/userRoutes'))

// Protected routes
app.use('/api/v1/accounts', validateToken, require('./routes/accountRoutes'))
app.use('/api/v1/transactions', validateToken, require('./routes/transactionRoutes'))

// Seed route
app.get("/seed", async (req, res) => {
  try {
    await require("./scripts/populateDatabase")()
    res.send("Database seeded successfully!")
  } catch (err) {
    console.error(err)
    res.status(500).send("Error seeding database")
  }
})

// Swagger DEV only
if (process.env.ENABLE_SWAGGER === 'true') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

app.get('/', (req, res) => {
  res.send('Hello from ArgentBank Backend!')
})

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})

