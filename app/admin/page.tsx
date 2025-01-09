"use client";

import { useEffect, useState } from "react";
import { getData } from "../models/admin";

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

      <table className='w-full shadow-md '>
        {/* judul tabel admin */}
        <thead >
          <tr className="border border-slate-300 ">
            <th className='w-5% text-start p-2'>No</th>
            <th className='w-1/2 text-start p-2'>Nama</th>
            <th className='w-40% text-start p-2'>password</th>
            <th className='w-5% text-center'>a</th>
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
              <td className="p-2 ">
              </td>
            </tr>
             ))}
          </tbody>
       

      </table>

    </>
  );
}
