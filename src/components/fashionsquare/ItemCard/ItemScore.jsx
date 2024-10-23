import React from "react";

const ItemScore = ({ reviewPoint, buyCount }) => {
  const { starPoint, reviewCount } = reviewPoint || {};
  return (
    <span className="box__itemcard-info-score">
      <span className="box__score-awards">
        <span className="for-a11y">평점</span>
        <span className="text__score">{starPoint}</span>
        <span className="for-a11y">후기</span>
        <span className="text__num">{reviewCount}</span>
        <span className="for-a11y">건</span>
      </span>
      <span className="box__score-buycnt">
        <span className="text">구매 {buyCount}</span>
        <span className="for-a11y">건</span>
      </span>
    </span>
  );
};
export default ItemScore;
