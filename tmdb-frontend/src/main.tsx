import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/theme";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }
  body{
    background-color: "#000";
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Fragment>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  </React.StrictMode>
);
