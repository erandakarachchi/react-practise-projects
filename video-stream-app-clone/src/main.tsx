import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </React.StrictMode>
);
