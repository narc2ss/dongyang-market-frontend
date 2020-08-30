import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";

import App from "./App";
import GlobalStyle from "style/globalStyle";
import theme from "style/theme";
import rootStore from "store";

const stores = new rootStore();

ReactDOM.render(
  <Router>
    <CookiesProvider>
      <Provider {...stores}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </CookiesProvider>
  </Router>,
  document.getElementById("root")
);
