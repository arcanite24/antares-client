import React from 'react';
import { Router } from '@reach/router';
import MockDashboardPage from './modules/mock/pages/mock-dashboard.page';
import MockProjectsPage from './modules/mock/pages/mock-projects.page';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MockDashboardPage path="/"></MockDashboardPage>
      <MockProjectsPage path="/projects"></MockProjectsPage>
    </Router>
  );
};

export default AppRouter;
