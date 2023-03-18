import { useEffect, useState } from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  const { status, title, message } = props.props;
  let specialClasses = "";
  const [fadeNotif, setFadeNotif] = useState(false);

  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }

  useEffect(() => {
    setFadeNotif(true);
    const timer = setTimeout(() => {
      setFadeNotif(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const cssClasses = `${classes.notification} ${specialClasses} ${
    fadeNotif ? classes.fade : ""
  }`;

  return (
    <div className={classes.wrapper}>
      <section className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </section>
    </div>
  );
};

export default Notification;
