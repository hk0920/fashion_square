import React from "react";
import ItemImage from "./ItemImage";
import ItemInformation from "./ItemInformation";
import { ItemCardComponent } from "../../../styles/ItemcardStyle";
import { LmoTag } from "./BenefitTag";
import { ReviewType } from "./ItemScore";

export interface ItemType {
  itemNo:string;
  itemName:string;
  itemUrl:string;
  imageUrl:string;
  sdBrandName:string;
  itemPrice:number;
  sellPrice:number;
  lmos: LmoTag[];
  buyCount:number;
  reviewPoint: ReviewType;
  groupItemCnt:number;
  groupNo:number;
  deliveryText:string;
  scode:string;
  mcode:string;
  lcode:string;
  isFashionSquareSeller:boolean;
  isLmoOfficialSeller:boolean;
  isAdult:boolean;
  isBigSmileItem:boolean;
  isCartVisible:boolean;
}

const ItemCard = ({ data }:{data: ItemType}) => {
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
