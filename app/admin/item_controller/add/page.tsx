"use client";

import Link from "next/link";

export default function AdditemPage() {

    return (
        <>
            <div className="text-center pb-4 font-extrabold text-2xl">TAMBAH BARANG</div>
            <div className="grid grid-cols-10 gap-4 mt-16">
                <input type="text" placeholder="Nama Barang" className="input input-bordered flex col-start-4 col-span-4"

                />

                <input type="text" placeholder="Deskripsi" className="input input-bordered flex col-start-4 col-span-4"

                />

                <input type="text" placeholder="harga" className="input input-bordered flex col-start-4 col-span-4"

                />

                <select className="select select-bordered flex col-start-4 col-span-4">
                    <option value={""} disabled selected >Pilih kategori Elektronik</option>
                    <option value={"Handphone"}>Handphone</option>
                    <option value={"Komputer"}>Komputer</option>
                    <option value={"Laptop"}>Laptop</option>
                    <option value={"TV"}>TV</option>
                    <option value={"Accesoris"}>Accesoris</option>
                    <option value={"Console"}>Console</option>
                </select>

                <input type="text" placeholder="link_product" className="input input-bordered flex col-start-4 col-span-4"

                />

                <button className="btn col-end-7">Simpan</button>
                <Link href={"/admin/item_controller"} className="btn btn-neutral">Batal</Link>
            </div>
        </>
    );
}