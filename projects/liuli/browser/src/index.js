import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router/>
  </ConfigProvider>,
  document.getElementById("root")
);
