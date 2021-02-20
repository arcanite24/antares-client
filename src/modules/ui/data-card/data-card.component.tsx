import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: ClassValue;
  borderColor?: string;
  header?: string;
  title?: string;
  subtitle?: string;
  footerTag?: string;
  footerValue?: string;
}

const AntaresDataCard: React.FC<Props> = ({
  className,
  borderColor = 'black',
  header,
  title,
  subtitle,
  footerTag,
  footerValue,
}) => {
  return (
    <div
      className={classnames('flex flex-col rounded-lg p-6 divide-y', className)}
      style={{ backgroundColor: '#fafafa' }}
    >
      <div className="border-l-2 flex flex-col pl-4" style={{ borderColor }}>
        {header && <span className="text-gray-700">{header}</span>}
        {title && <span className="font-bold">{title}</span>}
        {subtitle && <span className="text-gray-700">{subtitle}</span>}
      </div>

      <div className="flex flex-row items-center mt-4 pt-4">
        {footerTag && <span className="">{footerTag}</span>}
        <div style={{ flex: 1 }}></div>
        {footerValue && <span className="font-bold">{footerValue}</span>}
      </div>
    </div>
  );
};

export default AntaresDataCard;
