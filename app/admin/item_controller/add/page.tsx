"use client";

import { checkData, SaveData } from "@/app/models/barang";
import Link from "next/link";
import { useState } from "react";

export default function AdditemPage() {
    // buat hook (useState)
    const [getImage, setImage] = useState("");
    const [getNamaBarang, setNamaBarang] = useState("");
    const [getDeskripsi, setDeskripsi] = useState("");
    const [getHarga, setHarga] = useState(""); // tetap string karena input dari form adalah string
    const [getKategori, setKategori] = useState("");
    const [getLinkProduc, setLinkProduc] = useState("");

    // buat hook (useState)
    // untuk respon hasil fungsi "checkData"
    const [getValue, setValue] = useState({});

    // buat fungsi untuk respon fungsi "checkData"
    const getCheckData = async (link_product: string) => {
        setValue(await checkData(link_product));
    };

    // simpan data
    const setSaveData = async () => {
        (getImage == "" || getNamaBarang == "" || getDeskripsi == "" || getHarga == "" || getKategori == "" || getLinkProduc == "")
            ? alert("Lengkapi seluruh data")
            : isNaN(parseFloat(getHarga)) // validasi jika harga bukan angka
                ? alert("Harga harus berupa angka yang valid")
                : (Object.values(getValue).length == 0)
                    ? [await SaveData(getImage, getNamaBarang, getDeskripsi, parseFloat(getHarga), getKategori, getLinkProduc), // konversi harga ke number
                    alert("Berhasil tambah data"),
                    location.reload()
                    ]
                    : alert("Link Sudah ada");
    };



    return (
        <>
            <div className="text-center pb-4 font-extrabold text-2xl">TAMBAH BARANG</div>
            <div className="grid grid-cols-10 gap-4 mt-16">
                <input
                    type="text"
                    placeholder="Nama Barang"
                    className="input input-bordered flex col-start-4 col-span-4"
                    onChange={(e) => {
                        setNamaBarang(e.target.value);
                    }}
                />

                <input
                    type="text"
                    placeholder="Deskripsi"
                    className="input input-bordered flex col-start-4 col-span-4"
                    onChange={(e) => {
                        setDeskripsi(e.target.value);
                    }}
                />

                <input
                    type="text"
                    placeholder="harga"
                    className="input input-bordered flex col-start-4 col-span-4"
                    onChange={(e) => {
                        setHarga(e.target.value);
                    }}
                />

                <select className="select select-bordered flex col-start-4 col-span-4"
                    onChange={(e) => {
                        setKategori(e.target.value);
                    }}
                >
                    <option value={""} disabled >Pilih kategori Elektronik</option>
                    <option value={"Handphone"}>Handphone</option>
                    <option value={"Komputer"}>Komputer</option>
                    <option value={"Laptop"}>Laptop</option>
                    <option value={"TV"}>TV</option>
                    <option value={"Accesoris"}>Accesoris</option>
                    <option value={"Console"}>Console</option>
                </select>

                <input
                    type="text"
                    placeholder="link_product"
                    className="input input-bordered flex col-start-4 col-span-4"
                    onChange={(e) => {
                        setLinkProduc(e.target.value);
                        getCheckData(e.target.value);
                    }}
                />

                <button className="btn col-end-7" onClick={setSaveData}>Simpan</button>
                <Link href={"/admin/item_controller"} className="btn btn-neutral">Batal</Link>
            </div>
        </>
    );
}