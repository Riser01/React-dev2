import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/app";
import { BrowserRouter } from "react-router-dom";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </BrowserRouter>,
  rootElement
);
