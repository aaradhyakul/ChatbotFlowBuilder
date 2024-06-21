import React, { createContext, useState } from "react";

export const AlertsContext = createContext(null);

const AlertsContextProvider = ({ children }) => {
  const [alertsState, setAlertsState] = useState({
    color: "",
    duration: 0,
    message: "",
  });
  return (
    <AlertsContext.Provider value={{ alertsState, setAlertsState }}>
      {children}
    </AlertsContext.Provider>
  );
};

export default AlertsContextProvider;
