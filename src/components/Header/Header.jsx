import { NavLink } from "react-router-dom";

import routesConfig from "../../routes/routesConfig";

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.list__container}>
        {
          routesConfig.map(({ path, title }, i) => (
            <li>
              <NavLink
                to={path}
              >
                {title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </header>
  );
}

export default Header;