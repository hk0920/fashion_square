import styled, { createGlobalStyle, css } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
	body, * {
		font-family: -apple-system,BlinkMacSystemFont,Apple SD Gothic Neo,Roboto,Noto Sans CJK KR,Tahoma,"Noto Sans KR",sans-serif;
		color:${theme.colors.textColor};
		box-sizing:border-box;

		@media all and ${theme.device.mobile}{
			font-size:14px;
		}
	}
	.text--point {
		color:${theme.colors.pointColor};
	}
	.box__inner {
		max-width:768px;
		margin:0 auto;

		@media all and ${theme.device.mobile}{
			width:calc(100% - 32px);
		}
	}
	button, a {
		background:none;
		border:none;
		text-decoration:none;
	}
	.for-a11y{
		font-size:0;
		width:0;
		height:0;
		text-indent:-9999px;
		overflow:hidden;
	}
`;

const buttonSizeStyle = css`
  display: block;
  width: 48px;
  height: 48px;
  background-image: url(${theme.sprite.gnbImage});
  background-repeat: no-repeat;
  background-size: ${theme.sprite.gnbSize};
`;

export const BackButton = styled.button`
  ${buttonSizeStyle}
  background-position: -208px -150px;
`;

export const SearchButton = styled.button`
  ${buttonSizeStyle}
  background-position: 0px -208px;
`;

export const CartButton = styled.a`
  ${buttonSizeStyle};
  background-position: -50px -208px;
`;

export const Heading = styled.h1`
  display: block;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #222;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const HeaderComponent = styled.header<{ bgColor: string }>`
  height: 48px;
  background: ${(props) => props.bgColor};

  .box__inner {
    position: relative;
  }

  .link__logo {
    padding: 12px 0;
    font-size: 0;
    line-height: 0;
  }

  ${BackButton} {
    position: absolute;
    top: 0;
    left: 0;
  }

  ${SearchButton} {
    position: absolute;
    top: 0;
    right: 48px;
  }
  ${CartButton} {
    position: absolute;
    top: 0;
    right: 0;
  }

  ${Heading} {
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
  }
`;
