import React, { useContext } from "react";
import Rating from "./Rating";
import "./css/ProductScren.css";
import { Link } from "react-router-dom";
import Headers from "./Headers";
import { DataContext } from "./DataContext";

function ProductScren(props) {
  const [datas] = useContext(DataContext);
  const idMatch = props.match.params.id;
  const product = datas.filter((response) => {
    return response.id === parseInt(idMatch);
  });
  return (
    <div>
      {product.map((product) => (
        <div key={product.id}>
          <Headers />
          <div className="productScreen">
            {/* <Link to="/">
              <button className="backBtn">Back</button>
            </Link> */}
            <div className="imgProduct">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="infoCol">
              <ul>
                <li className="product_name">{product.name}</li>
                <li>
                  <Rating
                    ratingPoint={product.rating}
                    review={product.numReview}
                  />
                </li>
                <li className="product_price">Price: ${product.price}</li>
                <li className="productSmallImage">
                  image: <img src={product.image} alt="small product" />
                </li>
              </ul>
            </div>
            <div className="status">
              <ul>
                <li>Seller</li>
                <li>{product.name}</li>
                {
                  <Rating
                    ratingPoint={product.rating}
                    review={product.numReview}
                  />
                }
                <li>Price: ${product.price}</li>
                <li>
                  Status:
                  <span
                    style={{
                      color: `${product.quantity > 0 ? "green" : "red"}`,
                    }}
                  >
                    {product.quantity > 0 ? " In Stock" : " Out Stock"}
                  </span>
                </li>
                <li>
                  <label htmlFor="qty">Quantity: </label>
                  <select className="option" name="qty">
                    <option value={product.quantity}>1</option>
                    <option value={product.quantity}>2</option>
                    <option value={product.quantity}>3</option>
                    <option value={product.quantity}>4</option>
                    <option value={product.quantity}>5</option>
                  </select>
                </li>
                <button className="btn_Cart">Add to Cart</button>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductScren;
