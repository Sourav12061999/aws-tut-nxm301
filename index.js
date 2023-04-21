const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.status(200).json({
    msg: "All Ok-1",
  });
});

app.listen(3001, () => {
  console.log("Server Started");
});
