
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3500;

app.use(express.json());


app.get("/api/message", async (req, res) => {
  const response = await fetch("http://localhost:3501/message");
  const data = await response.json();
  res.json(data);
});

app.post("/api/message", async (req, res) => {
  const response = await fetch("http://localhost:3501/message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`BFF running on http://localhost:${PORT}`);
});
