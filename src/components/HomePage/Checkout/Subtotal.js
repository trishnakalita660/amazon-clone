import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { lightBlue } from "@material-ui/core/colors";
const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
          
           <p style={{fontSize:'13px'}}> <img/>Add {value} of eligible items to your order to qualify for FREE Delivery. <a style={{color:'Blue' , cursor:'pointer'}}>Details</a></p>
            <h3>
              {/* Part of the homework */}
              Subtotal (0 items): <strong>0</strong>
            </h3>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button > Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
