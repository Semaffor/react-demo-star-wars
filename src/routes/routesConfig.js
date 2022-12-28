import HomePage from '../pages/HomePage/HomePage';
import PeoplePage from '../pages/PeoplePage/PeoplePage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Home'
  },
  {
    path: '/people',
    element: <PeoplePage />,
    title: 'People'
  }
]

export default routesConfig;