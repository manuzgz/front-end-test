import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = (props) => (
  <div className={classes.searchbar}>
    <input type="text" onChange={props.onChange} onFocus={props.onChange} placeholder="Search..." />
  </div>
);

export default SearchBar;
