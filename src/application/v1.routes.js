const express = require("express");
const app = express.Router();

const cookieSessionCtrl = require("./controller/cookie-session");
const postMahasiswaCtrl = require("./controller/postMahasiswa");
const postMatkulCtrl = require("./controller/postMatkul");
const auth = require("./middleware/auth");

const bagiMiddleware = (req, res, next) => {
  if (req.query.angka2 == 0) {
    res.send({ message: "tidak bisa dibagi dengan 0" });
  } else {
    next();
  }
};

app.get("/", function (req, res) {
  res.send({ message: "hello dari route v1" });
});

app.get("/set-cookie", cookieSessionCtrl.setCookie);
app.get("/get-cookie", cookieSessionCtrl.getCookie);
app.get("/set-session", cookieSessionCtrl.setSession);
app.get("/get-session", cookieSessionCtrl.getSession);

// ================= post routes =================
app.get("/gets-mahasiswa", postMahasiswaCtrl.getPosts);
app.post("/posts-mahasiswa", postMahasiswaCtrl.addPosts);
app.get("/getsone-mahasiswa/:id", postMahasiswaCtrl.getOnePost);
app.put("/edit-mahasiswa/:id", postMahasiswaCtrl.updateOne);
app.delete("/delete-mahasiswa/:id", postMahasiswaCtrl.deleteOne);
// ================= post routes =================
app.get("/gets-matkul", postMatkulCtrl.getPosts);
app.post("/posts-matkul", postMatkulCtrl.addPosts);
app.get("/getsone-matkul/:id", postMatkulCtrl.getOnePost);
app.put("/edit-matkul/:id", postMatkulCtrl.updateOne);
app.delete("/delete-matkul/:id", postMatkulCtrl.deleteOne);

// header
app.get("/get-headers", (req, res) => {
  const headers = req.headers;
  res.send({ headers });
});
app.get("/set-headers", (req, res) => {
  res.header("x-backend", "productzilla-b5");
  res.send({ message: "header sent" });
});

module.exports = app;
