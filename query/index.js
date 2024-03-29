const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors);

app.get("/posts", (req, res) => {});

app.post("/events", (req, res) => {
  const event = req.body;

  res.send({ status: "OK" });
});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
