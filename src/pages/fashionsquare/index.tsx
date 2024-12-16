import React, { useState } from "react";
import Header from "../../components/fashionsquare/Header";
import Tabs from "../../components/fashionsquare/Filter/Tabs";
import Filter from "../../components/fashionsquare/Filter";
import ItemCardContainer from "../../components/fashionsquare/ItemCard/ItemCardContainer";

import dummyData from "../../components/fashionsquare/dummyData/dummyData.json";

const FashionSquarePage = () => {
  const [tabType, setTabType] = useState<string>("category");
  const tabControl = (event: React.MouseEventHandler<HTMLButtonElement>) => {
    setTabType(tabType === "brand" ? "category" : "brand");
  };

  return (
    <>
      <Header data={dummyData.Header} />
      <Tabs tabType={tabType} tabControl={tabControl} />
      <Filter data={dummyData.Filter} tabType={tabType} />
      {tabType === "category" && (
        <ItemCardContainer data={dummyData.ItemCard} />
      )}
    </>
  );
};

export default FashionSquarePage;
