import React, { useEffect, useState } from "react";
import './App.css';
import MainPageAfterLogin from './pages/MainPageAfterLogin';
import MainPageBeforeLogin from './pages/MainPageBeforeLogin';


function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);
  return (
    <>
    
      { loginStatus ? (
        <MainPageAfterLogin loginStatus={loginStatus}loginCbHandler={loginCbHandler}></MainPageAfterLogin>
      ) : (
        <MainPageBeforeLogin loginStatus={loginStatus} loginCbHandler={loginCbHandler}></MainPageBeforeLogin>
      )}
    </>
  );
}

export default App;
