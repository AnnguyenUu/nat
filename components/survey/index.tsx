import React from 'react';
import Image from 'next/image';
import { Space } from 'antd';
import classname from 'classnames';

interface SurveyProp {
  type: string;
  value?: string | number;
}

const Survey: React.FC<SurveyProp> = ({ type, value }) => {
  const surveyIcon = {
    read: <Image width={16} height={12} src="/Read.png" />,
    like: <Image width={16} height={12} src="/Like.png" />,
    coin: <Image width={12} height={12} src="/coin.png" />,
    extra: <Image width={12} height={12} src="/extra.png" />,
    love: <Image width={10} height={11} src="/likecom.png" />,
    comment: <Image width={10} height={11} src="/cmt.png" />,
  };
  const renderImage = surveyIcon[type];
  return (
    <Space>
      {renderImage}
      <span
        className={classname('survey_content', {
          coin_content: type === 'coin',
        })}
        {...(type === 'extra' && { style: { color: '#844CFF' } })}
      >
        {value}
      </span>
    </Space>
  );
};

export default Survey;
