import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Transaction from '../pages/Transaction';

import BaseLayout from '../layouts/base';
import AuthentificatedLayout from '../layouts/authenticated';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthentificatedLayout />,
    children: [
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/account/:accountId',
        element: <Transaction />,
      },
    ],
  },
]);

export default router;
