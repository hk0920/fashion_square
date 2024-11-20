import React from "react";
import { CategoryFilterWrap, FilterList } from "../../../styles/FilterStyle";
import CategoryLayer from "./CategoryLayer";

export interface CategoryType {
  categoryNo: string;
  categoryName: string;
  categoryImageUrl: string;
  subCategories: CategoryType[];
  isNew: boolean;
}

export interface FilterDataType {
  title: string;
  categories: CategoryType[];
  currentcategoryNo: string;
  subCategories: CategoryType[];
  isCategoryLayerVisible: boolean;
}

export interface categoryIndexType {
  oneDepth: number,
  twoDepth: number
}

export interface CategoryItemProps {
  data: CategoryType[];
  categoryControl: Function;
  selectNo?: string;
}
export interface CategoryFilterProps {
  data: FilterDataType;
  categoryControl:Function,
  categoryLayerControl:Function
  isCategoryLayer:boolean
  categoryIndex:categoryIndexType
}

const RenderList = ({ data , categoryControl, selectNo}: CategoryItemProps) => {
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

const CategoryFilter =({data , categoryControl, categoryLayerControl, isCategoryLayer, categoryIndex}: CategoryFilterProps)=>{
  const {
    title,
    categories,
    currentcategoryNo,
    subCategories,
    isCategoryLayerVisible,
  } = data || {};
    return(
      <CategoryFilterWrap role="navigation">
        <h3 className="for-a11y">{title}</h3>
        <div className="box__category-filter">
          <div className="box__inner">
            <button
              type="button"
              className="button__category"
              aria-haspopup="dialog"
              onClick={() => categoryLayerControl(true)}
            >
              카테고리
            </button>
            <FilterList depth={1}>
            <RenderList
              data={categories}
              categoryControl={categoryControl}
              selectNo={currentcategoryNo}
            />
            </FilterList>
          </div>
          <div className="box__inner">
            {categories[categoryIndex.oneDepth].subCategories.length > 0 && (
            <FilterList depth={2}>
              <RenderList
                data={categories[categoryIndex.oneDepth].subCategories}
                categoryControl={categoryControl}
              />
            </FilterList>
            )}
          </div>
        </div>
        {isCategoryLayer && (
          <CategoryLayer categoriesList={categories} closeLayer={categoryLayerControl} />
        )}
      </CategoryFilterWrap>
    )
}

export default CategoryFilter;