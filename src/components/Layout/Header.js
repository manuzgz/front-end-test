import React, { Fragment, useState } from 'react';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import { useCart } from '../Cart/Cart';
import CartItems from '../Cart/CartItems';
import classes from './Header.module.css';
import cart_icon from '../../assets/cart-icon.png';

const Header = () => {
  const items = useCart();
  const itemsLenght = items ? items.length : 0;
  const [isHidden, setIsHidden] = useState(true);
  const match = useRouteMatch('/details');
  const location = useLocation();
  const path = location.pathname || '';
  let detailsLink = '';

  if (match) {
    detailsLink = (
      <li>
        <NavLink activeClassName={classes.active} to={path}>
          Product details
        </NavLink>
      </li>
    );
  }

  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/home">
                <h1>Mobile Devices Store</h1>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/home">
                Products list
              </NavLink>
            </li>
            {detailsLink}
          </ul>
        </nav>
        <span className={classes.cart} onClick={() => (itemsLenght ? setIsHidden(!isHidden) : true)}>
          <img src={cart_icon} alt="Cart" />
          (
          {itemsLenght}
          )
        </span>
      </header>
      <CartItems isHidden={isHidden} />
    </>
  );
};

export default Header;
