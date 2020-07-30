import React from "react";
import { connect } from "react-redux";
import { login } from "../store/user";
import { Redirect } from "react-router-dom";

function Login({ login, isLogin, location, loading }) {
  const r = location.redirect;
  const redirect = r && r !== "/login" ? r : "/";
  if (isLogin) return <Redirect to={redirect} />; //如果登陆了直接跳转
  return (
    <div>{loading ? "加载中..." : <button onClick={login}>登录</button>}</div>
  );
}
const mapStateToProps = (state) => ({
  isLogin: state.user.isLogin,
  loading: state.user.loading,
});
export default connect(mapStateToProps, { login })(Login);
