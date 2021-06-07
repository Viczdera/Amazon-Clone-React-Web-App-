 import React from "react";
import "./Subtotal.css";
//for currency formatting --npm i react-currency-format
import CurrencyFormat from "react-currency-format"
//data and state
import { useStateValue } from "../stateprovider";
import { getCartTotal } from "../reducer";

function Subtotal(props) {
  const [{cart},dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({cart.length} items): <strong>{value}</strong>
              <small className="subtotalGift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
