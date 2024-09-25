import React from "react";
import ItemImage from "./ItemImage";
import ItemInformation from "./ItemInformation";
import { ItemCardComponent } from "../../../styles/LayoutStyle";

const ItemCard = ({ data }) => {
  const {
    itemNo,
    itemName,
    itemUrl,
    imageUrl,
    sdBrandName,
    itemPrice,
    sellPrice,
    lmos,
    buyCount,
    reviewPoint,
    groupItemCnt,
    groupNo,
    deliveryText,
    scode,
    mcode,
    lcode,
    isFashionSquareSeller,
    isLmoOfficialSeller,
    isAdult,
    isBigSmileItem,
    isCartVisible,
  } = data || {};

  const thumbnailData = {
    imageUrl,
    isAdult,
    isBigSmileItem,
  };
  return (
    <ItemCardComponent href={itemUrl} className="link">
      <ItemImage data={thumbnailData} />
      <ItemInformation data={data} />
    </ItemCardComponent>
  );
};

export default ItemCard;
