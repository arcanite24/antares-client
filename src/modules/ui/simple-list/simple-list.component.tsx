import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';

interface AntaresSimpleListItem {
  color?: string;
  text: string;
  classes?: ClassValue;
  extra?: React.ReactNode;
}

interface Props {
  className?: ClassValue;
  items: AntaresSimpleListItem[];
}

const AntaresSimpleList: React.FC<Props> = ({ className, items }) => {
  return (
    <div className={classnames('flex flex-col', className)}>
      <ul>
        {items.map(({ text, color = 'black', classes }, i) => (
          <li
            key={i}
            className={classnames('flex flex-row items-center', classes)}
          >
            <div
              className="mr-2"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: color,
              }}
            ></div>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AntaresSimpleList;
