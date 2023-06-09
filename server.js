const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello from NODE WITH CI/CD!"));
app.get("/health-check", (req, res) => res.send("Server is healthy!"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
