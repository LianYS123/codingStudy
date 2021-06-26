import React from "react";
import { Route, Switch, Router } from "react-router";
import App from "./App";
import Login from "./components/login";
//import history from './utils/history';
import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();

export default function () {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={App}></Route>
      </Switch>
    </Router>
  );
}
