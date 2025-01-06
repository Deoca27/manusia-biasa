"use client";

export default function AdminPage() {
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
          <tr className="border border-slate-300 ">
            <td className="p-2">
              a
            </td>
            <td className="p-2">
              b
            </td>
            <td className="p-2">
              c
            </td>
            <td className="p-2 ">
              c
            </td>
          </tr>
        </tbody>
      </table>

    </>
  );
}
