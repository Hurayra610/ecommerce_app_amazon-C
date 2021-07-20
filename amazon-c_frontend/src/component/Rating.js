import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

function Rating({ ratingPoint, review }) {
  return (
    <div className="rating">
      {ratingPoint === 1 || ratingPoint > 1 ? (
        <StarIcon style={{ fontSize: "20px" }} />
      ) : (
        <StarBorderIcon style={{ fontSize: "20px" }} />
      )}
      {ratingPoint === 2 || ratingPoint > 2 ? (
        <StarIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
      ) : (
        <StarBorderIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
      )}
      {ratingPoint === 3 || ratingPoint > 3 ? (
        <StarIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
      ) : (
        <StarBorderIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
      )}
      {ratingPoint === 4 || ratingPoint > 4 ? (
        <StarIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
      ) : (
        <StarBorderIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
      )}
      {ratingPoint === 5 ? (
        <StarIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
      ) : (
        <StarBorderIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
      )}
      <div className="review">{review} reviews</div>
    </div>
  );
}

export default Rating;
