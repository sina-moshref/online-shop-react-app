import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Products.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { setData } from "../../state/features/items";

const Products = (props) => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    axios
      .get("https://api-generator.retool.com/igpbDF/productsapi")
      .then((res) => {
        dispatch(setData(res.data));
        console.log(res.data);
        setLoading(false);
        setErrorMessage(null);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setErrorMessage(err.message);
      });
  }, []);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {loading && <h3 className={classes.loading}>Loading...</h3>}
      {errorMessage ? <h3 className={classes.error}>{errorMessage}</h3> : ""}
      <ul>
        {items.map((item, index) => {
          return (
            <ProductItem
              key={index}
              title={item.col1}
              price={item.col2}
              description={item.col3}
              id={item.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
