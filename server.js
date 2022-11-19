require('dotenv').config();
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { Users } = require('./models/users');

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://jeonghoon:Jh82880779$@boiler-plate.e0j5h6s.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongDB Connected...'))
  .catch(err => console.log(err));

const app = express();
app.use(express.json());
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());

//연결 test 주소
// app.get('/ping', (req, res) => {
//   res.json({ message: 'pong' });
// });

app.post('/register', (req, res) => {
  //회원가입 할때 필요한 정보들을 client에서 가져오면 그것들을 DB에 넣어준다.

  const users = new Users(req.body);

  users.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

const server = http.createServer(app);
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server start : http://localhost:${PORT}/`);
});
