import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const cartItemsIsEmpty = cartItems.length === 0;

  return (
    <Card className={classes.cart}>
      <h2>{cartItemsIsEmpty ? "your cart is empty" : "Your Shopping Cart"}</h2>
      <ul>
        {cartItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.amount,
                // total: 18,
                price: item.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
