import React from "react";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>⭐</span>);
  }
  return <p className="">Rating: {stars}</p>;
};

export default RatingStars;