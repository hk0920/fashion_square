import React from "react";

const BenefitTag = ({ lmos }) => {
  return (
    <span className="box__itemcard-benefit-tag">
      {lmos.map((lmo, idx) => {
        const { lmoType, lmoString } = lmo || {};
        return (
          <span className={`box__tag box__tag-${lmoType}`} key={idx}>
            <span className="box__inner">{lmoString}</span>
          </span>
        );
      })}
    </span>
  );
};

export default BenefitTag;
