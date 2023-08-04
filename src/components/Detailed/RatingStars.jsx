import React from "react";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="25px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="25px"
        xmlSpace="preserve"
        key={i}
        className=" fill-yellow-400"
        >
        <path d="M480,207H308.6L256,47.9L203.4,207H32l140.2,97.9L117.6,464L256,365.4L394.4,464l-54.7-159.1L480,207z" />
      </svg>,
    );
  }
  return <p className="flex items-center font-medium my-1">Rating - {stars}</p>;
};

export default RatingStars;
