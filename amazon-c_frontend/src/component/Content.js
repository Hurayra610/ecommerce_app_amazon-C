import React from "react";
import "./css/Content.css";
import data from "./data";
import Rating from "./Rating";

function Content() {
  return (
    <div className="content">
      {data.map((info) => (
        <div key={info.id} className="card">
          <a href={`/product/${info.id}`}>
            <img src={info.image} className="img" alt="product_img" />
          </a>
          <div className="card__body">
            <a href={`/product/${info.id}`}>
              <h2>{info.name}</h2>
            </a>
          </div>
          <Rating ratingPoint={info.rating} review={info.numReview} />
          <div className="price">${info.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Content;
