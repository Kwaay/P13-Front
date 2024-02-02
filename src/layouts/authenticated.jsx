import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import store from '../store';

const AuthenticatedLayout = () => (
  <>
    <Header
      auth={store.getState().auth.auth}
      name={useSelector((state) => state.user)?.user?.firstName}
    />
    <Outlet />
    <Footer />
  </>
);
export default AuthenticatedLayout;
