"use client";

import { checkData, detailData, setUpdateData } from "@/app/models/barang";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function EditPage({ params }: { params: { link_product: string } }) {
    const [getValue, setValue] = useState({});
    const [getNamaBarang, setNamaBarang] = useState("");
    const [getDeskripsi, setDeskripsi] = useState("");
    const [getHarga, setHarga] = useState("");
    const [getKategori, setKategori] = useState("");
    const [getLinkProduc, setLinkProduc] = useState("");
    const [getCheck, setCheck] = useState({});

    const refNamaBarang = useRef<HTMLInputElement>(null);
    const refDeskripsi = useRef<HTMLInputElement>(null);
    const refHarga = useRef<HTMLInputElement>(null);
    const refKategori = useRef<HTMLSelectElement>(null);
    const refLinkProduc = useRef<HTMLInputElement>(null);

    async function fetchData() {
        // Fetch initial data
        setValue(await detailData(atob(decodeURIComponent(params.link_product))));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getCheckData = async (link_product: string) => {
        setCheck(await checkData(link_product));
    };

    const editData = async () => {
        let nama_barang, deskripsi, harga, kategori, link_product;
    
        nama_barang = getNamaBarang === "" ? refNamaBarang.current?.value : getNamaBarang;
        deskripsi = getDeskripsi === "" ? refDeskripsi.current?.value : getDeskripsi;
        harga = getHarga === "" ? refHarga.current?.value : getHarga;
        getKategori == "" ? (kategori = refKategori.current?.value) : (kategori = getKategori);
        link_product = getLinkProduc === "" ? refLinkProduc.current?.value : getLinkProduc;
    
        const parsedHarga = parseFloat(harga?.toString() || "");
    
        nama_barang == "" || deskripsi == "" || isNaN(parsedHarga) || kategori == "" || link_product == ""
            ? alert("Seluruh Data Harus Diisi!")
            : [
                Object.values(getCheck)?.length === 0
                    ? [
                        await setUpdateData(
                            String(link_product),
                            String(nama_barang),
                            String(deskripsi),
                            parsedHarga, // Pass harga as a number
                            String(kategori),
                            atob(decodeURIComponent(params.link_product))
                        ),
                        alert("Data Berhasil Diubah"),
                        (location.href = `/admin/item_controller/edit/` + btoa(String(link_product))),
                    ]
                    : alert("Link produk Sudah Pernah Tersimpan!"),
            ];
    };
    

    return (
        <>
            <div className="text-center font-extrabold text-2xl">EDIT DATA BARANG</div>
            {Object.values(getValue)?.map((data: any, index: number) => (
                <div className="grid grid-cols-10 gap-4 mt-16" key={index}>
                    {/* Nama Barang */}
                    <input
                        type="text"
                        placeholder="Nama Barang"
                        className="input input-bordered col-start-4 col-span-4"
                        defaultValue={data.nama_barang}
                        onChange={(e) => setNamaBarang(e.target.value)}
                        ref={refNamaBarang}
                    />

                    {/* Deskripsi */}
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="input input-bordered col-start-4 col-span-4"
                        defaultValue={data.deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        ref={refDeskripsi}
                    />

                    {/* Harga */}
                    <input
                        type="text"
                        placeholder="Harga"
                        className="input input-bordered col-start-4 col-span-4"
                        defaultValue={data.harga}
                        onChange={(e) => setHarga(e.target.value)}
                        ref={refHarga}
                    />

                    {/* Kategori */}
                    <select
                        defaultValue={data.kategori}
                        className="select select-bordered col-start-4 col-span-4"
                        onChange={(e) => {
                            setKategori(e.target.value);
                          }}
                          ref={refKategori}
                    >
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

                    {/* Link Product */}
                    <input
                        type="text"
                        placeholder="Link Product"
                        className="input input-bordered col-start-4 col-span-4"
                        defaultValue={data.link_product}
                        onChange={(e) => {
                            setLinkProduc(e.target.value);
                            getCheckData(e.target.value);
                        }}
                        ref={refLinkProduc}
                    />

                    {/* Tombol */}
                    <button className="btn col-end-7" onClick={editData}>
                        Simpan
                    </button>
                    <Link href={"/admin/item_controller"} className="btn btn-neutral">
                        Batal
                    </Link>
                </div>
            ))}
        </>
    );
}
