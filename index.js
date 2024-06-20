const express = require('express');
const cors = require('cors');
const connectDB = require('./database/setup'); // Import the MongoDB connection
const transactionRoutes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', transactionRoutes); // Prefix all transaction routes with /api

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
