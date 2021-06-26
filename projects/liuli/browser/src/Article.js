import React from "react";
import {
  Tag,
  Typography,
  Card,
  Tooltip,
  Dropdown,
  Menu,
  Button,
  Space,
  Divider,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "./components/Image";

const { Paragraph, Text } = Typography;
export default function (props) {
  let { item, tagChange, execCommand } = props;
  let date = new Date(item.time);
  let time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const colors = "magenta red volcano orange gold lime green cyan blue geek blue purple".split(
    " "
  );
  const cardInfo = (
    <div className="entry-content">
      <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: "展开" }}>
        {item.content}
      </Paragraph>

      <Divider />

      <Space direction="horizontal" size={10}>
        <Text type="secondary">时间：{time}</Text>
        <Text type="secondary">评分：{item.rating_score}</Text>
        <Text type="secondary">评分人数：{item.rating_count}</Text>
      </Space>

      <Divider />

      <Paragraph ellipsis={{ rows: 3, expandable: true }}>
        {item.uid &&
          item.uid.split("|").map((u) => (
            <>
              <Text code type="secondary" copyable={true}>
                {/* magnet:?xt=urn:btih: */}
                {u}
              </Text>
              <br />
            </>
          ))}
      </Paragraph>
      <span className="tag-links">
        {item.tags &&
          item.tags.split("|").map((tag, i) => (
            <Tooltip title={tag}>
              <Tag
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  tagChange(tag);
                }}
                color={colors[parseInt(Math.random() * colors.length)]}
              >
                {tag}
              </Tag>
            </Tooltip>
          ))}
      </span>
    </div>
  );
  return (
    <div>
      {item && (
        <Card
          title={
            <a href={item.href} target="_blank">
              {item.title}
            </a>
          }
          cover={<Image src={item.imgSrc} alt={item.title} />}
          extra={
            <React.Fragment>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <Button
                        type="link"
                        onClick={() => {
                          window.open(item.href);
                        }}
                      >
                        查看详情
                      </Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button type="link">编辑</Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button
                        onClick={() => execCommand("deleteArticle", item)}
                        type="link"
                        danger={true}
                      >
                        删除
                      </Button>
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button type="link">
                  更多
                  <DownOutlined />
                </Button>
              </Dropdown>
            </React.Fragment>
          }
        >
          <Card.Meta title={item.title} description={cardInfo}></Card.Meta>
        </Card>
      )}
    </div>
  );
}
