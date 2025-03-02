const express = require("express");
const pool = require("./db");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("✅ Server is working!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
