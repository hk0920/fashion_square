import React from "react";
import ItemPrice from "./ItemPrice";
import BrandName from "./BrandName";
import ItemName from "./ItemName";
import DeliveryInfo from "./DeliveryInfo";
import ItemScore from "./ItemScore";
import BenefitTag from "./BenefitTag";
import { ItemCardInfo } from "../../../styles/ItemcardStyle";
import { ItemType } from ".";

const ItemInformation = ({ data }:{data:ItemType}) => {
  const {
    itemNo,
    itemName,
    itemUrl,
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
    isCartVisible,
  } = data || {};

  return (
    <div className="box__itemcard-info">
      <ItemCardInfo href={itemUrl}>
        <span className="box__itemcard-title-area">
          <BrandName
            isFashionSquareSeller={isFashionSquareSeller}
            sdBrandName={sdBrandName}
          />
          <ItemName itemNo={itemNo} itemName={itemName} />
        </span>
        <ItemPrice itemPrice={itemPrice} sellPrice={sellPrice} />
        {deliveryText && <DeliveryInfo deliveryText={deliveryText} />}

        <ItemScore reviewPoint={reviewPoint} buyCount={buyCount} />
        <BenefitTag lmos={lmos} />
      </ItemCardInfo>
      <button
        type="button"
        className="button__favorite-item"
        aria-describedby="itemCard_title_3285788852"
        aria-pressed="false"
      >
        <span className="for-a11y">관심상품 등록하기</span>
      </button>
    </div>
  );
};

export default ItemInformation;
