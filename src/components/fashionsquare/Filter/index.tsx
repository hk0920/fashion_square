import React, { useState } from "react";
import CategoryFilter, { FilterDataType } from "./CategoryFilter";
import QuickFilter, { quickSortData } from "./QuickFilter";
import BrandFilter from "./BrandFilter";

export interface FilterData {
  categoryfilter: FilterDataType;
  quickfilter: quickSortData;
}
export interface FilterProps {
  data: FilterData;
  tabType: string;
}

const Filter = ({ data, tabType }: FilterProps) => {
  const { categoryfilter, quickfilter } = data || {};
  const [categoryIndex, setCategoryIndex] = useState({
    oneDepth: 0,
    twoDepth: 0,
  });
  const [isCategoryLayer, setIsCategoryLayer] = useState<boolean>(false);

  const categoryControl = (
    event: React.MouseEventHandler<HTMLElement>,
    oneDepth: number,
    twoDepth: number
  ) => {
    setCategoryIndex({
      oneDepth: oneDepth,
      twoDepth: twoDepth,
    });
  };

  const categoryLayerControl = (active: boolean) => {
    setIsCategoryLayer(active);
  };

  return (
    <>
      {tabType === "category" ? (
        <>
          <CategoryFilter
            data={categoryfilter}
            categoryControl={categoryControl}
            categoryLayerControl={categoryLayerControl}
            isCategoryLayer={isCategoryLayer}
            categoryIndex={categoryIndex}
          />
          <QuickFilter data={quickfilter} />
        </>
      ) : (
        <BrandFilter />
      )}
    </>
  );
};

export default Filter;
