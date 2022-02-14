import React, { Component } from 'react';
import { Form, Input } from 'antd';
import Button from '../button';
import Image from 'next/image';
import { ComicContext } from '../context/Comic';
import { Comment } from '../../utils/types';

interface EProp {}
const { TextArea } = Input;
const { Item } = Form;
const Editor: React.FC<EProp> = () => {
  const [form] = Form.useForm();
  const { onAddComment } = React.useContext(ComicContext);
  const onSubmit = (values: Comment): void => {
    if (onAddComment) onAddComment(values);
    form.resetFields();
  };
  return (
    <Form
      form={form}
      onFinish={onSubmit}
      initialValues={{
        author: `Han Solo commented on Chapter ${Math.floor(
          Math.random() * 10 + 1,
        )}`,
        avatar: <Image width={32} height={32} src="/mai_avatar.png" />,
      }}
    >
      <Item name="content">
        <TextArea placeholder="Add your comment" size="small" />
      </Item>
      <Item hidden name="author">
        <Input />
      </Item>
      <Item>
        <Button type="comment" htmlType="submit">
          Add Comment
        </Button>
      </Item>
    </Form>
  );
};
export default Editor;
