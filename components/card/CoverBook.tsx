import React from 'react';
import { Row, Col, Space, List } from 'antd';
import Image from 'next/image';
// component
import InkCard from './index';
import Survey from '../survey';
import TagProperty from '../tag/TagProperty';
import Button from '../../components/button';
// context
import { ComicContext } from '../context/Comic';
// utils
import { formatNumber } from '../../utils';

interface CoverProps { }
const CoverBook: React.FC<CoverProps> = () => {
  const { mainCover, onReadDemo, onShare } = React.useContext(ComicContext);
  const comic = {
    title: "Alita Battle",
    content: "A male robot"
  };

  function logInfoChapter(greeting1, greeting2) {
    console.log(`${greeting1} ${greeting2}, ${this.title} - ${this.content}`)
  }
  return (
    <InkCard className="main_cover">
      <Row>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }} md={{ span: 24 }}>
          <List
            itemLayout="horizontal"
            dataSource={mainCover}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <div onClick={() => {
                      const newFunc = logInfoChapter.bind(comic, 
                        "And finally with bubbling event this is a",
                        "bind method");
                      newFunc();
                    }}>
                      <Image onClick={() => {
                        logInfoChapter.call(comic, "this is a", "call method");
                        logInfoChapter.apply(comic, ["This is an", "apply method"]);
                      }} src="/Cover.png" width={180} height={271} />
                    </div>
                  }
                  title={
                    <Row>
                      <Col
                        xl={{ span: 12 }}
                        xxl={{ span: 12 }}
                        lg={{ span: 12 }}
                      >
                        <h2 className="title_cover">{item.title}</h2>
                      </Col>
                      <Col
                        xl={{ span: 12 }}
                        xxl={{ span: 12 }}
                        lg={{ span: 12 }}
                        style={{ textAlign: 'end' }}
                      >
                        <Space>
                          <Button type="share" onClick={onShare}></Button>
                          <Button type="dot"></Button>
                        </Space>
                      </Col>
                    </Row>
                  }
                  description={
                    <Row>
                      <Col
                        lg={{ span: 24 }}
                        xl={{ span: 24 }}
                        xxl={{ span: 24 }}
                      >
                        <h5 className="title__content">{`By ${item.author}`}</h5>
                      </Col>
                      <Col
                        lg={{ span: 24 }}
                        xl={{ span: 24 }}
                        xxl={{ span: 24 }}
                      >
                        <h5 className="title__content">
                          {item.category.join(' • ')}
                        </h5>
                      </Col>
                      <Col
                        lg={{ span: 24 }}
                        xl={{ span: 24 }}
                        xxl={{ span: 24 }}
                      >
                        <Space>
                          <Survey
                            type="read"
                            value={formatNumber(item.audience)}
                          />
                          <Survey type="like" value={formatNumber(item.like)} />
                        </Space>
                      </Col>
                      <Col
                        lg={{ span: 24 }}
                        xl={{ span: 24 }}
                        xxl={{ span: 24 }}
                        style={{ marginTop: 30 }}
                      >
                        <TagProperty bookProperty={item.properties} />
                      </Col>
                      <Col
                        lg={{ span: 24 }}
                        xl={{ span: 24 }}
                        xxl={{ span: 24 }}
                        style={{ marginTop: 50 }}
                      >
                        <Button type="primary" onClick={onReadDemo}>
                          Read First Chapter for FREE
                        </Button>
                      </Col>
                    </Row>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </InkCard>
  );
};
export default CoverBook;
