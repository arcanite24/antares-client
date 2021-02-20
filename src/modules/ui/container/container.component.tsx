import React from 'react';
import AntaresActions from '../actions/actions.component';
import AntaresSidebar from '../sidebar/sidebar.component';

import './container.css';

const AntaresContainer: React.FC = ({ children }) => {
  return (
    <div className="antares-container">
      <AntaresActions></AntaresActions>
      <AntaresSidebar></AntaresSidebar>
      {children}
    </div>
  );
};

export default AntaresContainer;
