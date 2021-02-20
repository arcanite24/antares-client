import type { ClassValue } from 'classnames/types';
import React from 'react';
import { ResponsiveLine, Serie } from '@nivo/line';

const DUMMY_DATA = [
  {
    id: 'income',
    color: 'hsl(25.9, 100%, 49.2%)',
    data: [
      {
        x: 'Sept 1',
        y: 0,
      },
      {
        x: 'Sept 15',
        y: 25,
      },
      {
        x: 'Sept 30',
        y: 100,
      },
    ],
  },
  {
    id: 'expenses',
    color: '#000000',
    data: [
      {
        x: 'Sept 1',
        y: 0,
      },
      {
        x: 'Sept 15',
        y: 25,
      },
      {
        x: 'Sept 30',
        y: 80,
      },
    ],
  },
];

interface Props {
  className?: ClassValue;
  data?: Serie[];
}

const AntaresMinimalLineChart: React.FC<Props> = ({ data = DUMMY_DATA }) => {
  return (
    <ResponsiveLine
      data={data}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      colors={(line) => (line && line.color ? line.color : 'black')}
      enablePoints={false}
      pointSize={15}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
    />
  );
};

export default AntaresMinimalLineChart;
