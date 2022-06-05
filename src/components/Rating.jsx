import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, style, starSelect }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              starSelect(index);
            }}
            style={style}
          >
            {rating > index ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
