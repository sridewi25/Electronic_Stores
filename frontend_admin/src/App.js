import React, { useEffect, useState } from "react";
import './App.css'
import PageAfterLogin from './Pages/PageAfterLogin';
import PageBeforeLogin from './Pages/PageBeforeLogin';

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
          <PageAfterLogin loginStatus={loginStatus}loginCbHandler={loginCbHandler}></PageAfterLogin>
        ) : (
          <PageBeforeLogin loginStatus={loginStatus} loginCbHandler={loginCbHandler}></PageBeforeLogin>
        )}
      </>
  );
}

export default App;
