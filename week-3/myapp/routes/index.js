const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

router.get("/getData", (req, res) => {
  const data = req.query.number;
  let result = "";
  if (!data) {
    result = "Lack of Parameter";
  } else if (isNaN(data)) {
    result = "Wrong Parameter";
  } else {
    let sum = 0;
    for (let i = 1; i <= data; i++) {
      sum += i;
    }
    result = sum;
  }
  res.send(result.toString());
});

router.get("/myName", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.send(name);
  } else {
    res.redirect("/trackname");
  }
});

router.get("/trackname", (req, res) => {
  const name = req.query.name;
  if (name) {
    res.cookie("username", name);
    res.redirect(`/myName`);
  } else {
    res.render("trackname");
  }
});

module.exports = router;
