import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: ClassValue;
}

const NavbarItem: React.FC<{ title: string; selected?: boolean }> = ({
  title,
  selected = false,
}) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <span
        className={classnames({
          'text-white': selected === true,
          'text-gray-600': !selected,
        })}
      >
        {title}
      </span>
      <small className="text-white font-extrabold" style={{ height: '4px' }}>
        {selected ? '.' : ''}
      </small>
    </div>
  );
};

const AntaresNavbar: React.FC<Props> = ({ className }) => {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center py-10 px-4 gap-10',
        className,
      )}
    >
      <NavbarItem title="Overview" selected={true}></NavbarItem>
      <NavbarItem title="Projects" selected={false}></NavbarItem>
      <NavbarItem title="Payments" selected={false}></NavbarItem>
      <NavbarItem title="Services" selected={false}></NavbarItem>
    </nav>
  );
};

export default AntaresNavbar;
