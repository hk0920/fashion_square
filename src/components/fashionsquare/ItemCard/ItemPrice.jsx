import React from "react";
import { PriceComponent } from "../../../styles/ItemcardStyle";

const ItemPrice = ({ itemPrice, sellPrice }) => {
  return (
    <PriceComponent>
      <span class="box__price-seller">
        <strong class="text__price-seller">{sellPrice}</strong>
        <span class="text__unit">원</span>
      </span>
    </PriceComponent>
  );
};

export default ItemPrice;
