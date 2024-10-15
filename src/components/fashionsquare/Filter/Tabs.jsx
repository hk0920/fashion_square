import React from "react";
import { Tab } from "../../../styles/FilterStyle";
import classNames from "classnames";

const Tabs=({tabType, tabControl})=>{
	return(
		<Tab>
			<button type="button" className={classNames("button__tab", tabType==="brand" && "button__tab--active")} onClick={tabControl}>브랜드</button>
			<button type="button" className={classNames("button__tab", tabType==="category" && "button__tab--active")} onClick={tabControl}>카테고리</button>
		</Tab>
	)
}

export default Tabs;