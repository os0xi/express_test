const express = require("express");

const home = require("./routes/home");

const app = express();
app.use(express.json());

app.use("/", home);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("running on port:", port);
});
