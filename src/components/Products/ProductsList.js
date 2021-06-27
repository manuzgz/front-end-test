import classes from './ProductsList.module.css';
import ProductItem from './ProductItem';

const ProductsList = (props) => {
    return (
        <ul className={classes.list}>
          {props.products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                imgUrl={product.imgUrl}
                brand={product.brand}
                model={product.model}
                price={product.price}
                onResetFilterHandler={props.onResetFilterHandler}
              />
          ))}
        </ul>
      );
}

export default ProductsList;