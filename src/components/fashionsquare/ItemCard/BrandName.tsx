import React from "react";
import { BrandTitle } from "../../../styles/ItemcardStyle";

interface NameProps {
  isFashionSquareSeller: boolean;
  sdBrandName: string;
}

const BrandName = ({ isFashionSquareSeller, sdBrandName } : NameProps) => {
  return (
    <BrandTitle>
      {isFashionSquareSeller && (
        <span className="box__itemcard-fashion-tag">
          <img
            className="image"
            src="//script.gmarket.co.kr/build/mobile/image/single/fashionsquare/component/itemcard/logo_fashionsquare_3x.png"
            alt="패션스퀘어 상품"
          />
        </span>
      )}
      <span className="text">{sdBrandName}</span>
    </BrandTitle>
  );
};

export default BrandName;
