import { NavLink, Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from '../../components/Header/Header';

import routesConfig from '../../routes/routesConfig';

import styles from './App.module.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map(({ path, element }, i) => (
              <Route
                key={i}
                path={path}
                element={element}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
