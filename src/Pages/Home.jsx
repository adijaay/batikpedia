import { useContext, useEffect } from "react"
import { AuthContext } from "../Provider/Auth";
import { useNavigate } from "react-router-dom";
import Card from "../Component/Card";
import { BatikData } from "../Provider/Batik";

//Ini fungsi utama Home yang bakal dipanggil jadi Element di App.JSX di Route
export default function Home() {
    //ini manggil variabel data isLoggedIn pake useContext yang buat ngecek udah login apa belum dari AuthContext
    const {isLoggedIn}= useContext(AuthContext);
    //ini manggil data Batik dari BatikData. ini cara pemakaian Provider yang dibuat di App.JSX tadi
    const {Batik} = useContext(BatikData);
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

    //ini return halaman yang bakal tampil ke website saat route "/" atau di Home
    return (
        <div>
            {/* 
            isLoggedIn ? ini digunain biar kalo misal user belum login maka ditampilin <h1>please Log In</h1>
            Kalo udah login nampilin 
            <div className="flex flex-wrap place-content-center gap-10">
                {Batik.map((item) => (
                    <Card key={item.id} {...item}/>
                ))}
                </div>
            */}
            {isLoggedIn ? 
            <>
                <div className="flex flex-wrap place-content-center gap-10">
                    {/*
                        Nah ini pake map.
                        Jadi kan Batik itu bentuknya array, nah ini pake map biar kepilih satu satu
                        hasil dati pemilahan satu satu itu dinamain item.
                        disini dipanggil <Card> itu fungsinya manggil Card yang ada di folder Component -> Card.JSX. disitu dia udah dpakein props.
                        nah props ini diisi sama {...item}.
                        yang nantinya item ini berisi id, nama, asal, makna dari masing masing batik
                    */}
                {Batik.map((item) => (
                    <Card key={item.id} {...item}/>
                ))}
                </div>
            </>
            : <h1>please Log In</h1>}
            
        </div>
    )
}