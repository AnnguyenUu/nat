import React from 'react';
import { Button } from 'antd';
import './style.css';
import Image from 'next/image';

interface BtnProp {
  children?: JSX.Element[] | JSX.Element | string;
  type?: 'primary' | 'price' | 'comment' | 'noty' | 'sort' | 'share' | 'dot';
}

const CBButton: React.FC<BtnProp & Record<string, any>> = ({
  children,
  type,
  ...rest
}) => {
  const BTN = {
    primary: {
      className: 'ink_primary',
    },
    share: {
      className: 'ink_price',
      icon: <Image width={12} height={12} src="/Share.png" />,
    },
    dot: {
      className: 'ink_price',
      icon: <Image width={12} height={12} src="/dot.png" />,
    },
    noty: {
      className: 'ink_price',
      icon: <Image width={12} height={12} src="/Bell.png" />,
    },
    sort: {
      className: 'ink_price',
      icon: <Image width={12} height={12} src="/Sort.png" />,
    },
    price: {
      className: 'ink_price',
      icon: <Image width={12} height={12} src="/coin.png" />,
    },
    comment: {
      className: 'ink_primary',
    },
  };
  return (
    <Button {...BTN[type]} {...rest}>
      {children}
    </Button>
  );
};

export default CBButton;
