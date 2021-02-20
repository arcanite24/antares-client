import React from 'react';
import classnames from 'classnames';
import type { ClassValue } from 'classnames/types';

interface Props {
  barColor?: string;
  barColorBackground?: string;
  width: string;
  height: string;
  className?: ClassValue;
}

const AntaresBar: React.FC<Props> = ({
  barColor = 'black',
  barColorBackground = '#F6F6F6',
  width,
  height,
  className,
}) => {
  return (
    <div
      className={classnames('w-full rounded-md flex flex-row', className)}
      style={{ backgroundColor: barColorBackground, height }}
    >
      <div
        style={{
          // position: 'absolute',
          backgroundColor: barColor,
          width,
          zIndex: 10,
        }}
      ></div>
    </div>
  );
};

export default AntaresBar;
