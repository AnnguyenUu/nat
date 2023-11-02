import { css } from '@emotion/css';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

export const RowVirtualizerVariable = () => {
  const parentRef = useRef();

  const rows = new Array(10000)
    .fill(true)
    .map(() => 25 + Math.round(Math.random() * 100));

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (i) => rows[i],
    overscan: 5,
  });

  return (
    <>
      <div
        ref={parentRef}
        className={List}
        style={{
          height: `200px`,
          width: `400px`,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              className={virtualRow.index % 2 ? ListItemOdd : ListItemEven}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${rows[virtualRow.index]}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              Row {virtualRow.index}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ListItemOdd = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ListItemEven = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const List = css`
    border: 1px solid #e6e4dc;
    max-width: 100%;
`