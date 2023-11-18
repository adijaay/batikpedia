import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Auth";
import { useNavigate } from "react-router-dom";

export default function Login(){
    //ini manggil variabel data isLoggedIn sama setIsLoggedIn pake useContext yang buat ngecek udah login apa belum dari AuthContext 
    //sama setIsLoggedIn buat ngeset isLoggedIn kalo login bener jadi true
    const {setIsLoggedIn, isLoggedIn} = useContext(AuthContext);
    //ini bikin data baru namanya correctAuth jadi ini buat ngecek username sama password, kalo salah bakal nampilin error
    const [correctAuth, setCorrectAuth] = useState(true);
    //ini bikin data baru namanya username buat tempat nyimpen masukan user di form username
    const [username, setUsername] = useState("");
    //ini bikin data baru namanya password buat tempat nyimpen masukan user di form password
    const [password, setPassword] = useState("");
    //ini menginisiasi navigasi pake useNavigate biar bisa pindah pindah halaman
    const navigate = useNavigate();

    /*
    Ini bikin function baru namanya handleSubmit buat ditaruh di form misal udah disubmit.
    Jadi ini ngecek misal usernamenya udah admin dan passwordnya juga admin berarti isLoggedIn dibikin true pake setIsLoggedIn
    lalu ini nyimpen data true ke local storage atau di device masing masing kalo user itu udah login jadi websitenya bisa dibuka buka
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "admin"){
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigate("/");
        }
        else {
            setCorrectAuth(false)
            setIsLoggedIn(false)
        }
    }


    //ini ngecek kalo misal user udah login maka gabisa lagi buka halaman login.
    if(isLoggedIn){
        navigate("/")
    }

    //ini return halaman yang bakal tampil ke website kalo user belum login
    return(
        <div>
            {!isLoggedIn ?
            <>
                <div class="flex flex-col items-center justify-center px-6 py-8">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                        BatikPedia    
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            {/*nah ini buat nampilin error tadi.. jadi kalo username, password salah ditampilin wrong username or password*/}
                            {!correctAuth && <p class="text-red-500">Wrong username or password</p>}
                            {/*
                            nah ini formnya
                            jadi disini pake onSubmit
                            Ketika pas masuk masukin username sama password dienter atau diklik loginnya bakal jalan fungsi handleSubmit di atas.
                            */}
                            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                                    {/*
                                    nah ini inputnya
                                    tiap ngerubah username itu bakal ngerubah isi data variabel username buat dibaca di fungsi handleSubmit
                                    */}
                                    <input onChange={(e) => setUsername(e.target.value)} type="username" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required={true}/>
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    {/*
                                    nah ini input passwordnya
                                    tiap ngerubah password itu bakal ngerubah isi data variabel password buat dibaca di fungsi handleSubmit
                                    */}
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}/>
                                </div>
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
            : null}
        </div>
    )
}