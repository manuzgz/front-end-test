import React, { Fragment, useEffect, useState } from "react";
import classes from "./ProductActions.module.css";
import { useDispatchCart } from "../Cart/Cart";

const ProductActions = (props) => {
  const dispatch = useDispatchCart();

  const [item, setItem] = useState({ id: props.id, name: props.productName });
  const [disabledAddCart, setDisabledAddCart] = useState(true);

  useEffect(() => {
    if (item.storageCode && item.colorCode) {
      setDisabledAddCart(false);
    } else {
      setDisabledAddCart(true);
    }
  }, [item]);

  const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }

  const addToCartHandler = (item) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };   

    fetch("https://front-test-api.herokuapp.com/api/cart", requestOptions)
      .then(handleErrors)
      .then((response) => { 
        if(response.ok) {
          dispatch({ type: 'ADD', item });
        }
        return response.json()
      })
      .catch(error => alert(error))
  };

  const onColorChangeHandler = (e) => {
    setItem({
      ...item,
      colorCode: +e.currentTarget.value
    });
  }

  const onStorageChangeHandler = (e) => {
    setItem({
      ...item,
      storageCode: +e.currentTarget.value
    });
  }

  const colors = props.colors.map((color, index) => {
    return (
      <option value={color.code} key={index}>{color.name}</option>
    )
  }
  );

  const storages = props.storages.map((storage, index) => {
    // let defaultChecked = (props.storages.length === 1 && index === 0);
    return (
      <Fragment key={index}>
        <input type="radio" id="html" name="storage" value={storage.code}
          onChange={onStorageChangeHandler} />
          {/* defaultChecked={defaultChecked} */}
        <label htmlFor={storage.name}>{storage.name}</label><br />
      </Fragment>
    );
  }
  );

  return (
    <div className={classes.checkout}>
      <div className={classes.options}>
        <p>Storage:</p>
        {storages}
        <br />
        <p>Color:</p>
        <select name="colors" onChange={onColorChangeHandler}>
          <option value=''>Select an option</option>
          {colors}
        </select>
      </div>
      <div className={classes.addToCart}>
        <button disabled={disabledAddCart} onClick={() => addToCartHandler(item)}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductActions;