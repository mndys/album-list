import { createGlobalStyle } from "styled-components/macro"

import fontWoff2 from "./fonts/SourceSansPro-Regular.ttf.woff2"
import fontWoff from "./fonts/SourceSansPro-Regular.ttf.woff"
import fontBoldWoff2 from "./fonts/SourceSansPro-Bold.ttf.woff2"
import fontBoldWoff from "./fonts/SourceSansPro-Bold.ttf.woff"

export default createGlobalStyle`
      @font-face {
      font-family: 'Source Sans Pro';
      src: local('Source Sans Pro'), local('SourceSansPro'),
      url(${fontWoff2}) format('woff2'),
      url(${fontWoff}) format('woff');
      font-weight: 300;
      font-style: normal;
     }
      @font-face {
      font-family: 'Source Sans Pro';
      src: local('Source Sans Pro'), local('SourceSansPro'),
      url(${fontBoldWoff2}) format('woff2'),
      url(${fontBoldWoff}) format('woff');
      font-weight: 700;
      font-style: normal;
     }
  `
