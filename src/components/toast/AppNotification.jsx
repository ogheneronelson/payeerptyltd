import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import ToastData from "../../components/json/toast.json";
import AppToast from "./index";

const AppNotifications = ({ containerId }) => {
  const [appNotifications, setAppNotifications] = useState([]);

  const toastsDispatched = useRef(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAppNotifications([...ToastData]);
      toastsDispatched.current = false;
    }, 10000);

    return () => {
      // Clean up when component unmounts
      clearInterval(intervalId);
      toast.dismiss();
      toast.clearWaitingQueue({ containerId: containerId });
    };
  }, [containerId]);

  const toastOptions = {
    hideProgressBar: true,
    autoClose: false,
    closeOnClick: false,
    containerId: containerId,
  };

  const showToasts = (appNotifications) => {
    toast.clearWaitingQueue({ containerId: containerId });
    toast.dismiss(); 
    appNotifications.map((notification) =>
      toast(
        <AppToast
          icon={notification.icon}
          name={notification.name}
          amount={notification.amount}
          transaction={notification.transaction}
          country={notification.country}
          
            toastOptions={toastOptions}
        />
      )
    );

    toastsDispatched.current = true;
  };

  return (
    <>
      {appNotifications.length > 0 &&
        !toastsDispatched.current &&
        showToasts(appNotifications)}
    </>
  );
};

export default AppNotifications;
