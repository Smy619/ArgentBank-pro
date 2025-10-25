const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "test1234",
    userName: "IronMan",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "test1234",
    userName: "CaptainAmerica",
  },
];

async function seed() {
  try {
    console.log("Connecting...");
    await mongoose.connect(process.env.MONGODB_URI);

    for (let u of users) {
      const exists = await User.findOne({ email: u.email });

      if (!exists) {
        const hashedPwd = await bcrypt.hash(u.password, 10);
        await User.create({ ...u, password: hashedPwd });
        console.log(`✅ Added ${u.email}`);
      } else {
        console.log(`⚠️ Already exists: ${u.email}`);
      }
    }

    console.log("✅ Done!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
