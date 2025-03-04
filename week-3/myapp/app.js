const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.set("view engine", "pug"); //設定模板template

const mainRoutes = require("./routes"); //./routes.index.pug
app.use(mainRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  if (err.status) {
    res.status(err.status);
  }
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
