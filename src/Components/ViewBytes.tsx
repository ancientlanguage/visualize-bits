import React from 'react';
import { Grid } from 'react-virtualized';
import { Chart, BarSeries, ArgumentAxis, ValueAxis, Title } from "@devexpress/dx-react-chart-material-ui";

function Label(props : any) {
  const { text } = props;
  const index = Number(text);
  if (index === 0 || (index + 1) % 32 === 0) {
    console.log('Label: ' + text);
    return (<ArgumentAxis.Label {...props} />);
  } else {
    return (<></>);
  }
};

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

    const containerStyle = {
      margin: '4px',
      display: 'flex',
    };

    const leftStyle = {
      margin: '4px',
    };
    const rightStyle = {
      margin: '4px',
      width: '1000px',
    };

    const byteCounts : {name:string; count:number}[] = [];
    for (var index = 0; index < 256; index++) {
      byteCounts[index] = {
        name: '' + index,
        count: 0,
      };
    }

    if (bytes.length > 0) {
      bytes.forEach((current : any, index : any) => {
        byteCounts[current].count = byteCounts[current].count + 1;
      });
    }

    return (
        <div style={containerStyle}>
          <div style={leftStyle}>
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
          <div style={rightStyle}>
              <Chart data={byteCounts}>
                <Title text="Counts of each byte value" />
                <ArgumentAxis showTicks={false} labelComponent={Label} />
                <ValueAxis />
                <BarSeries valueField="count" argumentField="name" />
              </Chart>
          </div>
        </div>
    );
}
