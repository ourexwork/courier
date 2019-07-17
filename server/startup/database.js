// const mongoose = require("mongoose");
// const Fawn = require("fawn");

// module.exports = app => {
//   let DB_HOST = "";

//   if (app.get("env") === "development") {
//     DB_HOST = "mongodb://localhost:27017/courier_app";
//   } else {
//     app.set("env", "production");
//     DB_HOST = "mongodb://mongo:27017/courier_app";
//   }
//   // initialize fawn
//   Fawn.init(DB_HOST);
//   // connect to db
//   mongoose
//     .connect(DB_HOST, { useNewUrlParser: true })
//     .then(() => {
//       console.log("Database connected successfully ");
//     })
//     .catch(e => {
//       // if any error throw the error
//       throw new Error(e.message);
//     });
// };

const mongoose = require("mongoose");
const Fawn = require("fawn");
Fawn.init("mongodb://localhost/courier_app");
module.exports = () => {
  mongoose
    .connect("mongodb://localhost:27017/courier_app", { useNewUrlParser: true })
    .then(() => {
      console.log("Database connected successfully ");
    })
    .catch(e => {
      // if any error throw the error
      throw new Error(e.message);
    });
};
