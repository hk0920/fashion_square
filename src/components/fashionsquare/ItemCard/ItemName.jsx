import React from "react";

const ItemName = ({ itemNo, itemName }) => {
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
