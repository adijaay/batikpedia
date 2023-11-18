import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/Auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    //ini manggil variabel data isLoggedIn pake useContext yang buat ngecek udah login apa belum dari AuthContext
    const {isLoggedIn}= useContext(AuthContext);
    //ini menginisiasi navigasi pake useNavigate biar bisa pindah pindah halaman
    const navigate = useNavigate();
    
    /*
    Ini useEffect biar jalan pas halaman Home diload.
    fungsi dalemnya buat ngasih perintah dimana kalo user belum login maka dikembalikan ke halaman login.
    */
    useEffect(() => {
        if(!isLoggedIn){
            navigate("/login")
        }
    }, [isLoggedIn])

    //ini return halaman yang bakal tampil ke website saat route "/profile" atau di About
    return(
        <div className="flex flex-col gap-4">
            <h1 className="uppercase tracking-wide text-5xl text-white font-bold text-left">About</h1>
            <h1 className="uppercase tracking-wide text-2xl text-gray-400 font-regular text-left">BATIKPEDIA</h1>
            <div className="border border-gray-300 rounded-xl p-4 text-justify">
                <p>BATIKPEDIA ini dibuat oleh Kelompok 11 yang beranggotakan 4 anggota, yaitu 
                <span className="uppercase tracking-wide text-2xl text-blue-400 font-regular text-left"> ROY PUTRA RIONA NADHIIER, </span>
                <span className="uppercase tracking-wide text-2xl text-blue-400 font-regular text-left">AHMAD ALDANI HERLANGGA, </span>
                <span className="uppercase tracking-wide text-2xl text-blue-400 font-regular text-left">IMAM NURALIM, </span>
                <span className="uppercase tracking-wide text-2xl text-blue-400 font-regular text-left">DIEFA EDRA RIVANDI. </span>
                Aplikasi ini ditujukan sebagai tempat informasi batik di Indonesia yang dapat dibuka oleh khalayak umum, sehingga dapat mempermudah mempelajari informasi batik. 
                </p>
            </div>
        </div>
    )
}