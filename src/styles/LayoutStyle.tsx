import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    body, * {
        font-family:'Montserrat', 'Noto Sans KR', sans-serif;
        color:${theme.colors.textColor};
        box-sizing:border-box;
        @media all and ${theme.device.mobile}{
            font-size:14px;
        }
    }
    .text--point {
        color:${theme.colors.pointColor};
    }
    .inner {
        width:1170px;
        margin:0 auto;
        @media all and ${theme.device.mobile}{
            width:calc(100% - 32px);
        }
    }
    a {
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

export const HeaderComponent = styled.header`
  background: blue;
`;
