import React from "react";
import { FilterList, Layer } from "../../../styles/FilterStyle";
import classNames from "classnames";

const CategoryLayer = ({ categoriesList, closeLayer, selectedIndex }) => {
  return (
    <Layer $name={"category"}>
      <div className="box__layer-head">
        <div className="box__inner">
          <h3>패션스퀘어 카테고리</h3>
          <button
            type="button"
            className="button__close"
            onClick={() => closeLayer(false)}
          >
            <span className="for-a11y">닫기</span>
          </button>
        </div>
      </div>
      <div className="box__layer-content">
        <FilterList>
          {categoriesList.map((item, idx) => {
            const {
              categoryNo,
              categoryName,
              categoryImageUrl,
              subCategories,
              isNew,
            } = item || {};
            return (
              <li
                className={classNames(
                  "list-item",
                  selectedIndex === idx && "list-item--active"
                )}
                key={`category-${categoryNo}`}
              >
                <a href="#" className="link__category">
                  {categoryImageUrl && (
                    <span className="box__thumbnail">
                      <img src={categoryImageUrl} alt="" className="image" />
                    </span>
                  )}
                  <span className="text__title">{categoryName}</span>
                </a>
              </li>
            );
          })}
        </FilterList>
      </div>
    </Layer>
  );
};

export default CategoryLayer;
