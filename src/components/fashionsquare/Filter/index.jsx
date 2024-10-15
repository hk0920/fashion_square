import React, { useState } from "react";
import { CategoryFilter, FilterList } from "../../../styles/FilterStyle";
import Tabs from "./Tabs";
import SortFilter from "./SortFilter";

const CategoryList = ({data})=>{
  const [twoDepth, setTwoDepth] = useState(null);
  return(
    <>
      <FilterList>
        {data.map((item, idx)=>{
          const {categoryNo, categoryName, categoryImageUrl, subCategories, isNew} = item || {};
          
          return(
            <li className="list-item" key={`category-${categoryNo}`}>
              <a  href="#" className="link__category">
                <span className="box__thumbnail">
                  <img src={categoryImageUrl} alt="전체" className="image" />
                </span>
                <span className="text__title">{categoryName}</span>
              </a>
            </li>
          )
        })}
      </FilterList>

      {twoDepth && 
        <FilterList>
          {data.map((item, idx)=>{
            const {categoryNo, categoryName, categoryImageUrl, subCategories, isNew} = item || {};
            return(
              <li className="list-item" key={`category-${categoryNo}`}>
                <a className="link__category" href={`/n/fashionsquare/category?${categoryNo}`}>
                  <span className="box__thumbnail">
                    <img src={categoryImageUrl} alt="전체" className="image" />
                  </span>
                  <span className="text__title">{categoryName}</span>
                </a>
              </li>
            )
          })}
        </FilterList>
      }
    </>
    
  )
}

const Filter = ({data}) => {
  const {title, categories, currentcategoryNo, subCategories, isCategoryLayerVisible} = data || {};
  const [tabType, setTabType] = useState("category");
  const tabControl = () => {
    setTabType(tabType === "brand" ? "category" : "brand")
  }
  return (
    <>
      <Tabs tabType={tabType} tabControl={tabControl}/>
      <CategoryFilter role="navigation">
        <h3 className="for-a11y">{title}</h3>
        <div className="box__category-filter">
          <CategoryList data={categories} />
        </div>
      </CategoryFilter>
      <SortFilter />
    </>
  );
};

export default Filter;
