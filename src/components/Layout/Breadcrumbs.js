import { NavLink } from "react-router-dom";
import classes from "./Breadcrumbs.module.css";

const Breadcrumbs = (props) => {
    return (
        <nav className={classes.breadcrumbs}>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/home">
                Products
              </NavLink>
            </li>
                &gt;
            <li>
              <NavLink activeClassName={classes.active} to={"/details/" + props.productId}>
                {props.productName}
              </NavLink>
            </li>
          </ul>
        </nav>
    );
}

export default Breadcrumbs;