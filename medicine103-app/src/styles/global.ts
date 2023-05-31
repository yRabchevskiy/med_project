
import { createGlobalStyle } from 'styled-components';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
        
const fontSize: number = 16;
export const device_SM = 576;
export const device_M = 768;
export const device_L = 1024;
export const device_LL = 1440;
export const device_XL = 1600;
export const device_XXL = 1920;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    margin: 0;
    font-size: ${fontSize + 'px'};
    overflow-x: hidden;
  }

  html, body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    margin: 0;
    font-size: ${fontSize + 'px'};
    overflow-x: hidden;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#root {
  display: flex;
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

table {
  width: 100%;
  border-collapse: collapse;
}
td, th {
  border-bottom: 1px solid #ebebeb;
  padding: 4px 8px;
  white-space: normal;
  text-align: left;
  vertical-align: top;
}

`;

export default GlobalStyle;