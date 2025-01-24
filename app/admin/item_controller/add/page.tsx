"use client";

import { checkData, SaveData } from "@/app/models/barang";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function AdditemPage() {
    const [getImage, setImage] = useState(""); // untuk path gambar
    const [getNamaBarang, setNamaBarang] = useState("");
    const [getDeskripsi, setDeskripsi] = useState("");
    const [getHarga, setHarga] = useState("");
    const [getKategori, setKategori] = useState("");
    const [getLinkProduc, setLinkProduc] = useState("");
    const [getValue, setValue] = useState({});

    // Fungsi untuk cek apakah link produk sudah ada
    const getCheckData = async (link_product: string) => {
        setValue(await checkData(link_product));
    };

    // Fungsi untuk upload gambar
    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "images");

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Gagal mengupload gambar");

            const data = await response.json();
            setImage(data.filePath);
            alert("Gambar berhasil diupload");
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat upload gambar");
        }
    };

    // Konfigurasi dropzone
    const { getRootProps, getInputProps } = useDropzone({
        accept: { "image/*": [] },
        multiple: false,
        onDrop: (acceptedFiles) => {
            acceptedFiles.length > 0 && uploadImage(acceptedFiles[0]);
        },
    });

    // Fungsi untuk menyimpan data
    const setSaveData = async () => {
        !getImage || !getNamaBarang || !getDeskripsi || !getHarga || !getKategori || !getLinkProduc
            ? alert("Lengkapi seluruh data")
            : isNaN(parseFloat(getHarga))
                ? alert("Harga harus berupa angka yang valid")
                : Object.values(getValue).length > 0
                    ? alert("Link sudah ada")
                    : (await SaveData(
                        getImage,
                        getNamaBarang,
                        getDeskripsi,
                        parseFloat(getHarga),
                        getKategori,
                        getLinkProduc
                    ),
                        alert("Berhasil tambah data"),
                        location.reload());
    };

    return (
        <>
            <div className="text-center pb-4 font-extrabold text-2xl">TAMBAH BARANG</div>
            <div className="grid grid-cols-10 gap-4 mt-16">
                <div
                    {...getRootProps()}
                    className="dropzone border-dashed border-2 border-gray-400 flex col-start-4 col-span-4 justify-center items-center p-4"
                >
                    <input {...getInputProps()} />
                    <p>Drag & drop gambar di sini, atau klik untuk memilih gambar</p>
                </div>

                {/* buat gambar priview */}
                {getImage ? (
                    <div className="flex col-start-4 col-span-4 justify-center mt-4">
                        <Image
                            src={getImage}
                            alt="Preview Gambar"
                            width={128}
                            height={128}
                            className="object-cover rounded"
                        />
                    </div>
                ) : null}

                {/* nama barang */}
                <input
                    type="text"
                    placeholder="Nama Barang"
                    className="input input-bordered flex col-start-4 col-span-4"
                    onChange={(e) => setNamaBarang(e.target.value)}
                />

                {/* deskripsi */}
                <input
                    type="text"
                    placeholder="Deskripsi"
                    className="input input-bordered flex col-start-4 col-span-4"
                    onChange={(e) => setDeskripsi(e.target.value)}
                />

                {/* harga */}
                <input
                    type="text"
                    placeholder="Harga"
                    className="input input-bordered flex col-start-4 col-span-4"
                    onChange={(e) => setHarga(e.target.value)}
                />

                {/* kategori */}
                <select
                    defaultValue={""}
                    className="select select-success flex col-start-4 col-span-4"
                    onChange={(e) => setKategori(e.target.value)}
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

                {/* Link produk */}
                <input
                    type="text"
                    placeholder="Link Produk"
                    className="input input-bordered flex col-start-4 col-span-4"
                    onChange={(e) => {
                        setLinkProduc(e.target.value);
                        getCheckData(e.target.value);
                    }}
                />

                {/* tombol */}
                <button className="btn col-end-7" onClick={setSaveData}>
                    Simpan
                </button>
                <Link href={"/admin/item_controller"} className="btn btn-neutral">
                    Batal
                </Link>
            </div>
        </>
    );
}
