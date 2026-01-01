
const express = require("express");
const app = express();
const PORT = 3501;

app.use(express.json());

let messagefromFront = "";

app.get("/message", (req, res) => {
  res.json({
    message: `Привет с backend: ${messagefromFront}`,
  });
});

app.post("/message", (req, res) => {
  const userMessage = req.body.message;
  messagefromFront = userMessage;

  res.json({
    message: `Backend сохранил: ${userMessage}`,
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
