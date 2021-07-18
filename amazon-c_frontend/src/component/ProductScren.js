import React from "react";
import data from "./data";
import Rating from "./Rating";
import "./css/ProductScren.css";
// import Headers from "./Headers";

function ProductScren(props) {
  const idMatch = props.match.params.id;
  const product = data.find((response) => {
    return response.id == idMatch;
  });
  return (
    <div className="productScreen">
      {/* <Headers /> */}
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="infoCol">
        <ul>
          <li className="product_name">{product.name}</li>
          <li>
            <Rating ratingPoint={product.rating} />
          </li>
          <li className="product_price">Price: ${product.price}</li>
        </ul>
      </div>
      <div className="status">
        <ul>
          <li>Price: ${product.price}</li>
          <li>
            Status:{" "}
            <span>{product.quantity > 0 ? "Available" : "Unavailable"}</span>
          </li>
          <button className="btn_Cart">Add to Cart</button>
        </ul>
      </div>
    </div>
  );
}

export default ProductScren;
