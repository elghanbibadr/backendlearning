require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware: lets Express read JSON bodies
app.use(express.json());

// First route
app.get("/", (req, res) => {
  res.json({ message: "Tasks API is running" });
});

// Connect to DB, then start the server
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });