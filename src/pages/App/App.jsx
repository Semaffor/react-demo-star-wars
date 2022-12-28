import { NavLink, Route, BrowserRouter, Routes } from 'react-router-dom';

import routesConfig from '../../routes/routesConfig';

const App = () => {
  console.log(routesConfig[0]);
  return (
    <>
      <BrowserRouter>
        <NavLink to='/' exact='true'>Home</NavLink>
        <NavLink to='/people' exact='true'>People</NavLink>
        <Routes>
          {routesConfig.map(({ path, element }, i) => (
            <Route
              key={i}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
