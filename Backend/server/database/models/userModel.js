const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    userName: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
        return ret
      }
    }
  }
)

// Automatically hash password on create/save
userSchema.pre('save', async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// Method to validate password
userSchema.methods.comparePassword = async function (plainPwd) {
  return bcrypt.compare(plainPwd, this.password)
}

module.exports = mongoose.model('User', userSchema)

