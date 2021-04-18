import React from "react";
import "./Products.css";
import { Star } from "@material-ui/icons";
function Products({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p>
          <strong> {price}</strong>
        </p>

        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Star className="starRating" />
            ))}
        </div>
      </div>
      <img src={image} />
      <button>Add to Cart</button>
    </div>
  );
}

export default Products;
