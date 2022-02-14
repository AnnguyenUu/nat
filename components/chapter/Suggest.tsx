import React from 'react';
import { List, Row, Col } from 'antd';
import Image from 'next/image';
import InkCard from '../card';
import Survey from '../survey';
import { ComicContext } from '../context/Comic';
import { kFormatter } from '../../utils';

interface SuggestProp {}
const Suggest: React.FC<SuggestProp> = () => {
  const { suggestData } = React.useContext(ComicContext);
  return (
    <InkCard
      className="suggest_card"
      title={<h4 className="related_suggest">Related Titles</h4>}
    >
      <Row>
        <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          <List
            size="small"
            className="ink_chapter"
            itemLayout="horizontal"
            dataSource={suggestData}
            renderItem={(item) => (
              <List.Item className="suggest__list__item">
                <List.Item.Meta
                  avatar={<Image src="/inc.png" width={120} height={120} />}
                  description={
                    <Row>
                      <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <h5 className="title_suggest">{item.title}</h5>
                      </Col>
                      <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <Survey
                          type="extra"
                          value={item.type ? 'Excluesive' : ''}
                        />
                      </Col>
                      <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <p className="ink_prequel">{item.type}</p>
                      </Col>
                      <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <p className="ink_view">{`${kFormatter(
                          item.reads,
                        )} reads`}</p>
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

export default Suggest;
