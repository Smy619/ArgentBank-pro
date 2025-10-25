require('dotenv').config()

const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagger.yaml')
const dbConnection = require('./database/connection')

const app = express()
const PORT = process.env.PORT || 3001

// DB connect
dbConnection()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/v1/user', require('./routes/userRoutes'))
app.use('/api/v1/accounts', require('./routes/accountRoutes'))
app.use('/api/v1/transactions', require('./routes/transactionRoutes'))

// Swagger DEV only
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

app.get('/', (req, res) => {
  res.send(' Hello from ArgentBank Backend!')
})

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})

