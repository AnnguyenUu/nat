import React from 'react';
import InkCard from '../card';
import { List, Row, Col, Space } from 'antd';
import Image from 'next/image';
import Survey from '../survey';
import Button from '../../components/button/index';
import { ComicContext } from '../context/Comic';

interface ChapProp {}
const Chapter: React.FC<ChapProp> = () => {
  const { chapter, onRegister } = React.useContext(ComicContext);
  const lastRead = (i) => Boolean(i?.last);
  const lastChapter = React.useMemo(() => {
    if (!chapter.length) return;
    return chapter.filter(lastRead);
  }, [chapter]);
  const renderTypeFee = React.useCallback(
    (fee, type) => {
      if (type === 'last') return;
      return fee ? <Survey type="coin" value={fee} /> : <h5>FREE</h5>;
    },
    [chapter],
  );
  const renderChap = React.useCallback(
    (type = 'new') => {
      return (
        <List
          className="ink_chapter"
          itemLayout="horizontal"
          dataSource={type === 'new' ? chapter : lastChapter}
          renderItem={(item) => (
            <List.Item
              actions={[type === 'new' && renderTypeFee(item.fee, 'new')]}
            >
              <List.Item.Meta
                avatar={
                  <Image
                    src={
                      type === 'last'
                        ? '/LastThumbnail.png'
                        : !item.fee
                        ? '/Thumbnail.png'
                        : '/LockThum.png'
                    }
                    width={78}
                    height={62}
                  />
                }
                title={<h5>{item.title}</h5>}
                description={<h5>{item.description}</h5>}
              />
            </List.Item>
          )}
        />
      );
    },
    [chapter, lastChapter],
  );
  const renderTypeMark = React.useCallback((type) => {
    return (
      <Row>
        <Col lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
          <div style={{ display: 'grid' }}>
            <h5 className="notyChapter">
              {type === 'last' ? 'Last Read' : '10 Chapters'}
            </h5>
            {type === 'new' && (
              <p className="notyChapter__content">
                New chapter every Thursday{' '}
              </p>
            )}
          </div>
        </Col>
        {type === 'new' && (
          <Col
            lg={{ span: 12 }}
            xl={{ span: 12 }}
            xxl={{ span: 12 }}
            style={{ textAlign: 'right' }}
          >
            <Space>
              <Button onClick={onRegister} type="noty"></Button>
              <Button type="sort"></Button>
            </Space>
          </Col>
        )}
      </Row>
    );
  }, []);
  return (
    <InkCard>
      <Row>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          {renderTypeMark('last')}
        </Col>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          {renderChap('last')}
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          {renderTypeMark('new')}
        </Col>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          {renderChap('new')}
        </Col>
      </Row>
    </InkCard>
  );
};

export default Chapter;
