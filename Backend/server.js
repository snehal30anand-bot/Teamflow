const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task");

const app = express();

// IMPORTANT
app.use(cors());

app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);

// HOME ROUTE
app.get("/", (req, res) => {

  res.send("Backend Running ✅");

});

// DATABASE + SERVER
sequelize.sync().then(() => {

  console.log("SQLite DB Connected ✅");

  app.listen(5001, () => {

    console.log("Server running on port 5001 🚀");

  });

});