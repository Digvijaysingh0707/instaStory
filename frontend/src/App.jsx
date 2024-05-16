import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import StoriesComponent from "./components/StoriesComponent";
import { createContext, useEffect, useState } from "react";
import { getStory } from "./components/hooks/useStory";

export const StoryWrapper = createContext()

function App() {
  const [allStories, setAllStories] = useState([])
  const [currentUserId, setCurrentUserId] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedStories = await getStory({ banner: true });
        setAllStories(fetchedStories);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <StoryWrapper.Provider value={{ allStories, currentUserId, setCurrentUserId }}>
      <Router>
        <Routes>
          <Route path="/story/:userId" element={<StoriesComponent />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </StoryWrapper.Provider>
  );
}

export default App;
