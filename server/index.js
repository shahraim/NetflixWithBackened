require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 6246;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  return res.status(200).json({ message: "Hello WOrld", status: 200 });
});

app.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(500).json({ message: "Email already registered" });
    } else {
      res.status(200).json({ message: "Sign Up Complete" });
    }
  } catch (err) {
    res.status(500).json({ message: "An error occurred" });
  }
});
// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("Users", userSchema);

// Connect to the MongoDB database
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", (error) => {
  console.log("Database connection error:", error);
});
database.once("open", () => {
  console.log("Database Connected");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
