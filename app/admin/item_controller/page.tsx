"use client";

import { getData, setUpdateStatus } from "@/app/models/barang";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

//buat fungsi untuk dialog hapus
async function setDelete(nama_barang: string, link_product: string) {
  // alert("Hapus Data");
  if (confirm(`apakah barang ${nama_barang} Ingin Dihapus`) == true) {
    await setUpdateStatus(link_product)
    alert(`barang ${nama_barang} Berhasil Dihapus`);
    // reload otomatis
    location.reload();
  }
}

export default function BarangPage() {
  const [getValue, setValue] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); // State untuk pencarian
  const [filteredData, setFilteredData] = useState({});

  async function fetchData() {
    const data = await getData();
    setValue(data);
    setFilteredData(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    // Filter data berdasarkan searchTerm
    const filtered = Object.fromEntries(
      Object.entries(getValue).filter(([key, value]: [string, any]) =>
        value.nama_barang.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchTerm, getValue]); // Update ketika searchTerm atau data berubah


  return (
    <>
      {/* judul tabel */}
      <div className="text-center pb-4 font-extrabold text-2xl">TABEL BARANG</div>

      {/* searching dan tombol tambah */}
      <div className="grid grid-cols-10 gap-4 pb-2">
        <div className=" col-start-1 col-end-4"><input type="text" placeholder="Search" className="input input-bordered w-full "
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
        />
        </div>
        <Link href={"/admin/item_controller/add"} className="btn col-end-12">
          <FontAwesomeIcon icon={faPlus} />
          Tambah
        </Link>
      </div>

      {/* header tabel */}
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

        {/* isi tabel */}
        <tbody>
        {Object.values(filteredData).map((data: any, index: number) => (
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
                    <li><Link href={`/admin/item_controller/edit/${btoa(data.link_product)}`}><FontAwesomeIcon icon={faPenToSquare} />Edit</Link></li>
                    <li><Link href={"/admin/item_controller"} onClick={() => { setDelete(data.nama_barang, data.link_product) }}><FontAwesomeIcon icon={faTrash} />Hapus</Link></li>
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
