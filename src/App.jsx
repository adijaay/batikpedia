
import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Navbar from './Component/Navbar';
import Detail from './Pages/Detail';
import { BatikData } from './Provider/Batik';
import { AuthContext } from './Provider/Auth';


//Ini function utama App yang bakal ditarik ke Main. Liat main.jsx disitu ada alur utama bisa pake provider autentikasi.
function App() {
  //Batik setBatik ini untuk nyimpen hasil panggilan jsonmu yang isinya data batik
  const [Batik, setBatik] = useState([]);
  //variabel isLoggedIn ini dipanggil dari provider AuthContext dari file Auth.jsx di folder Provider
  const {isLoggedIn} = useContext(AuthContext);

  /* 
  ini useEffect pengaplikasian Hooks.
  Jadi pake UseEffect biar saat pertama layar direfresh itu useEffectnya ngestart.
  Nah, disini pake fetch buat ngambil data batiknya terus disimpen ke variabel Batik tadi pake setBatik.
  */
  useEffect(() => {
    fetch("../batik.json")
      .then((res) => res.json())
      .then((json) => {
        setBatik(json);
      })
  }, [])

  /*
  Nah ini dikasih UseEffect lagi, fungsinya sama buat ngestart saat awal aplikasi ngerun. tapi ini beda.
  kan disitu ada [Batik], nah itu buat ngerun useEffect ini kalo misal data yang ada di variabel Batik itu berubah.
  nah dalem useEffect ini dikasih console.log(Batik) supaya tampil di log console yang ada di inspect element.
  ini dibuat biar variabel Batik itu bener bener udah berubah karena useState kadang updatenya delay 1 refresh.
  */
  useEffect(() => {
    console.log(Batik);
  }, [Batik])

  /*
  Nah ini sama kayak fungsi di atas tapi ini ngecek isLoggedIn alias autentikasinya.
  */
  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn])

  //Ini dia yang nampilin ke layar itu pake return ( ... )
  return (
    /*
    ini dia Provider buat melempar lempar data dari variabel Batik ke seluruh komponen yang ada di dalemnya.
    Dalemnya ini semua komponen yang bakal tampil ada.. dari Home, About, Login, Detail. jadi semuanya dapet data Batik ini.
    nanti di tiap file manggil data Batiknya pake useContext.
    BatikData ini pake dari file batik.jsx di folder provider. Dia tuh tempat untuk data Batik ini.
    */
    <BatikData.Provider value={{Batik}}>
      <div style={{
        width: '100%',
        marginBottom: 70
      }}>
      
      {/* 
      Ini ngambil Navbar yang ada di Component/Navbar.jsx biar ditampilin disini
      */}
      <Navbar/>

      </div>

      {/*
      Ini tuh path yang harus ada pas bikin router path.
      dari Browser Router terus Routes terus Router.
      Di Route diatur nama path sama element yang bakal dipanggil.
      home dikasih path "/" jadi itu halaman yang pasti dibuka saat ga nambahin apa apa kayak localhost:3000/profile.. nah ini yang muncul profile
      kalo cuman localhost:3000/ ya yang muncul Home.
    */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </BatikData.Provider>
  );
}

export default App;
