/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: 0 none;
    outline: 0;
    padding: 0;
    margin: 0;
  }
`;

const GlobalStyleWrapper = ({ children }: { children: any }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default GlobalStyleWrapper;
