const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db"); // Import the database connection function
const authRoutes = require("./routes/authRoutes.js");
const healthRoutes = require("./routes/healthRoutes.js");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB(); // Cleaner database connection management

// Define API routes
app.use("/auth", authRoutes);
app.use("/health", healthRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App Started on PORT: ${PORT}`);
});
