import React, { useEffect, useState } from "react";
import "./Heart.css";

const Heart = ({ id }) => {
  const [liked, setLiked] = useState(false);
  console.log(id);

  useEffect(() => {
    // Check local storage for the liked state using the itemId
    const savedLikedState = localStorage.getItem(`likedHeart_${id}`);
    if (savedLikedState === "true") {
      setLiked(true);
    }
  }, [id]);

  const toggleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    // Save the new state to local storage using the itemId
    localStorage.setItem(`likedHeart_${id}`, newLikedState);
  };

  return (
    <div className="heart-icon" onClick={toggleLike}>
      {liked ? (
        <i className="fas fa-heart filled-heart"></i> // Filled heart
      ) : (
        <i className="far fa-heart unfilled-heart"></i> // Unfilled heart
      )}
    </div>
  );
};

export default Heart;
