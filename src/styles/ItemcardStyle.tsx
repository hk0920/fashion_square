import styled from "styled-components";
import { theme } from "./Theme"; 

export const ItemThumbnail = styled.div`
  position: relative;
  .image {
    width: 100%;
  }
  .box__adult{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .box__bigs-label{
    position: absolute;
    top: 0;
    right: 0;
    width: 52px;
    height: 52px;
  }
`;

export const BrandTitle = styled.p`
  display: inline-block;
  max-height: 30px;
  margin-bottom: -2px;
  font-size: 12px;
  line-height: 14px;
  color: #0231a6;
  .box__itemcard-fashion-tag{
    display: inline-block;
    height: 14px;
    vertical-align: top;
    .image{
      height: 100%;
    }
  }
  .text:before{
    display: inline-block;
    width: 2px;
    height: 2px;
    margin: 5px 3px 0 3px;
    background: #bdbdbd;
    vertical-align: top;
    content: '';
  }
`;

export const PriceComponent = styled.div`
  .text__price-seller{
    font-size: 16px;
    font-family: "Gmarket Sans";
    line-height: 20px;
    color: #000;
  }
  .text__unit{
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #000;
  }
`

export const DeliveryElement = styled.div`
  display: block;
  margin-right: -34px;
  font-size: 12px;
  line-height: 18px;
  color: #000;
`

export const ItemCardComponent = styled.div`
  display: block;
`;

export const ItemCardInfo = styled.a`
  display:block;
  padding:12px 46px 12px 12px;

  .text__title{
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: auto;
    max-height: 40px;
    font-size: 14px;
    line-height: 20px;
    color: #000;
  }
`;

export const ItemCardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  ${ItemCardComponent} {
    width: 50%;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
    &:nth-child(even){
      border-right: 0;
    }
    &:nth-child(-n+2){
      border-top: 0;
    }
		@media all and ${theme.device.mobile}{
      width: 25%;
    }
  }
`;
