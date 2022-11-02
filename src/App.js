import NotificatonCount from "./components/NotificatonCount";
import NotificationBox from "./components/NotificationBox";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AppContext = React.createContext();

function App() {
  const nCountRef = useRef(0);
  const countSetRef = useRef();
  const [allRead, setAllRead] = useState(false);

  useEffect(() => {
    countSetRef.current(nCountRef.current);
  }, []);

  const getCountSetter = (f) => {
    countSetRef.current = f;
  };

  return (
    <AppContext.Provider
      value={{ nCountRef, countSetRef, allRead, setAllRead }}
    >
      <div className="px-4 mt-6 md:pt-2 md:pb-4 mx-auto md:max-w-lg md:shadow-lg rounded-md">
        <NotificatonCount getCountSetter={getCountSetter}></NotificatonCount>
        <NotificationBox></NotificationBox>
      </div>
    </AppContext.Provider>
  );
}

export default App;
