import React, { useState } from "react";
import Tabs from "./Tabs";
import CategoryFilter, { FilterDataType } from "./CategoryFilter";
import QuickFilter, { quickSortData } from "./QuickFilter";

export interface FilterData{
  categoryfilter: FilterDataType,
  quickfilter: quickSortData
}
export interface FilterProps{
  data: FilterData
}

const Filter = ({ data }: FilterProps) => {
  const {categoryfilter, quickfilter } = data || {};

  const [tabType, setTabType] = useState<string>("category");
  const [categoryIndex, setCategoryIndex] = useState({
    oneDepth: 0,
    twoDepth: 0,
  });
  const [isCategoryLayer, setIsCategoryLayer] = useState<boolean>(false);
  const tabControl = (event: React.MouseEventHandler<HTMLButtonElement>) => {
    setTabType(tabType === "brand" ? "category" : "brand");
  };

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

  const categoryLayerControl = (active:boolean) => {
    setIsCategoryLayer(active);
  };

  return (
    <>
      <Tabs tabType={tabType} tabControl={tabControl} />
      <CategoryFilter data={categoryfilter} categoryControl={categoryControl} categoryLayerControl={categoryLayerControl} isCategoryLayer={isCategoryLayer} categoryIndex={categoryIndex}/>
      <QuickFilter data={quickfilter} />
    </>
  );
};

export default Filter;
