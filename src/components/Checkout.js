import React from "react";
import { useStateValue } from "../stateprovider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {

  const [{cart,user},dispatch]= useStateValue()

  return (
    <div className="checkout">
      <div className="checkoutTitle">
        {/* <img className="checkoutAd" src={checkoutAd} /> */}
        <h2>SHOPPING CART</h2>
      </div>

      <div className="checkoutContainer">
        <div className="checkoutLeft">
          <div>
            <h2></h2>
             {/*map form usestatevalue*/}
              {cart.map(item=>(
                <CheckoutProduct
                id={item.id}
                title='lorem lsjfi his is just to test shit and see if this shit works'
                price={item.price}
                image={item.image}
                rating={item.rating}
                />
              ))}
            
           
            {/*item*/}
            {/*item*/}
            {/*item*/}
          </div>
        </div>

        <div className="checkoutRight">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}
export default Checkout;