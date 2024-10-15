import React from "react";
import Header from "../../components/fashionsquare/Header";
import Filter from "../../components/fashionsquare/Filter";
import ItemCardContainer from "../../components/fashionsquare/ItemCard/ItemCardContainer";

import dummyData from "../../components/fashionsquare/dummyData/dummyData.json";

const FashionSquarePage = () => {
  return (
    <>
      <Header data={dummyData.Header} />
      <Filter data={dummyData.Filter}/>
      <ItemCardContainer data={dummyData.ItemCard} />
    </>
  );
};

export default FashionSquarePage;
