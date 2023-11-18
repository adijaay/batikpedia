
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

function App() {
  const [Batik, setBatik] = useState([]);
  const {isLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    fetch("../batik.json")
      .then((res) => res.json())
      .then((json) => {
        setBatik(json);
      })
  }, [])

  useEffect(() => {
    console.log(Batik);
  }, [Batik])

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn])

  return (
    <BatikData.Provider value={{Batik}}>
      <div style={{
        width: '100%',
        marginBottom: 70
      }}>
      <Navbar/>

      </div>
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
