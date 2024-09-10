import React from "react";
import {
  BackButton,
  CartButton,
  HeaderComponent,
  Heading,
  SearchButton,
} from "../../../styles/LayoutStyle";

const Header = ({ data }) => {
  const { bgColor, title, search, isBack, isCart } = data || {};
  return (
    <HeaderComponent bgColor={bgColor}>
      <div className="box__inner">
        {isBack && (
          <BackButton>
            <span className="for-a11y">뒤로 가기</span>
          </BackButton>
        )}

        {title && (
          <div className="box__header-title">
            <Heading>
              <a href={title.linkUrl} className="link__logo">
                <img
                  src={title.imageUrl}
                  alt={title.text}
                  height="20"
                  className="image"
                />
              </a>
            </Heading>
          </div>
        )}

        <div className="box__header-menu">
          {search && (
            <SearchButton>
              <span className="for-a11y">검색</span>
            </SearchButton>
          )}

          {isCart && (
            <CartButton>
              <span className="for-a11y">장바구니</span>
            </CartButton>
          )}
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;
