import CustomerInfo from '../../pages/CustomerInfo';
import Home from '../../pages/Home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home Page',
  },
  {
    path: '/customer',
    exact: true,
    component: CustomerInfo,
    name: 'Customer Information',
  },
];

export default routes;
