import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { remove, decrease, increase } from "../../state/features/cartItems";

const CartItem = (props) => {
  const { title, price, quantity, id } = props.item;
  let totalPrice = quantity * price;

  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${`${price}.00`}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() =>
              quantity > 1 ? dispatch(decrease(id)) : dispatch(remove(id))
            }
          >
            -
          </button>
          <button onClick={() => dispatch(increase(id))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
