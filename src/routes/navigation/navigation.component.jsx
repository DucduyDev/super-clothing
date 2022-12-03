import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/logo.svg";
import "./navigation.component.scss";

const Navigation = () => {
  return (
    <Fragment>
      <header className="header">
        <Link className="header__logo-container" to="/">
          <CrownLogo className="header__logo" />
        </Link>

        <nav className="navigation">
          <ul className="navigation__list">
            <li>
              <Link className="navigation__link" to="/shop">
                SHOP
              </Link>
            </li>

            <li>
              <Link className="navigation__link" to="/about">
                ABOUT
              </Link>
            </li>

            <li>
              <Link className="navigation__link" to="/shop">
                CART
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
