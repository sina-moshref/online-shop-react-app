import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useState } from "react";
import Notification from "./components/UI/Notification";
import NotificationCaller from "./components/UI/NotificationCaller";

function App() {
  const cartToggleValue = useSelector((state) => state.cartToggle.value);
  const [showNotification, setShowNotification] = useState(null);

  const showNotificationHandler = (status) => {
    setShowNotification(status);
  };

  return (
    <>
      <NotificationCaller notificarionStatus={showNotificationHandler} />
      {showNotification && <Notification props={showNotification} />}
      <Layout>
        {cartToggleValue && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
