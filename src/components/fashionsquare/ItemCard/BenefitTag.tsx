import React from "react";
import { LmoTag, LmoTagsElement } from "../../../styles/ItemcardStyle";

export interface LmoTag {
  lmoType: string,
  lmoString: string
}

interface LmosProps {
  lmos : LmoTag[]
}

const BenefitTag = ({ lmos } : LmosProps) => {
  return (
    <LmoTagsElement>
      {lmos.map((lmo, idx) => {
        const { lmoType, lmoString } = lmo || {};
        return (
          <LmoTag lmoType={lmoType} key={idx}>{lmoString}</LmoTag>
        );
      })}
    </LmoTagsElement>
  );
};

export default BenefitTag;
