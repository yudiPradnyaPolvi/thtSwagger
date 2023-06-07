const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nama: String,
  nim: Number,
  kelas: String,
  jenis_kelamin: String,
});

module.exports = mongoose.model("posts", schema);
