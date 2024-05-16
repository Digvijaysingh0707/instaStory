import React, { useState, useEffect, useContext } from "react";
import Stories from "react-insta-stories";
import Fade from "react-reveal/Fade";
import { useNavigate, useParams } from "react-router-dom";
import { getStory } from "./hooks/useStory";
import { StoryWrapper } from "../App";

export default function StoriesSection() {
  const { allStories } = useContext(StoryWrapper)
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  let { userId } = useParams();
  const navigate = useNavigate();



  const redirectToNextStory = () => {
    const index = allStories.findIndex(obj => obj._id === userId);
    if (index + 1 < allStories?.length) {
      navigate("/story/" + allStories[index + 1]?._id)
    }
    console.log(index, "INDEX")

  }


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedStories = await getStory({ userId });
        setStories(fetchedStories?.[0]?.stories);
      } catch (error) {
        console.error("Error fetching stories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function renderLoading() {
    return (
      <div className="flex justify-center items-center">
        <svg className="loader animate-spin">Loading...</svg>
      </div>
    );
  }
  return !loading ? (
    <div className="stories-container w-screen h-screen">
      <Fade right>
        <Stories
          stories={stories}
          keyboardNavigation
          defaultInterval={5000}
          width={"100%"}
          height="100vh"
          onAllStoriesEnd={() => redirectToNextStory()}
        />
      </Fade>
    </div>
  ) : (
    renderLoading()
  );
}
