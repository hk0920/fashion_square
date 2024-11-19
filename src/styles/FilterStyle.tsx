import styled, { css } from "styled-components";
import { theme } from "./Theme";

export const Tab = styled.div`
  border-bottom: 1px solid #eeeeee;
  .box__inner {
    display: flex;
  }
  .button__tab {
    flex: 1;
    font-family: "Gmarket Sans";
    font-size: 16px;
    line-height: 49px;
    color: #616161;
    text-align: center;
    &.button__tab--active {
      position: relative;
      color: #222222;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        background: ${theme.colors.pointColor};
      }
    }
  }
`;
export const FilterList = styled.ul<{ depth: number }>`
  position: relative;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  margin-left: ${(props) => props.depth === 1 && "74px"};
  padding: 0 4px;
  overflow-x: auto;
  white-space: nowrap;
  background: #fff;
  border-top: ${(props) => props.depth === 2 && "1px solid #dedede"};
  &::-webkit-scrollbar {
    display: none;
  }
  .list-item {
    display: inline-block;
    width: ${(props) => (props.depth === 1 ? "62px" : "auto")};
  }
  .link__category {
    display: block;
    padding: ${(props) => (props.depth === 1 ? "15px 0" : "0 8px")};
    text-align: ${(props) => props.depth === 1 && "center"};
    line-height: ${(props) => (props.depth === 1 ? 1 : "40px")};
  }
  .box__thumbnail {
    display: block;
    width: 48px;
    height: 48px;
    margin: 0 auto 4px;
    border-radius: 50%;
    overflow: hidden;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text__title {
    display: block;
    font-size: 12px;
    &.active {
      color: ${theme.colors.pointColor};
    }
  }
`;

export const CategoryFilterWrap = styled.div`
  padding: 8px 0;
  background-color: #f5f5f5;
  .box__category-filter {
    background: #fff;
    .box__inner {
      position: relative;
    }
    .button__category {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 74px;
      height: 99px;
      text-align: center;
      &:before {
        content: "";
        display: block;
        width: 48px;
        height: 48px;
        margin: 0 auto;
        background-image: url(${theme.sprite.fashionImage});
        background-size: ${theme.sprite.fashionSize};
      }
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        display: block;
        width: 1px;
        height: 69px;
        background: rgba(0, 0, 0, 0.1);
        transform: translateY(-50%);
      }
    }
  }
`;

export const Layer = styled.div<{ name: string }>`
  position: fixed;
  top: ${(props) => (props.name === "category" ? "48px" : 0)};
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 100;
  .box__layer-head {
    position: relative;
    font-size: 17px;
    line-height: 66px;
    color: #191919;
    text-align: center;
    border-bottom: 1px solid #eee;
    .button__close {
      position: absolute;
      top: 10px;
      left: 14px;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background-image: url(${theme.sprite.fashionImage});
      background-size: ${theme.sprite.fashionSize};
      background-position: 0px -50px;
    }
  }
  ${FilterList} {
    overflow-x: hidden;
    max-width: 100%;
    padding: 0 16px;
    white-space: initial;
    .list-item {
      width: 50%;
      &:nth-child(odd) {
        padding-right: 10px;
      }
    }
    .link__category {
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    .box__thumbnail {
      display: inline-block;
      width: 34px;
      height: 34px;
      margin-right: 10px;
      vertical-align: top;
    }
    .text__title {
      display: inline-block;
      line-height: 34px;
      vertical-align: top;
    }
  }
`;

export const SortFilter = styled.div`

`;