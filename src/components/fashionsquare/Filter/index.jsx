import React, { useState } from "react";
import { CategoryFilter, FilterList } from "../../../styles/FilterStyle";
import Tabs from "./Tabs";
import SortFilter from "./SortFilter";
import CategoryLayer from "./CategoryLayer";

const RenderList = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => {
        const {
          categoryNo,
          categoryName,
          categoryImageUrl,
          subCategories,
          isNew,
        } = item || {};

        return (
          <li className="list-item" key={`category-${categoryNo}`}>
            <a href="#" className="link__category">
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

const Filter = ({ data }) => {
  const {
    title,
    categories,
    currentcategoryNo,
    subCategories,
    isCategoryLayerVisible,
  } = data || {};

  const [tabType, setTabType] = useState("category");
  const [categoryIndex, setCategoryIndex] = useState({
    oneDepth: 0,
    twoDepth: 0,
  });
  const [isCategoryLayer, setIsCategoryLayer] = useState(false);
  const tabControl = () => {
    setTabType(tabType === "brand" ? "category" : "brand");
  };

  const categoryControl = (oneDepth, twoDepth) => {
    setCategoryIndex({
      oneDepth: oneDepth,
      twoDepth: twoDepth,
    });
  };

  const closeLayer = () => {
    setIsCategoryLayer(false);
    console.log("??");
  };

  return (
    <>
      <Tabs tabType={tabType} tabControl={tabControl} />
      <CategoryFilter role="navigation">
        <h3 className="for-a11y">{title}</h3>
        <div className="box__category-filter">
          <button
            type="button"
            className="button__category"
            aria-haspopup="dialog"
            onClick={() => setIsCategoryLayer(true)}
          >
            카테고리
          </button>
          <FilterList depth={1}>
            <RenderList data={categories} categoryControl={categoryControl} />
          </FilterList>
        </div>
        {categories[categoryIndex.oneDepth].subCategories.length > 0 && (
          <FilterList depth={2}>
            <RenderList
              data={categories[categoryIndex.oneDepth].subCategories}
              categoryControl={categoryControl}
            />
          </FilterList>
        )}
        <CategoryLayer categoriesList={categories} closeLayer={closeLayer} />
      </CategoryFilter>
      <SortFilter />
    </>
  );
};

export default Filter;
