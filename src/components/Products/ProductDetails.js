import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import ProductActions from './ProductActions';
import ProductImage from './ProductImage';
import Breadcrumbs from '../Layout/Breadcrumbs';
import classes from './ProductDetails.module.css';

const ProductDetails = () => {
  const params = useParams();
  const id = params.productId;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => { setProduct(data); });
  }, [id]);

  const options = product.options || [];
  const colors = options.colors || [];
  const storages = options.storages || [];
  const productBrand = product.brand || [];
  const productModel = product.model || [];
  const productName = `${productBrand} ${productModel}`;

  return (
    <>
      <Breadcrumbs productId={id} productName={productName} />
      <div className={classes.productDetails}>
        <ProductImage url={product.imgUrl} alt={product.id} />
        <div>
          <ProductDescription product={product} />
          <ProductActions
            id={id}
            colors={colors}
            storages={storages}
            productName={productName}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
