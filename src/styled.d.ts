// import original module declarations
import "styled-components";

// and extend them! 테마 설정을 위한 확장
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}

// 이렇게 설정을 한다면 이름과 자료형을 정의해 주어야 한다
// import { DefaultTheme } from "styled-components";

// export const lightTheme: DefaultTheme = {
//   bgColor: "white",
//   textColor: "black",
//   btnColor: "tomato",
// };

// export const darkTheme: DefaultTheme = {
//   bgColor: "black",
//   textColor: "white",
//   btnColor: "teal",
// };
