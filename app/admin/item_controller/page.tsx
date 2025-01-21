"use client";

import Link from "next/link";

export default function BarangPage() {
  return (
    <>
      <div className="text-center pb-4 font-extrabold text-2xl">TABEL BARANG</div>
      <div className="grid grid-cols-10 gap-4">
        <div className=" col-start-1 col-end-4"><input type="text" placeholder="Search" className="input input-bordered w-full "
          onChange={(e) => {
          }} />
        </div>
        <Link href={"/"} className="btn col-end-12">
          
          Tambah
        </Link>
      </div>
    </>
  );
}
