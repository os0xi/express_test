const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  let transactions = [{ name: "john Snow" }];
  let jsonTransactions = JSON.stringify(transactions);
  fs.writeFile(`myFile.json`, jsonTransactions, "utf8", function (err) {
    if (err) {
      console.log("error");
      return console.log(err);
    }
    console.log("JSON Saved");
    const json = require("../myFile.json");
    res.send(json);
  });
});
module.exports = router;
