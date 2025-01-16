import { NavLink, Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
function Layout() {
  return (
    <div>
      <header className={classes["header"]}>
        <nav className={classes["header__nav"]}>
          <ul className={classes["header__list"]}>
            <li className={classes["header__item"]}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${classes["header__link"]} ${classes["header__link--active"]}`
                    : classes["header__link"]
                }
              >
                Home
              </NavLink>
            </li>
            <li className={classes["header__item"]}>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? `${classes["header__link"]} ${classes["header__link--active"]}`
                    : classes["header__link"]
                }
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
