const bcrypt = require("bcrypt");
const User = require("../database/models/userModel");

module.exports = async () => {
  try {
    await User.deleteMany({}); 

    const users = [
      {
        firstName: "Tony",
        lastName: "Stark",
        email: "tony@stark.com",
        password: await bcrypt.hash("test1234", 12),
        userName: "IronMan",
      },
      {
        firstName: "Steve",
        lastName: "Rogers",
        email: "steve@rogers.com",
        password: await bcrypt.hash("test1234", 12),
        userName: "Captain",
      },
    ];

    await User.insertMany(users);

    console.log("Seed inserted!");
  } catch (err) {
    console.error("Database seed error:", err);
    throw err;
  }
};
