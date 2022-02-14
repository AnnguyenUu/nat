import React from 'react';
import Editor from '.';
import InkCard from '../card';
import Image from 'next/image';
import { Comment, Row, Col, List, Space } from 'antd';
import Survey from '../survey';
import { title } from 'process';

interface CommentProp {
  author: string;
  content: string;
}
interface ChatProps {
  comments?: CommentProp[];
}
const ChatComment: React.FC<ChatProps> = ({ comments }) => {
  const CommentList = () => (
    <List
      dataSource={comments}
      itemLayout="horizontal"
      renderItem={(props) => (
        <Comment
          actions={[
            <Space>
              <Survey type="love" value={61} />
              <Survey type="comment" value={61} />
            </Space>,
          ]}
          className="comment_inkr"
          avatar={<Image width={32} height={32} src="/hansolo.png" />}
          {...props}
        />
      )}
    />
  );
  return (
    <InkCard
      className="main_comment"
      title={
        (comments ?? []).length
          ? `${comments.length} Comments`
          : 'Let start comment'
      }
    >
      <Row gutter={[4, 4]}>
        <Col xl={{ span: 24 }} xxl={{ span: 24 }} lg={{ span: 24 }}>
          {Boolean(comments?.length) && <CommentList />}
        </Col>
        <Col xl={{ span: 24 }} lg={{ span: 24 }} xxl={{ span: 24 }}>
          <Comment
            avatar={<Image width={32} height={32} src="/mai_avatar.png" />}
            content={<Editor />}
          />
        </Col>
      </Row>
    </InkCard>
  );
};

export default ChatComment;
