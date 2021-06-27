import classes from './ProductImage.module.css';

const ProductImage = (props) => {
    return (
      <div className={classes.productImage}>
        <img src={props.url} alt={props.id} />
      </div>
    );
}

export default ProductImage;