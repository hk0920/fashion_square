import React from "react";
import { ScoreElement } from "../../../styles/ItemcardStyle";

export interface ReviewType{
  starPoint: number;
  reviewCount: number;
}
interface ScoreType{
  reviewPoint: ReviewType;
  buyCount: number;
}

const ItemScore = ({ reviewPoint, buyCount }: ScoreType) => {
  const { starPoint, reviewCount } = reviewPoint || {};
  return (
    <ScoreElement>
      <span className="box__score-awards">
        <span className="for-a11y">평점</span>
        <span className="text__score">{starPoint}</span>
        <span className="for-a11y">후기</span>
        <span className="text__num">({reviewCount.toLocaleString()})</span>
        <span className="for-a11y">건</span>
      </span>
      <span className="box__score-buycnt">
        <span className="text">구매 {buyCount.toLocaleString()}</span>
        <span className="for-a11y">건</span>
      </span>
    </ScoreElement>
  );
};
export default ItemScore;
