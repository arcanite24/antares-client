import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: ClassValue;
  color?: string;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const AntaresColorCard: React.FC<Props> = ({
  className,
  color = '#FAFAFA',
  title,
  subtitle,
  actions,
  children,
}) => {
  return (
    <div
      className={classnames('w-full flex flex-col rounded-xl', className)}
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-row items-center mt-6 mx-8">
        {title && <h5 className="text-xl font-bold">{title}</h5>}
        <div style={{ flex: 1 }}></div>
        {actions}
      </div>

      {subtitle && <p className="text-lg mx-8">{subtitle}</p>}

      {children}
    </div>
  );
};

export default AntaresColorCard;
