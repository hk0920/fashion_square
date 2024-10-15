import React from "react";
import ItemCard from ".";
import { ItemCardWrap } from "../../../styles/ItemcardStyle";

const ItemCardContainer = ({ data }) => {
  return (
    <ItemCardWrap>
      {data.items.map((item, idx) => {
        return <ItemCard data={item} key={idx} />;
      })}
    </ItemCardWrap>
  );
};

export default ItemCardContainer;
