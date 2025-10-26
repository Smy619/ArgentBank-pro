const jwt = require("jsonwebtoken")

module.exports.validateToken = (req, res, next) => {
  try {
    const header = req.headers.authorization
    if (!header) {
      return res.status(401).json({ message: "Missing authorization header" })
    }

    const token = header.split(" ")[1]
    if (!token) {
      return res.status(401).json({ message: "Token missing" })
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = decoded // attach user payload

    next()
  } catch (error) {
    console.error("Token validation error:", error.message)
    return res.status(403).json({ message: "Invalid token" })
  }
}

