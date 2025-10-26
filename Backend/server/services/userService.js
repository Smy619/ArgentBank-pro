const User = require('../database/models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.createUser = async serviceData => {
  try {
    const user = await User.findOne({ email: serviceData.email })
    if (user) throw new Error('Email already exists')

    const hashedPassword = await bcrypt.hash(serviceData.password, 10)

    const newUser = new User({
      email: serviceData.email,
      password: hashedPassword,
      firstName: serviceData.firstName,
      lastName: serviceData.lastName,
      userName: serviceData.userName
    })

    return await newUser.save()
  } catch (error) {
    throw error
  }
}

module.exports.loginUser = async serviceData => {
  try {
    const user = await User.findOne({ email: serviceData.email })
    if (!user) throw new Error('User not found')

    const isValid = await bcrypt.compare(serviceData.password, user.password)
    if (!isValid) throw new Error('Password invalid')

    const token = jwt.sign(
      { id: user._id },
      process.env.TOKEN_SECRET,
      { expiresIn: '1d' }
    )

    return { token }
  } catch (error) {
    throw error
  }
}

module.exports.getUserProfile = async req => {
  try {
    const user = await User.findById(req.user.id)
    if (!user) throw new Error('User not found')

    return user.toObject()
  } catch (error) {
    throw error
  }
}

module.exports.updateUserProfile = async req => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { userName: req.body.userName },
      { new: true }
    )

    if (!user) throw new Error('User not found')

    return user.toObject()
  } catch (error) {
    throw error
  }
}
