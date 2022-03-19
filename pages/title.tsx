import React, { useCallback, useEffect } from 'react';
// components
import { Row, Col, notification } from 'antd';
import CoverBook from '../components/card/CoverBook';
import Synopsis from '../components/synopsis/Synopsis';
import Pricing from '../components/price/Pricing';
import Chapter from '../components/chapter';
import Suggest from '../components/chapter/Suggest';
import ChatComment from '../components/Editor/Comment';
// context
import { ComicContext } from '../components/context/Comic';
//constant
import {
  PROMOTION,
  MAIN_COVER,
  CHAP_DATA,
  SYS_DATA,
  SUGGEST_DATA,
  PRICING_DATA,
} from '../utils/variable';
import { Comment, Chap } from '../utils/types';
import useWindowDimensions from '../components/Hook/useWindowDimensions';
import QRInfo from '../components/qr';
import { notifySuccess } from '../components/notify';
// import fetch from 'node-fetch';
import { useQuery } from 'react-query';
import axios from 'axios';

const TitleInfo = () => {
  const [comments, setCmt] = React.useState([]);
  const sysRef = React.useRef(null);
  const [chapter, setChapter] = React.useState<Chap[]>(CHAP_DATA);
  const { width } = useWindowDimensions();
  const url = 'https://bwsdev.ntx.com.vn/v1/province'
  const fetchData = useCallback(async () => {
    const response = await axios.get(url);
    return response.data
  }, []);
  const { status, data, error } = useQuery(['todos'], fetchData);

  const onAddComment = (v: Comment): void => {
    const clone = [...comments];
    clone.push({
      ...v,
      content: <p className="chat_content_inkr">{v.content}</p>,
    });
    setCmt(clone);
  };
  const onPayment = React.useCallback((): void => {
    const cloneChap = [...chapter];
    const newChap = cloneChap.reduce((acc: Chap[], i: Chap) => {
      i = { ...i, fee: i.fee !== 0 ? 0 : i.fee };
      acc.push(i);
      return acc;
    }, []);
    setChapter(newChap);
    notifySuccess('Pay Fee successfully');
  }, [chapter]);
  const onRegister = React.useCallback((): void => {
    notifySuccess('Register successfully');
  }, []);
  const onShare = React.useCallback((): void => {
    notification.success({
      message: 'Share chapter successfully',
    });
  }, []);
  return (
    <ComicContext.Provider
      value={{
        promotions: PROMOTION,
        mainCover: MAIN_COVER,
        chapter: chapter,
        sysData: SYS_DATA,
        suggestData: SUGGEST_DATA,
        onAddComment: onAddComment,
        pricingData: PRICING_DATA,
        onPayment: onPayment,
        onRegister: onRegister,
        onReadDemo: () => sysRef.current.readFirst(),
        onShare: onShare,
      }}
    >
      <Row gutter={width > 1_600 ? [24, 24] : [32, 32]}>
        {' '}
        {/* gutter will change if width above 1600px */}
        <Col lg={{ span: 15 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
          <Row gutter={[24, 24]}>
            <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
              <CoverBook /> {/* Main cover off book */}
            </Col>
            <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
              <Pricing /> {/* Pricing & Promotion */}
            </Col>
            <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
              <Chapter /> {/* Chapters with last read and 10 chapters */}
            </Col>
          </Row>
        </Col>
        <Col lg={{ span: 9 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
          <Row gutter={width > 1_600 ? [24, 24] : [32, 32]}>
            <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
              <Synopsis ref={sysRef} /> {/* About book & sysnopsis */}
            </Col>
            <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
              <Suggest /> {/* Related title and suggestion */}
            </Col>
            <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
              <ChatComment comments={comments} /> {/* Comment */}
            </Col>
            <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
              <QRInfo />
            </Col>
          </Row>
        </Col>
      </Row>
    </ComicContext.Provider>
  );
};

export default TitleInfo;
