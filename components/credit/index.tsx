import React from 'react';
import InkCard from '../card';
import { List, Row, Col } from 'antd';
import Image from 'next/image';
import { ComicContext } from '../context/Comic';

const Credits = () => {
  const { sysData } = React.useContext(ComicContext);
  return (
    <InkCard
      title={<h5 className="about_sys">Credits</h5>}
      className="main_info"
      size="small"
    >
      <List
        itemLayout="horizontal"
        dataSource={sysData.credits}
        renderItem={(item) => (
          <List.Item className="credit__item">
            <List.Item.Meta
              avatar={<Image src={item.avatar} width={40} height={40} />}
              description={
                <Row style={{ margin: -5 }}>
                  <Col xl={{ span: 24 }}>
                    <span className="sys_content">{item.name}</span>
                  </Col>
                  <Col xl={{ span: 24 }}>
                    <span className="credit_content">{item.credit}</span>
                  </Col>
                </Row>
              }
            />
          </List.Item>
        )}
      />
    </InkCard>
  );
};

export default Credits;
