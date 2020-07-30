import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Fruit from "./pages/fruit";
import FruitDetail from "./pages/fruitDetail";
import Login from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import {logout} from './store/user'
function App({isLogin,logout}) {
  return (
    <div>
      <nav>
        <Link to={{ pathname: "fruit" }}>fruit</Link>{" "}
        <Link to={{ pathname: "detail" }}>detail</Link>
        {isLogin ? <button onClick={logout}>登出</button> : <Link to={{ pathname: "login" }}>登录</Link>}
      </nav>
      <main>
        <Switch>
          <Route path="/fruit" component={Fruit} />
          <PrivateRoute path="/detail" component={FruitDetail}></PrivateRoute>
          <Route path="/login" component={Login} />
          <Route component={Fruit} />
        </Switch>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => ({ isLogin: state.user.isLogin });
export default connect(mapStateToProps, {logout})(App);
