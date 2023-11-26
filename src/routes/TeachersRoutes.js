import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const Teachers = Loadable(lazy(() => import('pages/teachers')));
const Create = Loadable(lazy(() => import('pages/teachers/Create')));
const Edit = Loadable(lazy(() => import('pages/teachers/Edit')));

const TeachersRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'teachers',
      element: <Teachers />
    },
    {
      path: 'teachers/create',
      element: <Create />
    },
    {
      path: 'teachers/edit/:teacherId',
      element: <Edit />
    }
  ]
};

export default TeachersRoutes;
