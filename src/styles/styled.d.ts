import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textColor: string;
      pointColor: string;
    };

    device: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
