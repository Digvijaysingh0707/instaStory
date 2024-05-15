const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  url: String,
  duration: Number,
  header: {
    heading: String,
    subheading: String,
    profileImage: String,
  },
  storyContent: {
    width: String,
    maxWidth: String,
    maxHeight: String,
    margin: String,
  },
});

// Define a schema for the user and associate it with the StorySchema
const UserSchema = new mongoose.Schema({
  user: String,
  stories: [StorySchema],
});

const instaStory = mongoose.model("userstories", UserSchema);
module.exports = instaStory;
