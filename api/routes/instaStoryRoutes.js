const express = require("express");
const router = express.Router();
const instaStoryController = require("../controller/instaStoryController");

router.get("/get", async (req, res) => {
  try {
    const result = await instaStoryController.getInstaStory();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
