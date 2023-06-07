const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Ujicoba", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// async function connect() {
//   await mongoose.connect(
//     `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
//   );

//   const db = mongoose.connection;

//   db.on("error", console.error.bind(console, "MongoDB connection error:"));
//   db.once("open", function () {
//     console.log("connected to mongodb");
//   });
// }

// module.exports = { connect };
const db = mongoose.connection;
