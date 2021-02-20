import {
  faChevronRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface SidebarMenuItemProps {
  icon: IconDefinition;
  text: string;
  selected?: boolean;
  color?: string;
  onClick?: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  text,
  selected = false,
  color = 'black',
  onClick,
}) => {
  return (
    <div
      className="flex flex-row items-center mb-4 cursor-pointer"
      onClick={() => (onClick ? onClick() : null)}
    >
      {selected === true && (
        <FontAwesomeIcon
          style={{ marginRight: '1rem' }}
          icon={faChevronRight}
        ></FontAwesomeIcon>
      )}
      <FontAwesomeIcon color={color} icon={icon}></FontAwesomeIcon>
      <span className="ml-5 text-sm" style={{ color }}>
        {text}
      </span>
    </div>
  );
};

export default SidebarMenuItem;
