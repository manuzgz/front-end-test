import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => (
  <NavLink
    className={classes.item}
    to={`/details/${props.id}`}
    onClick={props.onResetFilterHandler}
  >
    <img src={props.imgUrl} alt={props.model} />
    <h3>{props.brand}</h3>
    <p>{props.model}</p>
    <h2>{props.price ? `${props.price} €` : ""}</h2>
  </NavLink>
);

export default ProductItem;
