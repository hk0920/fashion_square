import React, { useState } from "react";
import { CheckBoxFilter, SortFilterWrap } from "../../../styles/FilterStyle";

export interface checkboxProps{
	isSelected : boolean,
	text : string,
	name : string,
	code : string
}
export interface quickSortData {
	sorts: checkboxProps[]
}

interface quickFilterProps{
	data : quickSortData
}

const CheckBox = ({isSelected, text, name, code} : checkboxProps) =>{
	const [isActive, setIsActive] = useState(isSelected);
	const id = `checkbox-${code}`;

	const checkboxControl=()=>{
		setIsActive(!isActive)
	}

	return(
		<CheckBoxFilter>
			<input type="checkbox" id={id} defaultChecked={isSelected} name={name} onChange={checkboxControl}/>
			<label htmlFor={id} className="text__label">{text}</label>
		</CheckBoxFilter>
	)
}

const QuickFilter=({data}:quickFilterProps)=>{
	const {sorts} = data || {};
	return(
		<SortFilterWrap>
			<div className="box__inner">
				{sorts.map((item:any, idx:number)=>{
					const {isSelected, text, name , code} = item;
					return(
						<CheckBox key={`sort-item-${idx}`} isSelected={isSelected} text={text} name={name} code={code}/>
					)
				})}
				<button type="button" className="button__filter">필터</button>
			</div>
		</SortFilterWrap>
	)
}

export default QuickFilter;