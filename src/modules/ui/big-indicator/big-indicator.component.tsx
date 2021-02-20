import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: ClassValue;
  tag?: string;
  value?: string;
  valueColor?: string;
}

const AntaresBigIndicator: React.FC<Props> = ({
  className,
  tag,
  value,
  valueColor = 'white',
}) => {
  return (
    <div className={classnames('flex flex-col', className)}>
      {tag && <h5 className="text-gray-600">{tag}</h5>}
      {value && (
        <span className="text-3xl font-bold" style={{ color: valueColor }}>
          {value}
        </span>
      )}
    </div>
  );
};

export default AntaresBigIndicator;
