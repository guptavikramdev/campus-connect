import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('pages/dashborad')));
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    }
  ]
};

export default MainRoutes;
