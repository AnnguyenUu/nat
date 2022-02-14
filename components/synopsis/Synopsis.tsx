import React from 'react';
import InkCard from '../card/index';
import { Row, Col, Space, List } from 'antd';
import TagProperty from '../tag/TagProperty';
import Credits from '../credit';
import Image from 'next/image';
import { ComicContext } from '../context/Comic';
import OtherInfo from '../credit/OtherInfo';
import classname from 'classnames';
import { textAbstract } from '../../utils';
import useWindow from '../Hook/useWindowDimensions';

interface Synprop {}

const Synopsis: React.FC<Synprop & Record<string, any>> = React.forwardRef(
  ({}, ref) => {
    const { sysData } = React.useContext(ComicContext);
    const { width } = useWindow();
    const [show, setShow] = React.useState<boolean>(false);
    const renderCollection = React.useCallback(() => {
      return sysData.collections.map((i) => {
        return <Image width={84} height={126} src={i} />;
      });
    }, [sysData]);
    const showRest = React.useCallback((): void => {
      const bool = show;
      setShow(!bool);
    }, [show]);
    React.useImperativeHandle(ref, () => ({
      readFirst: () => showRest(),
    }));
    return (
      <InkCard
        className={classname('main_cover main_about', {
          showLess: !show,
        })}
        title={<h4 className="about_chap">About this</h4>}
        actions={[
          <span onClick={showRest}> {show ? 'Show less' : 'Show more'}</span>,
        ]}
      >
        <Row gutter={[4, 4]}>
          <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
            <Row>
              <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <h5 className="about_sys">Genres</h5>
              </Col>
              <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <TagProperty bookProperty={sysData.genres} />
              </Col>
            </Row>
          </Col>
          <Col
            lg={{ span: 24 }}
            xl={{ span: 24 }}
            xxl={{ span: 24 }}
            style={{ marginTop: 20 }}
          >
            <Row>
              <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <h5 className="about_sys">Summary</h5>
              </Col>
              <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <p className="sys_content">
                  {show
                    ? sysData.summary
                    : textAbstract(sysData.summary, width < 1200 ? 150 : 200)}
                </p>
              </Col>
            </Row>
          </Col>
          {show ? (
            <>
              <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <Space>{renderCollection()}</Space>
              </Col>
              <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <Credits />
              </Col>
              <Col lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <OtherInfo />
              </Col>
            </>
          ) : null}
        </Row>
      </InkCard>
    );
  },
);
export default Synopsis;
