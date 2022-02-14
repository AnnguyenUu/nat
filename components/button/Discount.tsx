import { Input } from 'antd';
import React, { Component } from 'react';

interface DisP {
  discount: number;
  originPrice: number;
}
const Discount: React.FC<DisP> = ({ discount = 50, originPrice = 18 }) => {
  return (
    <Input
      className="discount"
      type="button"
      addonBefore={`-${discount}%`}
      defaultValue={originPrice}
    />
  );
};

export default Discount;
