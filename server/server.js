const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

app.use(express());
app.use(cors());

app.get("/", (req, res) => {
  console.log("your are doing well!");
  res.send("you will be planting!");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

app.post("/upload", upload, (req, res) => {
  console.log(req.file.filename);
});

app.listen("3005", () => {
  console.log("you are connected!!");
});
