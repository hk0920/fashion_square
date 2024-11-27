import React from "react";
import ItemCard, { ItemType } from ".";
import { ItemCardWrap } from "../../../styles/ItemcardStyle";

interface ItemListProps{
  data:{
    items:ItemType[]
  }
}

const ItemCardContainer = ({ data } : ItemListProps) => {
  return (
    <ItemCardWrap>
      {data.items.map((item, idx) => {
        return <ItemCard data={item} key={idx} />;
      })}
    </ItemCardWrap>
  );
};

export default ItemCardContainer;
