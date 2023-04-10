import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

const GlobalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: SpoqaHanSansNeo;
    font-weight: normal;
    src: url('/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype'),
      url('/fonts/SpoqaHanSansNeo-Regular.woff') format('woff');
  }
  @font-face {
    font-family: SpoqaHanSansNeo;
    font-weight: 500;
    src: url('/fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype'),
      url('/fonts/SpoqaHanSansNeo-Medium.woff') format('woff');
  }
  @font-face {
    font-family: SpoqaHanSansNeo;
    font-weight: bold;
    src: url('/fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype'),
      url('/fonts/SpoqaHanSansNeo-Bold.woff') format('woff');
  }

  * {
    font-family: SpoqaHanSansNeo !important;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
