require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 2000; // Use PORT from environment or default to 2000
const router = require('./Router/AuthRoutes');
app.use(cors());
app.use(express.json());
app.use(router);
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
  console.log(`Server is running on port ${port}`);
});
