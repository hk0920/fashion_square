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
    line-height: ${(props) => (props.depth === 1 ? 1 : "34px")};
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

export const Layer = styled.div<{ $name: string }>`
  position: fixed;
  top: ${(props) => (props.$name === "category" ? "48px" : 0)};
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
    .box__inner {
      position: relative;
    }
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
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 0 16px;
    white-space: initial;
    .list-item {
      width: calc(100% / 3);
      padding-right: 10px;
      &:nth-child(3n) {
        padding-right: 0;
      }
      @media all and (${theme.device.mobile}) {
        width: 50%;
        &:nth-child(3n) {
          padding-right: 0;
        }
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
      margin: 0 10px 0 0;
      vertical-align: top;
    }
    .text__title {
      display: inline-block;
      line-height: 34px;
      vertical-align: top;
    }
  }
`;

export const CheckBoxFilter = styled.span`
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    &:checked + .text__label {
      color: #5855e2;
      &:before {
        background-color: #5855e2;
      }
    }
  }
  .text__label {
    position: relative;
    padding-left: 28px;
    font-size: 14px;
    color: #2c2c2c;
    line-height: 20px;
    &:before {
      content: "";
      position: absolute;
      top: calc(50% - 10px);
      left: 0;
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid #bdbdbd;
      border-radius: 4px;
    }
  }
`;

export const SortFilterWrap = styled.div`
  .box__inner {
    position: relative;
    height: 56px;
    padding: 10px 16px;
    box-sizing: border-box;
  }
  ${CheckBoxFilter} {
    line-height: 36px;
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
  .button__filter {
    position: absolute;
    top: calc(50% - 18px);
    right: 16px;
    display: block;
    height: 36px;
    padding: 0 12px;
    font-size: 14px;
    color: #fff;
    line-height: 32px;
    background: #5855e2;
    border-radius: 8px;
  }
`;

export const SubTab = styled.div`
  padding: 10px 0;
  background: #fafafa;
  border-bottom: 1px solid #f5f5f5;
  text-align: center;
  .button__tab {
    display: inline-block;
    padding: 0 16px;
    margin: 0 14px;
    font-size: 14px;
    line-height: 38px;
    color: #2c2c2c;
    border-radius: 36px;
    &.button__tab--selected {
      color: #fff;
      background: #5855e2;
    }
  }
`;

export const AlphabetFilterList = styled.ul`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding-top: 15px;
  flex-wrap: wrap;
  text-align: center;
  .list-item {
    display: inline-block;
    width: 36px;
    margin: 0 6px 15px;
    list-style: none;
    vertical-align: top;
  }
  .button__tab {
    display: block;
    width: 36px;
    height: 36px;
    font-size: 16px;
    line-height: 36px;
    color: #2c2c2c;
    background: #f5f5f5;
    border-radius: 50%;
    text-align: center;
    &.button__tab--selected {
      color: #fff;
      background: #5855e2;
    }
  }
`;
