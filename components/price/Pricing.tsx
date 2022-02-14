import React from 'react';
import InkCard from '../../components/card';
import { Row, Col, Space, List, Input } from 'antd';
import Survey from '../survey';
import Button from '../../components/button';
import { ComicContext } from '../context/Comic';
import Discount from '../../components/button/Discount';
import classname from 'classnames';
import Image from 'next/image';

interface PriceProps {}
const Pricing: React.FC<PriceProps> = () => {
  const { promotions, pricingData, onPayment, chapter } =
    React.useContext(ComicContext);
  const total = React.useMemo(() => {
    return chapter.reduce((acc, i) => {
      return (acc += i.fee);
    }, 0);
  }, [chapter]);
  const promoteDom = React.useCallback(
    (i) => {
      return (
        <Col lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
          <InkCard className="card_promotion">
            <Row>
              <Col lg={{ span: 1 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <span className="price_type">{i.type}</span>
              </Col>
              {i.type === 'Locked' ? (
                <Col lg={{ span:24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                  <Space>
                    <h5 className="price_content">{i.detail}</h5>
                    (<Survey type="coin" value={`5 / chapter`} />)
                  </Space>
                </Col>
              ) : (
                <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                  <h5 className="price_content">{i.detail}</h5>
                </Col>
              )}
            </Row>
          </InkCard>
        </Col>
      );
    },
    [pricingData],
  );
  return (
    <InkCard>
      <Row>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          <h5 className="price_ink">Pricing & Promotion</h5>
        </Col>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          <Row gutter={[4, 4]}>{pricingData.map(promoteDom)}</Row>
        </Col>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          <List
            itemLayout="horizontal"
            dataSource={promotions}
            renderItem={(item) => (
              <InkCard className="card_promotion" style={{ marginTop: 2 }}>
                <List.Item
                  actions={[
                    item.type === 'price' ? (
                      total && (
                        <Button onClick={onPayment} type="price">
                          {`${total}`}
                        </Button>
                      )
                    ) : (
                      <Discount discount={50} originPrice={18} />
                    ),
                  ]}
                >
                  <List.Item.Meta
                    title={
                      item.type === 'price' ? (
                        <h5 className="price_content">{item.title}</h5>
                      ) : (
                        <Space>
                          <h5
                            className={classname('price_content', {
                              extra: item.type === 'extra',
                            })}
                          >
                            {item.title}
                          </h5>
                          <Image
                            src="/extra.png"
                            width={15}
                            height={15}
                            alt="extra"
                          />
                        </Space>
                      )
                    }
                    description={
                      <h5 className="price_type">{item.description}</h5>
                    }
                  />
                </List.Item>
              </InkCard>
            )}
          />
        </Col>
      </Row>
    </InkCard>
  );
};
export default Pricing;
