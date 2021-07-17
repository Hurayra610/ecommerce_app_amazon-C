import React from "react";
import "./css/Content.css";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import data from "./data";

function Content() {
  return (
    <div className="content">
      {data.map((info) => (
        <div key={info.id} className="card">
          <a href="#">
            <img src={info.image} className="img" alt="product_img" />
          </a>
          <div className="card__body">
            <a href="#">
              <h2>{info.name}</h2>
            </a>
          </div>
          <div className="rating">
            <StarIcon style={{ fontSize: "20px" }} />
            <StarIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
            <StarIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
            <StarIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
            <StarIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
          </div>
          <div className="price">${info.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Content;
