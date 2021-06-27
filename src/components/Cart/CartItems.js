import { useCart } from "./Cart";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
    const cartItems = useCart();
    const cItems = cartItems || [];


    const items = cItems.map((item, index) =>
        <li key={index}>{`id: ${item.id} | sCode: ${item.storageCode} | cCode: ${item.colorCode}`}</li>
    );

    return(
        <div className={classes.cartItems} hidden={props.isHidden}>
            <h3>Items in your cart:</h3>
            <ul>
                {items}
            </ul>
        </div>
    );
}

export default CartItems;