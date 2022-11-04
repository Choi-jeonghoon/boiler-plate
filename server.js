require("dotenv").config();
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jeonghoon:Jh82880779$@boiler-plate.e0j5h6s.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongDB Connected..."))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

//연결 test 주소
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const server = http.createServer(app);
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server start : http://localhost:${PORT}/`);
});
