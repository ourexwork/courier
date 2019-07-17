const express = require("express");
const app = express();
const PORT = 80 || process.env.PORT;

require("./startup/database")(app);
require("./startup/routes")(app);

const path = require("path");

//for dev
// const publicPath = path.join(__dirname, "..", "client", "build");

//for docker server
const publicPath = path.join(__dirname, "client", "build");
console.log(publicPath);

console.log(publicPath);
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

console.log(app.get("env"));
console.log(process.env.coPrivateKey);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
