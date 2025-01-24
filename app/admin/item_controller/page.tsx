"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BarangPage() {
  const [getValue, setValue] = useState({});
  
    async function fetchData() {
      setValue(await getData());
    }
  
    useEffect(() => {
      fetchData();
    }, [])
  

  return (
    <>
      <div className="text-center pb-4 font-extrabold text-2xl">TABEL BARANG</div>
      <div className="grid grid-cols-10 gap-4 pb-2">
        <div className=" col-start-1 col-end-4"><input type="text" placeholder="Search" className="input input-bordered w-full "
          onChange={(e) => {
          }} />
        </div>
        <Link href={"/"} className="btn col-end-12">
          <FontAwesomeIcon icon={faPlus} />
          Tambah
        </Link>
      </div>

      <table className='w-full shadow-md pt-2'>
        <thead>
          <tr className="border border-slate-300 ">
            <th className="w-5% text-start p-2">No</th>
            <th className="w-15% text-start p-2">Gambar</th>
            <th className="w-15% text-start p-2">Nama Barang</th>
            <th className="w-25% text-start p-2">Deskripsi</th>
            <th className="w-10% text-start p-2">Kategori</th>
            <th className="w-15% text-start p-2">Harga</th>
            <th className="w-10% text-start p-2">Link Produk</th>
            <th className="w-5% text-center">Aksi</th>
          </tr>
        </thead>
          <tbody>
          {Object.values(getValue).map((data: any, index: number,) => (

          ))}
          </tbody>

      </table>
    </>
  );
}
