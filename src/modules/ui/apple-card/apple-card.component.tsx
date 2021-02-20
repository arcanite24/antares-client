import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: ClassValue;
  text?: string;
  img?: string;
  backgroundColor?: string;
  backgroundSize?: string;
}

const AntaresAppleCard: React.FC<Props> = ({
  className,
  text,
  img,
  backgroundColor,
  backgroundSize = 'cover',
}) => {
  return (
    <div
      className={classnames(
        'h-full flex flex-col items-end justify-end rounded-lg p-8',
        className,
      )}
      style={{
        backgroundColor,
        background: `url(${img})`,
        backgroundSize,
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row mb-4 gap-3">
          <div
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: 'white',
              borderRadius: '50px',
            }}
          ></div>
          <div
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: 'white',
              borderRadius: '50px',
            }}
          ></div>
          <div
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: 'white',
              borderRadius: '50px',
            }}
          ></div>
        </div>
        {text && (
          <h5 className="text-2xl text-white font-bold w-1/2">{text}</h5>
        )}
      </div>
    </div>
  );
};

export default AntaresAppleCard;
