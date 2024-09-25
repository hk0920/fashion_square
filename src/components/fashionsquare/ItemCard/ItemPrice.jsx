import React from "react";

const ItemPrice = ({ itemPrice, sellPrice }) => {
  return (
    <span class="box__itemcard-price-area">
      <span class="box__price-seller">
        <strong class="text__price-seller">{sellPrice}</strong>
        <span class="text__unit">원</span>
      </span>
    </span>
  );
};

export default ItemPrice;
