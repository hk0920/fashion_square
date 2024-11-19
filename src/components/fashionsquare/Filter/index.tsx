import React, { useState } from "react";
import { CategoryFilterWrap, FilterList } from "../../../styles/FilterStyle";
import Tabs from "./Tabs";
import SortFilter from "./SortFilter";
import CategoryLayer from "./CategoryLayer";
import CategoryFilter from "./CategoryFilter";

interface CategoryType {
  categoryNo: string;
  categoryName: string;
  categoryImageUrl: string;
  subCategories: CategoryType[];
  isNew: boolean;
}
interface FilterDataType {
  title: string;
  categories: CategoryType[];
  currentcategoryNo: string;
  subCategories: CategoryType[];
  isCategoryLayerVisible: boolean;
}
interface FilterProps {
  data: FilterDataType;
}

interface CategoryItemProps {
  data: CategoryType[];
  categoryControl: Function;
  selectNo?: string;
}

const RenderList = ({ data , categoryControl}: CategoryItemProps) => {
  return (
    <>
      {data.map((item: any, idx: number) => {
        const {
          categoryNo,
          categoryName,
          categoryImageUrl,
          subCategories,
          isNew,
        } = item || {};

        return (
          <li className="list-item" key={`category-${categoryNo}`}>
            <a href="#" className="link__category" onClick={()=>categoryControl(0,1)}>
              {categoryImageUrl && (
                <span className="box__thumbnail">
                  <img src={categoryImageUrl} alt="전체" className="image" />
                </span>
              )}
              <span className="text__title">{categoryName}</span>
            </a>
          </li>
        );
      })}
    </>
  );
};

const Filter = ({ data }: FilterProps) => {
  const {
    title,
    categories,
    currentcategoryNo,
    subCategories,
    isCategoryLayerVisible,
  } = data || {};

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
    console.log(active)
    setIsCategoryLayer(active);
  };

  return (
    <>
      <Tabs tabType={tabType} tabControl={tabControl} />
      <CategoryFilter data={data} categoryControl={categoryControl} categoryLayerControl={categoryLayerControl} isCategoryLayer={isCategoryLayer} categoryIndex={categoryIndex}/>
      <SortFilter />
    </>
  );
};

export default Filter;
