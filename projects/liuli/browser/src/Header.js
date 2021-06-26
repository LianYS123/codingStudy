import React from "react";
import { Input, Menu, Row, Col } from "antd";
export default ({ orders, cb, search }) => {
  return (
    <Row align="middle" style={{ marginBottom: 20 }}>
      <Col span={18}>
        <Menu theme="dark" mode="horizontal">
          {Object.keys(orders).map((cate) => {
            return (
              <Menu.Item onClick={() => cb(cate)}>{orders[cate]}</Menu.Item>
            );
          })}
        </Menu>
      </Col>
      <Col push={1} span={4}>
        <Input.Search onSearch={search} />
      </Col>
    </Row>
  );
};
