import React from 'react';
import { Router } from '@reach/router';
import MockDashboardPage from './modules/mock/pages/mock-dashboard.page';
import MockProjectsPage from './modules/mock/pages/mock-projects.page';
import LoginPage from './modules/auth/pages/login.page';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <LoginPage path="/"></LoginPage>
      <MockDashboardPage path="/dashboard"></MockDashboardPage>
      <MockProjectsPage path="/projects"></MockProjectsPage>
    </Router>
  );
};

export default AppRouter;
