const InstaStory = require("../models/instaStoryModel");

const getInstaStory = async (query) => {
  try {
    const res = await InstaStory.find({});
    return res;
  } catch (err) {
    console.error(err, "Error");
  }
};

module.exports = {
  getInstaStory,
};
