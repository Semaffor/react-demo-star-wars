import HomePage from '../pages/HomePage/HomePage';
import PeoplePage from '../pages/PeoplePage/PeoplePage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/people',
    element: <PeoplePage />
  }
]

export default routesConfig;