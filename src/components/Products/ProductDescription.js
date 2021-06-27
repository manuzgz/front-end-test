import React from 'react';
import classes from './ProductDescription.module.css';

const ProductDescription = (props) => {
  const { product } = props;
  const pCamera = product.primaryCamera || [];
  const sCamera = product.secondaryCmera || [];

  return (
    <div className={classes.productDescription}>
      <h3>
        {product.brand}
        {' '}
        {product.model}
      </h3>
      <p className={classes.productId}>
        Ref.
        {product.id}
      </p>
      <ul>
        <li>
          CPU:
          {product.cpu}
        </li>
        <li>
          RAM:
          {product.ram}
        </li>
        <li>
          Operating System:
          {product.os}
        </li>
        <li>
          Display Resolution:
          {product.displayResolution}
        </li>
        <li>
          Battery:
          {product.battery}
        </li>
        <li>
          Back Camera:
          {Array.isArray(pCamera) ? pCamera.join(', ') : pCamera}
        </li>
        <li>
          Front Camera:
          {Array.isArray(sCamera) ? sCamera.join(', ') : sCamera}
        </li>
        <li>
          Dimensions:
          {product.dimentions}
        </li>
        <li>
          Weight:
          {product.weight || '-' }
          {' '}
          g
        </li>
      </ul>
      <h2>{product.price ? `${product.price} €` : '' }</h2>
    </div>
  );
};

export default ProductDescription;
