import { Tag, Space } from 'antd';
import React from 'react';
import useWindow from '../Hook/useWindowDimensions';

interface TagProp {
  bookProperty: Array<string>;
}

const TagProperty: React.FC<TagProp> = ({ bookProperty }) => {
  const { width } = useWindow();
  const sizeTag = React.useMemo(() => {
    return width >= 992 && width <= 1200;
  }, [width]);
  console.log(width);
  const tagEl = React.useCallback(
    (i: any) => {
      return <Tag className="comic_tag">{i}</Tag>;
    },
    [bookProperty],
  );
  const renderTag = React.useCallback(() => {
    return (bookProperty ?? []).map(tagEl);
  }, [bookProperty]);
  return <Space {...(sizeTag && { size: 3 })}>{renderTag()}</Space>;
};

export default TagProperty;
