"use client";

import { useEffect, useState } from "react";
import { getData, setUpdateStatus } from "../../models/admin";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

// buat fungsi untuk dialog hapus
async function setDelete(username: string) {
  if (confirm(`Apakah Admin ${username} ingin dihapus?`) == true) {
    await setUpdateStatus(username);
    alert(`Admin ${username} berhasil dihapus.`);
    location.reload();
  }
}

export default function AdminPage() {
  const [getValue, setValue] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); // State untuk pencarian
  const [filteredData, setFilteredData] = useState({});

  async function fetchData() {
    const data = await getData();
    setValue(data);
    setFilteredData(data); // Inisialisasi data terfilter sama dengan data asli
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter data berdasarkan searchTerm
    const filtered = Object.fromEntries(
      Object.entries(getValue).filter(([key, value]: [string, any]) =>
        value.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchTerm, getValue]); // Update ketika searchTerm atau data berubah

  return (
    <>
      {/* Judul tabel */}
      <div className="text-center pb-4 font-extrabold text-2xl">TABEL ADMIN</div>

      {/* Searching dan button tambah */}
      <div className="grid grid-cols-10 gap-4 pb-2">
        <div className="col-start-1 col-end-4">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full"
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
          />
        </div>

        <Link href={"/admin/admin_controller/add"} className="btn col-end-12">
          <FontAwesomeIcon icon={faPlus} /> Tambah
        </Link>
      </div>

      {/* Header */}
      <table className="w-full shadow-md pt-2 table-fixed">
        <thead>
          <tr className="border border-slate-300">
            <th className="w-5% text-start p-2">No</th>
            <th className="w-1/2 text-start p-2">Nama</th>
            <th className="w-35% text-start p-2">Password</th>
            <th className="w-10% text-center"></th>
          </tr>
        </thead>

        {/* Isi tabel */}
        <tbody>
          {Object.values(filteredData).map((data: any, index: number) => (
            <tr key={index} className="border border-slate-300">
              {/* Penomoran */}
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{data.username}</td>
              <td className="p-2">{data.password}</td>
              <td className="text-right pr-4 px-2">
                {/* Dropdown */}
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="btn m-1" title="Aksi">
                    ...
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <Link href={`/admin/admin_controller/edit/${btoa(data.username)}`}>
                        <FontAwesomeIcon icon={faPenToSquare} /> Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/admin/admin_controller"}
                        onClick={() => {
                          setDelete(data.username);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Hapus
                      </Link>
                    </li>
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
