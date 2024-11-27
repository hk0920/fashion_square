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
  maxWidth: `${deviceSize.mobile}`,
  device: {
    mobile: `max-width:${deviceSize.mobile}`,
    tablet: `min-width:${deviceSize.mobile}`,
    desktop: `max-width:${deviceSize.desktop}`,
  },
  sprite: {
    gnbImage: "//script.gmarket.co.kr/build/mobile/image/sprite/gnb/sp-gnb.png",
    gnbSize: "290px 256px",
    fashionImage:
      "//script.gmarket.co.kr/build/mobile/image/sprite/fashionsquare/sp-fashionsquare.png",
    fashionSize: "auto 166px",
  },
};
