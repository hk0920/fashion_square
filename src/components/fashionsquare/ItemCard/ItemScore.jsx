import React from "react";

const ItemScore = ({ reviewPoint, buyCount }) => {
  const { starPoint, reviewCount } = reviewPoint || {};
  return (
    <span class="box__itemcard-info-score">
      <span class="box__score-awards">
        <span class="for-a11y">평점</span>
        <span class="text__score">{starPoint}</span>
        <span class="for-a11y">후기</span>
        <span class="text__num">{reviewCount}</span>
        <span class="for-a11y">건</span>
      </span>
      <span class="box__score-buycnt">
        <span class="text">구매 {buyCount}</span>
        <span class="for-a11y">건</span>
      </span>
    </span>
  );
};
export default ItemScore;
