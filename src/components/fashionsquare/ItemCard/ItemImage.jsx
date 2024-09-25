import React from "react";
import { ItemThumbnail } from "../../../styles/LayoutStyle";

const ItemImage = ({ data }) => {
  const { imageUrl, isAdult, isBigSmileItem } = data || {};
  return (
    <ItemThumbnail className="box__thumbnail">
      <img src={imageUrl} alt="" className="image" />
      {isAdult && (
        <span className="box__adult">
          <img
            src={
              "https://pics.auction.co.kr/pc/single/common/tag__adult-transparent.png"
            }
            alt="성인 상품"
          />
        </span>
      )}
      {isBigSmileItem && (
        <span className="box__bigs-label">
          <img
            src="https://pics.gmarket.co.kr/mobile/single/kr/promotion/bigs/tag/tag.png"
            alt="빅스마일데이 상품"
          />
        </span>
      )}
    </ItemThumbnail>
  );
};

export default ItemImage;
