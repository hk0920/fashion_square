import React from "react";

interface NameType{
  itemNo:string;
  itemName:string;
}

const ItemName = ({ itemNo, itemName }: NameType) => {
  return (
    <span
      className="text__title"
      id={`itemCard_title_${itemNo}`}
      title={itemName}
    >
      {itemName}
    </span>
  );
};

export default ItemName;
