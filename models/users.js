const mongoose = require("mongoose");
const { token } = require("morgan");

const Users = mongoose.model("Users", usersSchema);
const usersSchema = mongoose.Schema({
  name: {
    type: String,
    maxleangth: 50,
  },
  email: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    maxleangth: 50,
  },
  //관리자 확인
  role: {
    type: Number, //1이면 관리자 0이면 일반유저
    default: 0,
  },
  image: String,
  //유효성을 관리
  token: {
    type: String,
  },
  //토큰유효기간
  tokenExp: {
    type: Number,
  },
});

module.exports = { Users };
