"use client";

import { getData } from "@/app/models/barang";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

      <table className='w-full shadow-md pt-2 table-fixed'>
        <thead>
          <tr className="border border-slate-300 ">
            <th className="w-5% text-start p-2">No</th>
            <th className="w-15% text-start p-2">Gambar</th>
            <th className="w-15% text-start p-2">Nama Barang</th>
            <th className="w-25% text-start p-2">Deskripsi</th>
            <th className="w-10% text-start p-2">Kategori</th>
            <th className="w-10% text-start p-2">Harga</th>
            <th className="w-15% text-start p-2">Link Produk</th>
            <th className="w-5% text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number,) => (
            <tr key={index} className="border border-slate-300 ">
              <td className="p-2">{index + 1}</td>
              <td className="p-2"><Image src={data.image_url} alt={data.nama_barang} width={100} height={100} priority /></td>
              <td className="p-2">{data.nama_barang}</td>
              <td className="p-2">{data.deskripsi}</td>
              <td className="p-2">{data.kategori}</td>
              <td className="p-2">{data.harga}</td>
              <td className="truncate max-w-xs p-2">{data.link_product}</td>
              <td>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="btn m-1" title="Aksi">...</div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link href={"/"}><FontAwesomeIcon icon={faPenToSquare} />Edit</Link></li>
                    <li><Link href={"/"}><FontAwesomeIcon icon={faTrash} />Hapus</Link></li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </>
  );
}
