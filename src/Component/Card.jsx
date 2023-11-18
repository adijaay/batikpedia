//Ini fungsi utama komponen Card yang bakal dipanggil jadi Element di Home.JSX biar ga bikin sepanjang ini terus terusan
// ini pakenya props, jadi props ini nyimpen data
// nah datanya bisa dipake disini
// terus datanya tinggal dipanggil deh satu satu pake .
// misal mau nyari nama ya tinggal dipanggil pake props.nama dan seterusnya
// di Home inisialisasinya dia ngisi pake {...item} nah itu sama aja kayak item.nama tapi disini pake props karena konsep OOP yang bisa digunakan berulang ulang di halaman yang berbeda
// props bisa diisi segala macem data
export default function Card(props) {
    //nah disini ada href={"/detail/" + props.id}
    // ini buat navigasi ke halaman detail dengan props.id
    // dimana props.id adalah id dari tiap data batik itu
    return (
        <a href={"/detail/" + props.id} className="max-w-xl h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-slate-700 hover:bg-white ease-in duration-300 cursor-pointer">
            <div class="md:flex ">
                <div class="md:shrink-0">
                <img class="w-full object-cover md:w-48 md:h-48" src={props.gambar} alt="Modern building architecture"/>
                </div>
                <div class="w-full p-8 flex flex-col justify-center ">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.nama}</div>
                    <h2 class="block mt-1 text-lg leading-tight font-medium text-white">{props.asal}</h2>
                    <p class="mt-2 text-gray-800 font-medium">Pelajari lebih lanjut</p>
                </div>
            </div>
        </a>
    )
}