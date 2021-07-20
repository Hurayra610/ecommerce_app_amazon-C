import React, { useEffect, useState } from "react";
import "./css/Content.css";
// import data from "./data";
import Rating from "./Rating";
import axios from "axios";

function Content() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/product");
      setData(data);
    };
    fetchData();
  }, []);

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
