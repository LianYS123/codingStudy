import React, { useState } from "react";
import Article from "./Article";
import PageHeader from "./Header";
import { Col, List, Layout } from "antd";
import qs from 'querystring';
import { cardSize } from "./constants";
import actions from "./actions";
import Status from "./Status";
import { useRequest } from "ahooks";

const { Header, Content, Footer, Sider } = Layout;

const orders = {
  time: "按时间排序",
  rating_score: "按评分排序",
  rating_count: "按热度排序",
  common: "综合排序",
};

const App = () => {
  const [currentSize, setCurrentSize] = useState("small");
  const { tableProps, refresh, run, pagination } = useRequest(
    ({current, pageSize, ...params}) => {
      return fetch(`/articles?${qs.stringify({page: current, pageSize, ...params})}`, {
        method: 'GET',
      }).then(res => res.json());
    },
    {
      paginated: true,
    }
  );

  const execCommand = (command, record) => {
    const options = {
      record,
      reload: refresh,
    };
    actions[command](options);
  };

  return (
    <Layout>
      <Header>
        <PageHeader
          orders={orders}
          search={(keyword) => {
            run({ current: 1, pageSize: pagination.pageSize, keyword });
          }}
          cb={(order) => run({ current:1, pageSize: pagination.pageSize, order })}
        />
      </Header>
      <Layout>
        <Content style={{ margin: 20, overflow: "hidden" }}>
          {/* <Status
            {...query}
            curCate={order}
            onTagChange={onTagChange}
            onClearSearch={onClearSearch}
            currentSize={currentCardSize}
            onSizeChange={onSizeChange}
          /> */}
          <List
            {...tableProps}
            pagination={pagination}
            grid={{
              gutter: [16, 16],
              column: cardSize[currentSize].column,
            }}
            renderItem={(item) => {
              return (
                <Col>
                  <Article
                    item={item}
                    execCommand={execCommand}
                    tagChange={(tags) => run({ tags })}
                    key={item.id}
                  />
                </Col>
              );
            }}
          />
        </Content>
        {/* <Sider></Sider> */}
      </Layout>

      <Footer></Footer>
    </Layout>
  );
};

export default App;
