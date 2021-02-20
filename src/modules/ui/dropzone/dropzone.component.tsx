import type { ClassValue } from 'classnames/types';
import React from 'react';
import classnames from 'classnames';

import './dropzone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

interface Props {
  className?: ClassValue;
}

const AntaresDropzone: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={classnames(
        'antares-dropzone w-full p-3 rounded-lg',
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center border border-dashed border-gray-500 p-8 rounded-lg">
        <FontAwesomeIcon icon={faUpload} size="3x"></FontAwesomeIcon>
        <span className="text-lg mt-4">Upload invoice</span>
      </div>
    </div>
  );
};

export default AntaresDropzone;
