import React, { useEffect } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import AntaresActions from '../actions/actions.component';
import AntaresSidebar from '../sidebar/sidebar.component';

import './container.css';

const AntaresContainer: React.FC<{
  requireAuth?: boolean;
}> = ({ children, requireAuth = true }) => {
  const { user, loading, error } = useAuth();

  useEffect(() => {
    if (requireAuth) {
      if (!user && !loading) {
        window.location.href = '/';
      }
    }
  }, [user, loading, error]);

  return (
    <div className="antares-container">
      <AntaresActions></AntaresActions>
      <AntaresSidebar></AntaresSidebar>
      {children}
    </div>
  );
};

export default AntaresContainer;
