import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Notification from "./components/UI/Notification";

let inInitial = 0;

function App() {
  const cartToggleValue = useSelector((state) => state.cartToggle.value);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const [showNotification, setShowNotification] = useState(null);

  useEffect(() => {
    if (inInitial < 2) {
      inInitial++;
      return;
    }

    setShowNotification({
      status: "pending",
      title: "sending...",
      message: "Sending cart data!",
    });
    axios
      .put("https://api-generator.retool.com/PXe0yH/data/1", cartItems)
      .then((res) => {
        console.log(cartItems);
        setShowNotification({
          status: "success",
          title: "Success!",
          message: "Sending data successfully!",
        });
      })
      .catch((err) => {
        setShowNotification({
          status: "error",
          title: "Error",
          message: err.message,
        });
        console.log(err);
      });
    setTimeout(() => {
      setShowNotification(null);
    }, 3000);
  }, [cartItems]);

  return (
    <>
      {showNotification && <Notification props={showNotification} />}
      <Layout>
        {cartToggleValue && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
