import React, { useEffect, useState } from "react";
import "./Heart.css";

const Heart = ({ id, media_type, poster,
  title,
  date,
  vote_average}) => {
  const [liked, setLiked] = useState(false);

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
    
    // Update the list of liked movies in local storage
    const likedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
    
    if (newLikedState) {
      likedMovies.push({ id, media_type, poster,
        title,
        date,
        vote_average });
    } else {
      const index = likedMovies.findIndex(movie => movie.id === id);
      if (index !== -1) likedMovies.splice(index, 1);
    }
    
    localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
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
