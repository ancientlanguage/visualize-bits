import React from 'react';
import { FixedSizeList } from 'react-window';


export default function ViewBytes({ bytes }: any) {
    const Row = ({ index, style } : any) => (
      <div style={style}>Byte {index}: {bytes[index]}</div>
    );

    return (
        <div>
          <FixedSizeList
            height={400}
            itemCount={bytes.length}
            itemSize={22}
            width={300}
            >
            {Row}
          </FixedSizeList>
        </div>
    );
}
