import React from 'react';
import InkCard from '../card';
import { Row, Col, Space } from 'antd';
import { ComicContext } from '../context/Comic';
import { OTHER_INFO } from '../../utils/variable';

const OtherInfo = () => {
  const { sysData } = React.useContext(ComicContext);
  return (
    <InkCard
      title={<h5 className="about_sys">Other Facts</h5>}
      className="main_info"
    >
      <Row gutter={[12, 12]}>
        {Object.keys(OTHER_INFO).map((i) => {
          return (
            <Col xl={{ span: 24 }}>
              <Space>
                <span className='fact_title'>{OTHER_INFO[i]}</span>
                <span>:</span> <span  className='fact_content'>{sysData.other[i]}</span>
              </Space>
            </Col>
          );
        })}
      </Row>
    </InkCard>
  );
};

export default OtherInfo;
