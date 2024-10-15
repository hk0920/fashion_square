import styled, { css } from "styled-components";
import { theme } from "./Theme"; 

export const FilterList = styled.ul`
	white-space: nowrap;
	max-width: ${theme.maxWidth};
	margin: 0 auto;
	padding: 0 4px;
	position: relative;
	overflow-x: auto;
	.list-item{
		display: inline-block;
		width: 62px;
	}
	.box__thumbnail{
		display: block;
		width: 48px;
		height: 48px;
		margin: 0 auto 4px;
		border-radius: 50%;
		overflow: hidden;
		.image{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.text__title{
		display:block;
		font-size:12px;
		&.active{
			color:${theme.colors.pointColor}
		}
	}
`
export const Tab = styled.div`
	display: flex;
	border-bottom:1px solid #eeeeee;
	.button__tab{
		flex: 1;
		font-family: "Gmarket Sans";
		font-size: 16px;
		line-height: 49px;
		color: #616161;
		text-align: center;
		&.button__tab--active{
			position: relative;
			color: #222222;
			&:after{
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				display: block;
				width: 100%;
				height: 2px;
				background: ${theme.colors.pointColor}
			}		
		}
	}
`

export const CategoryFilter = styled.div`
	padding: 8px 0;
	background-color: #f5f5f5;
	.box__category-filter {
		background: #fff;
		.link__category {
			display: block;
			padding: 15px 0;
			text-align: center;
		}
	}
`