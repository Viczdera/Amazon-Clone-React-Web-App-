import React from "react";
import "./Products.css";
import { Star } from "@material-ui/icons";
import { useStateValue } from "../stateprovider";
function Products({ id, title, price, image, rating }) {
  const [{cart}, dispatch] = useStateValue();

  {/*console.log("a cart", cart);*/}

  const addToCart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Products;