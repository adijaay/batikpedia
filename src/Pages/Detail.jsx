import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BatikData } from "../Provider/Batik";
import { AuthContext } from "../Provider/Auth";

//Ini fungsi utama Detail yang bakal dipanggil jadi Element di App.JSX di Route
export default function Detail() {
    //ini manggil data Batik dari BatikData. ini cara pemakaian Provider yang dibuat di App.JSX tadi
    const { Batik } = useContext(BatikData);
    //ini manggil variabel data isLoggedIn pake useContext yang buat ngecek udah login apa belum dari AuthContext
    const {isLoggedIn} = useContext(AuthContext);
    //ini manggil hasil dari parameter route.
    //kan itu pake route "/detail/:id" nah itu :id nya dipake buat jadi data ini
    //id nanti dipake buat nyari satu data yang sesuai sama id nya jadi yang tampil nanti cuman satu data batik sesuai id
    const { id } = useParams();
    //ini bikin variabel data baru namanya filteredData buat nyimpen hasil nyari satu data batik tadi
    const [filteredData, setFilteredData] = useState([]);
    //ini menginisiasi navigasi pake useNavigate biar bisa pindah pindah halaman
    const navigate = useNavigate();
  
    //Ini useEffect biar jalan pas halaman Detail diload.
    // Jadi ini pake namanya fungsi filter. nah itu buat nyari data yang sesuai id
    // Jadi Batik ini dipanggil dari BatikData terus dijadiin item
    // nah per item ini dicek idnya sama gak kayak yang kita masukin di route
    // kalo sama bakal dimasukin ke filteredData pake setFilteredData.
    useEffect(() => {
      const filtered = Batik.filter(item => item.id == id);
      filtered.map((item) => {
        setFilteredData(item);
      })
    }, [Batik, id]);

    /*
    Ini useEffect biar jalan pas halaman Home diload.
    fungsi dalemnya buat ngasih perintah dimana kalo user belum login maka dikembalikan ke halaman login.
    */
    useEffect(() => {
        if(!isLoggedIn){
            navigate("/login")
        }
    }, [isLoggedIn])
  
    //ini buat manggil hasil data yang udah kecari satu data batik tadi
    useEffect(() => {
      console.log(filteredData);
    }, [filteredData]);

    //ini return halaman yang bakal tampil ke website saat route "/detail" atau di Detail
    return(
        <>
        {/* 
        Nah ini makenya filteredData
        jadi di filteredData isinya sama aja kayak di JSON, jadi tinggal manggil satu satu pake .
        kalo nyari nama ya tinggal filteredData.nama dan seterusnya
        */}
        <div className="flex flex-col gap-4">
            <img class="object-cover h-96 rounded-xl" style={{width: '80rem'}} src={filteredData.gambar} alt="Modern building architecture"/>
            <h1 className="uppercase tracking-wide text-5xl text-white font-bold text-left">{filteredData.nama}</h1>
            <h1 className="uppercase tracking-wide text-2xl text-gray-400 font-regular text-left">{filteredData.asal}</h1>
            <div className="border border-gray-300 rounded-xl p-4 text-justify">
                <p>{filteredData.makna}</p>
            </div>
            {/*
            Ini button buat mbalik ke route "/" atau Home pakenya href="/"
            href buat nyimpen link/route yang mau dituju kalo buttonnya dipencet
            */}
            <a href="/" className="border border-gray-300 rounded-xl p-4 w-24 hover:bg-gray-300 cursor-pointer hover:text-black">
                <p className="text-center">Kembali</p>
            </a>
        </div>
        </>
    )
}