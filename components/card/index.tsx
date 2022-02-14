import React from 'react';
import { Card } from 'antd';
import './style.css';

interface CardProp {
  children: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const InkCard: React.FC<CardProp & Record<string, any>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Card
      bordered={false}
      className={['main_card', className].join(' ')}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default InkCard;
