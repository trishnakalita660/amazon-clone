import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__items">
        <div>
          <h4>
            Pay faster for all your shopping needs with Amazon Pay balance{" "}
          </h4>
          <p style={{ marginBottom: "4px" }}>
            Get instant refund | zero cancellation{" "}
          </p>
        </div>

        <div className="checkout__title">
          <h1>Shopping items</h1>
          <a
            style={({ color: "blue" , cursor: "pointer" })}
          >
            Deselect all items
          </a>

          {/*basketItem */}
        </div>
      </div>

      <div className="checkout__cost">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        />
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
