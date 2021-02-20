import React from 'react';
import classnames from 'classnames';

interface Props {
  title?: string;
  valueExtra?: React.ReactNode;
  value: string;
  footer: string;
  className?: string;
}

// TODO: Support custom elements on three props
const InfoCard: React.FC<Props> = ({
  title,
  value,
  valueExtra,
  footer,
  className,
}) => {
  return (
    <div className={classnames('flex flex-col', className)}>
      <h5 className="text-xs mb-1 text-gray-700">{title}</h5>
      <div className="flex flex-row w-full items-center">
        {valueExtra}
        <strong className="text-2xl text-bolder mb-2">{value}</strong>
      </div>
      <small className="text-sm text-gray-500">{footer}</small>
    </div>
  );
};

export default InfoCard;
