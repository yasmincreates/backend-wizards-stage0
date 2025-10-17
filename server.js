// Backend Wizards Stage 0 - Profile Endpoint
// Author: Yasmin Abdulrahman

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Main endpoint - GET /me
app.get("/me", async (req, res) => {
  try {
    console.log("Request received at /me endpoint");

    // Fetch cat fact from external API
    const catFactResponse = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, // 5 second timeout
    });

    // Get current UTC timestamp in ISO 8601 format
    const timestamp = new Date().toISOString();

    // Build response object
    const response = {
      status: "success",
      user: {
        email: "yasminabdulrahman04@gmail.com",
        name: "Yasmin Abdulrahman",
        stack: "Node.js/Express",
      },
      timestamp: timestamp,
      fact: catFactResponse.data.fact,
    };

    // Set content type and send response
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error.message);

    // Handle error gracefully
    const timestamp = new Date().toISOString();

    res.status(200).json({
      status: "success",
      user: {
        email: "yasminabdulrahman04@gmail.com",
        name: "Yasmin Abdulrahman",
        stack: "Node.js/Express",
      },
      timestamp: timestamp,
      fact: "Unable to fetch cat fact at this moment. Did you know cats sleep 70% of their lives?",
    });
  }
});

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Backend Wizards API is running!",
    endpoints: {
      profile: "/me",
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test it at: http://localhost:${PORT}/me`);
});
