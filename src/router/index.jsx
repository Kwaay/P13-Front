import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import UserEdit from '../pages/UserEdit';
import Transactions from '../pages/Transactions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/user/edit',
    element: <UserEdit />,
  },
  {
    path: '/transactions',
    element: <Transactions />,
  },
]);

export default router;
