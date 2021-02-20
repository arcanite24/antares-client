/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClassValue } from 'classnames/types';
import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import classnames from 'classnames';

const DUMMY_DATA = [
  {
    id: 'Missing',
    label: 'Missing',
    value: 25,
    color: 'rgba(255, 255, 255, 0.3)',
  },
  {
    id: 'Completed',
    label: 'Completed',
    value: 75,
    color: '#FF845E',
  },
];

interface Props {
  className?: ClassValue;
  data?: any[];
  height: string;
}

const CenteredMetric: React.FC<any> = ({ centerX, centerY }) => {
  // let total = 0;
  // dataWithArc.forEach((datum: any) => {
  //   total += datum.value;
  // });

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fill: 'white', fontSize: '1.2rem', fontWeight: 600 }}
    >
      {Math.floor(Math.random() * 100)}%
    </text>
  );
};

const AntaresMinimalPieChart: React.FC<Props> = ({
  data = DUMMY_DATA,
  className,
  height = '90px',
}) => {
  return (
    <div className={classnames('', className)} style={{ height }}>
      <ResponsivePie
        layers={[
          'slices',
          'sliceLabels',
          'radialLabels',
          'legends',
          CenteredMetric,
        ]}
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.9}
        padAngle={4}
        cornerRadius={8}
        colors={(serie) => serie.data.color}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        enableSliceLabels={false}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
      />
    </div>
  );
};

export default AntaresMinimalPieChart;
