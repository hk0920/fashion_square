import React from "react";

const BrandName = ({ isFashionSquareSeller, sdBrandName }) => {
  return (
    <span class="text__brand">
      {isFashionSquareSeller && (
        <span class="box__itemcard-fashion-tag">
          <img
            class="image"
            src="//script.gmarket.co.kr/build/mobile/image/single/fashionsquare/component/itemcard/logo_fashionsquare_3x.png"
            alt="패션스퀘어 상품"
          />
        </span>
      )}
      <span class="text">{sdBrandName}</span>
    </span>
  );
};

export default BrandName;
