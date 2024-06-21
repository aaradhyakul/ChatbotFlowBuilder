import React, { useContext, useEffect, useState } from "react";
import { AlertsContext } from "@/contextProviders/AlertsContextProvider";

const Alerts = () => {
  const { alertsState } = useContext(AlertsContext);
  useEffect(() => {
    const { css, message, duration } = alertsState;
    console.log(alertsState);
    if (duration) {
      setAlertCSS(`translate-x-[calc(100%+10px)] ${css}`);
      setTimeout(() => {
        setAlertCSS(`${css}`);
      }, duration);
    }
  }, [alertsState]);
  const [alertCSS, setAlertCSS] = useState("");
  return (
    <div
      className={`${alertCSS}  fixed left-[-230px] top-[50px] w-[220px] font-semibold p-2 rounded-r-md transition-transform duration-300 ease-in`}
    >
      {alertsState.message}
    </div>
  );
};

export default Alerts;
