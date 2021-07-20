import React, { useContext } from "react";
import "./css/Content.css";
import Rating from "./Rating";
import { DataContext } from "./DataContext";

function Content() {
  const [datas] = useContext(DataContext);
  return (
    <div className="content">
      {datas.map((info) => (
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
