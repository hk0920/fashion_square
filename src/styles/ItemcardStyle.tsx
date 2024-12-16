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
  .text__delivery{
    font-size: 12px;
    line-height: 18px;
    color: #000;
  }
`
export const ScoreElement = styled.div`
  display: block;
  line-height: 14px;
  color: #757575;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  .box__score-awards,
  .box__score-buycnt {
    position: relative;
    font-size: 12px;
    color: #757575;
    vertical-align: top;
    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url(${theme.sprite.fashionImage});
      background-repeat: no-repeat;
      background-size: ${theme.sprite.fashionSize};
      background-position: -79px -76px;
      vertical-align: top;
    }  
    .text__score {
      color:#222;
    }
    .text__num,
    .text{
      color: #757575;
    }
  }
  .box__score-buycnt {
    font-size: 12px;
    &:before {
      content: "";
      display: inline-block;
      width: 2px;
      height: 2px;
      margin: 6px 2px;
      vertical-align: top;
      border-radius: 50%;
      background-color: #bdbdbd;
    }
  }
`;


export const LmoTag = styled.span<{ lmoType: string }>`
  display: inline-block;
  max-width: 100%;
  padding: 0 6px;
  font-size: 12px;
  line-height: 18px;
  color: #222;
  border-radius: 10px;
  border: solid 1px #e0e0e0;
  background-color: #fff;
  vertical-align: top;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-top: 1px;
    vertical-align: top;
    background-image: url(${theme.sprite.fashionImage});
    background-repeat: no-repeat;
    background-position: ${(props)=> props.lmoType === "COUPON"? "-144.3px -98px" : props.lmoType === "GIFT"?"-162.3px -98px" :" -146px -124px"};
    background-size: ${theme.sprite.fashionSize}
  }
`;
export const LmoTagsElement = styled.div`
  margin-top: 2px;
  ${LmoTag}{
    margin: 4px 4px 0 0;
  }
`

export const ItemCardComponent = styled.a`
  display: block;
`;

export const ItemCardInfo = styled.a`
  display:block;
  padding:12px;
  .box__itemcard-title-area{
    display:block;
    padding-right:46px;
  }

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
		@media all and (${theme.device.tablet}){
      width: 25%;
    }
  }
`;
