const express = require("express");
const taskRoutes = require("./routes/task.routes");
const UserRoutes = require("./routes/user.routes");


const app = express();
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api/register", UserRoutes);


module.exports = app;