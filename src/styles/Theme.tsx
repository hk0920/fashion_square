import { DefaultTheme } from "styled-components";

const deviceSize = {
  mobile: "768px",
  tablet: "1200px",
  desktop: "1450px",
};

export const theme: DefaultTheme = {
  colors: {
    textColor: "#424242",
    pointColor: "#5855E2 ",
  },
  maxWidth:`${deviceSize.mobile}`,
  device: {
    mobile: `(min-width:${deviceSize.mobile})`,
    desktop: `(max-width:${deviceSize.desktop})`,
  },
};
