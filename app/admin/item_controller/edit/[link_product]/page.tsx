"use client";

import Link from "next/link";
import { useState } from "react";

export default function EditPage({ params }: { params: { link_product: string } }) {
    const [getValue, setValue] = useState({});


    return (
        <>
            <div className="text-center font-extrabold text-2xl">EDIT DATA BARANG</div>

            <div className="grid grid-cols-10 gap-4 mt-16">
                <input type="text" placeholder="Nama Barang" className="input input-bordered col-start-4 col-span-4" />
                <input type="text" placeholder="Deskripsi" className="input input-bordered col-start-4 col-span-4" />
                <input type="text" placeholder="Harga" className="input input-bordered col-start-4 col-span-4" />
                <select defaultValue={""} className="select select-bordered col-start-4 col-span-4">
                    <option value={""} disabled>
                        Pilih kategori Elektronik
                    </option>
                    <option value={"Handphone"}>Handphone</option>
                    <option value={"Komputer"}>Komputer</option>
                    <option value={"Laptop"}>Laptop</option>
                    <option value={"TV"}>TV</option>
                    <option value={"Accesoris"}>Accesoris</option>
                    <option value={"Console"}>Console</option>
                </select>
                <input type="text" placeholder="link product" className="input input-bordered col-start-4 col-span-4" />

                {/* tombol */}
                <button className="btn col-end-7">
                    Simpan
                </button>
                <Link href={"/admin/item_controller"} className="btn btn-neutral">
                    Batal
                </Link>
            </div>

        </>
    );

}