require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const instaStoryRoutes = require("./routes/instaStoryRoutes");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/insta", instaStoryRoutes);
