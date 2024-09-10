import React from "react";
import Header from "../../components/fashionsquare/Header";
import Filter from "../../components/fashionsquare/Filter";

import dummyData from "../../components/fashionsquare/dummyData/dummyData.json";
import ItemCard from "../../components/fashionsquare/ItemCard";

const FashionSquarePage = () => {
  return (
    <>
      <Header data={dummyData.Header} />
      <Filter />
      <ItemCard />
    </>
  );
};

export default FashionSquarePage;
