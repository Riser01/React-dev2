import React, { Component, Fragment } from "react";
import {
  Header,
  Footer,
  Bodylandaing,
  Bookbody,
  Login,
  Regis,
  Priceing
} from "./Layouts";
import { Route } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Route exact path="/" component={Bodylandaing} />
        <Route exact path="/booknow" component={Bookbody} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Regis} />
        <Route exact path="/pricing" component={Priceing} />

        <Footer />
      </Fragment>
    );
  }
}
