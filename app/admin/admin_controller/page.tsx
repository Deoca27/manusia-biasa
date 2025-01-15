"use client";

import { useEffect, useState } from "react";
import { getData, setUpdateStatus } from "../../models/admin";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

//buat fungsi untuk dialog hapus
async function setDelete(username: string) {
  // alert("Hapus Data");
  if (confirm(`apakah Admin ${username} Ingin Dihapus`) == true) {
    await setUpdateStatus(username)
    alert(`Admin ${username} Berhasil Dihapus`);
    // reload otomatis
    location.reload();
  }
}


export default function AdminPage() {
  const [getValue, setValue] = useState({});

  async function fetchData() {
    setValue(await getData());
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    <div className="text-center pb-4 font-extrabold text-2xl">TABEL ADMIN</div>
      <div className="grid grid-cols-10 gap-4 items-center pb-2">
        <div className=" col-start-1 col-end-4"><input type="text" placeholder="Search" className="input input-bordered w-full "
          onChange={(e) => {
          }} /></div>

        <Link href={"/admin/admin_controller/add"} className="btn col-end-12"> 
        <FontAwesomeIcon icon={faPlus}/>
        Tambah 
        </Link>

      </div>

      <table className='w-full shadow-md pt-2'>
        {/* judul tabel admin */}
        <thead >
          <tr className="border border-slate-300 ">
            <th className='w-5% text-start p-2'>No</th>
            <th className='w-1/2 text-start p-2'>Nama</th>
            <th className='w-40% text-start p-2'>password</th>
            <th className='w-5% text-center'></th>
          </tr>
        </thead>


        <tbody>
          {Object.values(getValue).map((data: any, index: number,) => (
            <tr key={index} className="border border-slate-300 ">
              {/* penomoran */}
              <td className="p-2">
                {index + 1}
              </td>
              <td className="p-2">
                {data.username}
              </td>
              <td className="p-2">
                {data.password}
              </td>
              <td className="text-right pr-4 px-2">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="btn m-1" title="Aksi">...</div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link href={`/admin/admin_controller/edit/${btoa(data.username)}`}><FontAwesomeIcon icon={faPenToSquare} />Edit</Link></li>
                    <li><Link href={"/"} onClick={() => { setDelete(data.username) }}><FontAwesomeIcon icon={faTrash} />Hapus</Link></li>
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
