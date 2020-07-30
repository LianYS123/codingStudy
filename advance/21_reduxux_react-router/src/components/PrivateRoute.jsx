import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
          return isLogin ? (
            <Component {...props}></Component>
          ) : (
            <Redirect
              to={{ pathname: "/login", redirect: props.location.pathname }}
            ></Redirect>
          )
      }
        
      }
    />
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.user.isLogin,
});
export default connect(mapStateToProps)(PrivateRoute);
