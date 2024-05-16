const InstaStory = require("../models/instaStoryModel");

const getInstaStory = async (params) => {
  try {
    let query = {};
    let find = {};
    if (params?.userId) {
      query._id = params?.userId;
    }

    if (params?.banner) {
      find = { _id: 1, user: 1, profilePic: 1 };
    }
    const res = await InstaStory.find(query, find);
    return res;
  } catch (err) {
    console.error(err, "Error");
  }
};

module.exports = {
  getInstaStory,
};
