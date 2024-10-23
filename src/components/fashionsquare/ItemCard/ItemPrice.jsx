import React from "react";
import { PriceComponent } from "../../../styles/ItemcardStyle";

const ItemPrice = ({ itemPrice, sellPrice }) => {
  return (
    <PriceComponent>
      <span className="box__price-seller">
        <strong className="text__price-seller">{sellPrice}</strong>
        <span className="text__unit">원</span>
      </span>
    </PriceComponent>
  );
};

export default ItemPrice;
