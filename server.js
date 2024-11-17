require("dotenv").config(); // Load environment variables
const express = require("express");
const fetch = require("node-fetch"); // For making API requests
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Proxy endpoint
app.get("/api/data", async (req, res) => {
  try {
    const response = await fetch(`https://api.example.com/data?apikey=${process.env.API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch data from API");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
