import React from "react";
import { FilterList, Layer } from "../../../styles/FilterStyle";

const CategoryLayer = ({ categoriesList, closeLayer }) => {
  return (
    <Layer $name={"category"}>
      <div className="box__layer-head">
        <h3>패션스퀘어 카테고리</h3>
        <button type="button" className="button__close" onClick={()=>closeLayer(false)}>
          <span className="for-a11y">닫기</span>
        </button>
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
              <li className="list-item" key={`category-${categoryNo}`}>
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
