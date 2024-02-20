const express = require("express");
const router = require("./routes/to-dos");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}..`);
});
