import React, { useState, useEffect } from "react";
import "./StarRating.css";

const StarRating = ({ storageKey, defaultRating = 0 }) => {
  const [rating, setRating] = useState(defaultRating);
  const [hoveredStar, setHoveredStar] = useState(null);

  // Load the rating from local storage when the component mounts
  useEffect(() => {
    const storedRating = localStorage.getItem(storageKey);
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, [storageKey]);

  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const handleStarClick = (index) => {
    setRating(index);
    localStorage.setItem(storageKey, index); // Save rating to local storage
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (hoveredStar || rating) ? "filled" : ""}`}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleStarClick(star)} // Handle star click
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
