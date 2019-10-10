import React from 'react';
import { Grid } from 'react-virtualized';


export default function ViewBytes({ bytes }: any) {
    const cellRenderer = ({ columnIndex, rowIndex, style } : any) => {
      if (rowIndex === 0 && columnIndex === 0) {
        return (<div style={style}><b>Byte</b></div>);
      } else if (rowIndex === 0 && columnIndex === 1) {
        return (<div style={style}><b>Value</b></div>);
      } else if (columnIndex === 0) {
        return (<div style={style}>{rowIndex - 1}</div>);
      } else {
        return (<div style={style}>{bytes[rowIndex - 1]}</div>);
      }
    };

    return (
        <div>
          <Grid
            columnCount={2}
            columnWidth={80}
            height={400}
            rowCount={bytes.length + 1}
            rowHeight={22}
            width={300}
            cellRenderer={cellRenderer}
            />
        </div>
    );
}
