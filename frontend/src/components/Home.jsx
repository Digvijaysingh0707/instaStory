import React, { useContext, useEffect, useState } from "react";
import CreditsComponent from "./CreditsComponent";
import { useNavigate } from "react-router-dom";
import { getStory } from "./hooks/useStory";
import { StoryWrapper } from "../App";

export default function Home() {
  const { allStories } = useContext(StoryWrapper)
  const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);
  const navigate = useNavigate();


  function redirectToStory(userId) {
    navigate(`/story/${userId}`);
  }

  function renderCategoryItem() {
    return allStories.map((categoryItem) => (
      <div
        key={categoryItem._id}
        className="flex-shrink-0 flex flex-col items-center justify-center mr-4 cursor-pointer"
        onClick={() => redirectToStory(categoryItem?._id)}
      >
        <div className="category-outer-circle bg-red rounded-full w-5 h-5 flex justify-center items-center overflow-hidden">
          <div className="category-inner-circle bg-white rounded-full flex justify-center items-center">
            <img className="rounded-[50%]" src={categoryItem?.profilePic}></img>
          </div>
        </div>
        <div className="font-bold mt-2">{categoryItem.user}</div>
      </div>
    ));
  }

  return (
    <div>
      <div className="header text-white bg-gradient-to-r from-#ff8800 to-#ff3300 flex justify-between items-center text-3xl font-bold py-4 mb-4">
        <div
          className="cursor-pointer"
          onClick={() => setCreditsPopUpOpen(true)}
        >
        </div>
      </div>
      <div className="flex overflow-x-auto pb-4 m-2">
        <div className="flex items-center space-x-4">
          {renderCategoryItem()}
        </div>
      </div>

      {isCreditsPopUpOpen && <CreditsComponent setCreditsPopUpOpen={setCreditsPopUpOpen} />}
    </div>
  );
}
