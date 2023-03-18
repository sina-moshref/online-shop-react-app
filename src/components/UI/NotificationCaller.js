import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

let inInitial = 0;

function NotificationCaller(props) {
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  useEffect(() => {
    if (inInitial < 2) {
      inInitial++;
      return;
    }

    props.notificarionStatus({
      status: "pending",
      title: "sending...",
      message: "Sending cart data!",
    });
    axios
      .put("https://api-generator.retool.com/PXe0yH/data/1", cartItems)
      .then((res) => {
        console.log(cartItems);
        props.notificarionStatus({
          status: "success",
          title: "Success!",
          message: "Sending data successfully!",
        });
      })
      .catch((err) => {
        props.notificarionStatus({
          status: "error",
          title: "Error",
          message: err.message,
        });
        console.log(err);
      });
    setTimeout(() => {
      props.notificarionStatus(null);
    }, 3000);
  }, [cartItems]);

  return <div>{props.children}</div>;
}

export default NotificationCaller;
