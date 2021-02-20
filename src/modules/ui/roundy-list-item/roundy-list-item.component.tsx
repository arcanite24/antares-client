import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: ClassValue;
  selected?: boolean;
  selectedIndicatorColor?: string;
  selectedIndicatorHeight?: string;
  backgroundColor?: string;
}

const AntaresRoundyListItem: React.FC<Props> = ({
  className,
  selected,
  children,
  selectedIndicatorColor = 'white',
  selectedIndicatorHeight = '40%',
  backgroundColor = '#2b2b2b',
}) => {
  return (
    <div className={classnames('flex flex-row items-center', className)}>
      {selected && (
        <span
          className="border"
          style={{
            height: selectedIndicatorHeight,
            borderColor: selectedIndicatorColor,
          }}
        ></span>
      )}

      <div
        className="ml-6 py-5 w-full"
        style={{
          backgroundColor,
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AntaresRoundyListItem;
