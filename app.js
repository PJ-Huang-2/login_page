// 載入 express 並建構應用程式伺服器
const express = require("express");
const app = express();
const port = 3300;

const exphbs = require("express-handlebars");

const routes = require("./routes");

require("./config/mongoose");

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(routes);

// 設定 port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

/* // 設定首頁路由
app.get("/", (req, res) => {
  res.send("hello world");
}); */
