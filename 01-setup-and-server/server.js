require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");



const app = express();

// Middleware: lets Express read JSON bodies
app.use(express.json());

// First route
app.get("/", (req, res) => {
  res.json({ message: "Tasks API is running" });
});

// Connect to DB, then start the server

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
});
