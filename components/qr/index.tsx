import React from 'react';
import InkCard from '../card';
import { List } from 'antd';
import Image from 'next/image';
import { QRCONTENT } from '../../utils/variable';

const QRInfo = () => {
  return (
    <InkCard>
      <List
        itemLayout="horizontal"
        dataSource={QRCONTENT}
        renderItem={(item) => (
          <List.Item
            extra={
              <Image src={item.image} width={116} height={116} alt="QRCode" />
            }
          >
            <List.Item.Meta
              title={<h5 className="price_content">{item.title}</h5>}
              description={<h5 className="price_type">{item.content}</h5>}
            />
          </List.Item>
        )}
      />
    </InkCard>
  );
};

export default QRInfo;
