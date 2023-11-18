import React, { createContext, useEffect, useState } from 'react';

//Ini bikin context alias tempat buat nyimpen data Autentikasi atau login yang dipanggil ke main.JSX dan seluruh halaman yang butuh data login.
export const AuthContext = createContext();

/*
  Disini bikin fungsi AuthProvider yang dalemnya tuh bisa butuh children bisa engga.
  jadi children konsepnya kayak di main.JSX itu.. itu childrennya <App/>
  jadi di dalem AuthProvider bisa nyimpen komponen.
  nah si komponen bisa make data si AuthProvider ini.
*/
export const AuthProvider = ({ children }) => {

  /*
  Ini function buat manggil data login dari local storage alias dari device masing masing yg ngerun webnya.
  dia konsepnya kalo udah login pertama ya dia bakal nyimpen true baik web dibuka maupun ditutup. jadi nanti kalo buka lagi ya masih dianggep udah login kecuali udah logout.
  */
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
      // Check if the user is logged in from local storage
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
    });

    /*
    Nah ini fungsi yang bakal dipanggil kalo misal login bener atau udah logout.
    jadi ini bakal ngeset variabel isLoggedIn itu jadi false kalo logout dan true kalo login bener.
    */
    useEffect(() => {
      // Update local storage when isLoggedIn value changes
      localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    /*
    Nah ini return bakalan kepanggil di App.JSX
    kan itu manggilnya <AuthProvider><App/></AuthProvider>, nah itu yang bakal masuk yang ini.
    jadi dia nyimpen children <App/>
    nah seluruh variabel yang ada di AuthProvider ini bakal bisa dipake ke seluruh komponen di App.JSX
    */
    return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    );
  };