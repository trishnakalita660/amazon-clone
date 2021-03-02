import React from "react";
import "./Product.css";

function product({title,image,price,rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p> {title}</p>

        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <div className="product__rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
<img src={image} alt="blabla"/>

      <button> Add to basket</button>
    </div>
  );
}

export default product;
