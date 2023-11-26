import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const Students = Loadable(lazy(() => import('pages/students')));
const Create = Loadable(lazy(() => import('pages/students/Create')));
const Edit = Loadable(lazy(() => import('pages/students/Edit')));

const StudentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'students',
      element: <Students />
    },
    {
      path: 'students/create',
      element: <Create />
    },
    {
      path: 'students/edit/:studentId',
      element: <Edit />
    }
  ]
};

export default StudentsRoutes;
