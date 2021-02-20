import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const AntaresDataContainer: React.FC<Props> = ({
  title,
  subtitle,
  actions,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end">
        <h4 className="text-3xl font-bold mr-4">{title}</h4>
        <small className="text-lg text-gray-600">{subtitle}</small>
        <span style={{ flex: 1 }}></span>
        <div className="flex flex-row items-center self-center">{actions}</div>
      </div>
      {children}
    </div>
  );
};

export default AntaresDataContainer;
