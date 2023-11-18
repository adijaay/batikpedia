import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './Provider/Auth.jsx'


//Nah ini sudah ada sejak awal projek dibuat. Jadi ini nanti yang bakal diproses sama projek buat ditampilin ke web.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
    Ini AuthProvider biar bisa dipanggil di App.jsx
    AuthProvider ini sendiri ada di folder Provider terus Auth.jsx
    disini dia nyimpen buat validasinya jadi nanti bisa dipanggil panggil sama page yang lain.
    Jadi konsepnya gini, AuthProvider kan mbungkus si <App/> ya.. nah itu semua komponen yang ada di App bakal bisa make data yang ada di AuthProvider. gitu deh konsep Provider.    
    */}
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
