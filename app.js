const express = require("express");
const menuRoutes = require("./routes/menuRoutes");

const app = express();

// Built-in middleware
app.use(express.json());

// Routes
app.use("/api/menu", menuRoutes);

// Global error fallback
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

module.exports = app;
