import React from "react";

const ItemName = ({ itemNo, itemName }) => {
  return (
    <span class="text__title" id={`itemCard_title_${itemNo}`} title={itemName}>
      {itemName}
    </span>
  );
};

export default ItemName;
