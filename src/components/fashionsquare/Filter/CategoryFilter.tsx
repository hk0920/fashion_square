import React from "react";
import { CategoryFilterWrap, FilterList } from "../../../styles/FilterStyle";
import CategoryLayer from "./CategoryLayer";
import classNames from "classnames";

export interface CategoryType {
  categoryNo: string;
  categoryName: string;
  categoryImageUrl?: string;
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
  oneDepth: number;
  twoDepth: number;
}

export interface CategoryItemProps {
  depth: number;
  data: CategoryType[];
  categoryControl: Function;
  selectedIndex?: number;
  selectNo?: string;
}
export interface CategoryFilterProps {
  data: FilterDataType;
  categoryControl: Function;
  categoryLayerControl: Function;
  isCategoryLayer: boolean;
  categoryIndex: categoryIndexType;
}

const RenderList = ({
  depth,
  data,
  categoryControl,
  selectedIndex,
  selectNo,
}: CategoryItemProps) => {
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
            <a
              href="#"
              className={classNames(
                "link__category",
                selectedIndex === idx && "link__category--acive"
              )}
              onClick={() => categoryControl(depth - 1, idx)}
            >
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

const CategoryFilter = ({
  data,
  categoryControl,
  categoryLayerControl,
  isCategoryLayer,
  categoryIndex,
}: CategoryFilterProps) => {
  const {
    title,
    categories,
    currentcategoryNo,
    subCategories,
    isCategoryLayerVisible,
  } = data || {};

  return (
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
              depth={1}
              data={categories}
              categoryControl={categoryControl}
              selectedIndex={categoryIndex.oneDepth}
              selectNo={currentcategoryNo}
            />
          </FilterList>
        </div>
        <div className="box__inner">
          {categories[categoryIndex.oneDepth].subCategories.length > 0 && (
            <FilterList depth={2}>
              <RenderList
                depth={2}
                data={categories[categoryIndex.oneDepth].subCategories}
                categoryControl={categoryControl}
              />
            </FilterList>
          )}
        </div>
      </div>
      {isCategoryLayer && (
        <CategoryLayer
          selectedIndex={categoryIndex.oneDepth}
          categoriesList={categories}
          closeLayer={categoryLayerControl}
        />
      )}
    </CategoryFilterWrap>
  );
};

export default CategoryFilter;
