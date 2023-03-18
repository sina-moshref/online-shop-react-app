import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../state/features/cartToggle";
import { useState, useEffect } from "react";
import axios from "axios";
import { addToCartInitial } from "../../state/features/cartItems";

const CartButton = (props) => {
  const dispatch = useDispatch();
  let cartLength = useSelector((state) => state.cartItems.cartItems.length);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    axios
      .get("https://api-generator.retool.com/PXe0yH/data")
      .then((res) => {
        let newCart = [];
        let i = 0;
        let items = res.data;
        for (let item in items[0]) {
          newCart.push(items[0][`${i}`]);
          i++;
        }
        newCart.pop();
        dispatch(addToCartInitial(newCart));
        console.log(newCart);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (cartLength === 0) return;

    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartLength]);

  return (
    <button className={btnClasses} onClick={() => dispatch(toggle())}>
      <span>My Cartt</span>
      <span className={classes.badge}>{cartLength || 0}</span>
    </button>
  );
};

export default CartButton;
