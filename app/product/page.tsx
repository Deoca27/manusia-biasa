"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../models/barang";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  //buat hook dengan "use  state"
  const [getValue, setValue] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // buat fungsi untuk panggil "getData" dengan filter kategori
  async function fetchData(category: string | null = null) {
    const data = await getData(category);
    setValue(data);
  }

  // hook dengan "use effect"
  useEffect(() => {
    // panggil fungsi "getData"
    fetchData();
  }, []);

  // Fungsi untuk mengubah kategori
  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const category = event.target.value;
    setSelectedCategory(category);
    fetchData(category); // Ambil data berdasarkan kategori yang dipilih
  }

  // Fungsi untuk mengubah nilai search
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  // Filter data barang berdasarkan search term
  const filteredData = getValue.filter((data) =>
    data.nama_barang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <title>Product</title>
      <div className="flex justify-center pt-5">
        {/* Dropdown Kategori */}
        <select 
        className="select select-bordered w-full max-w-xs mr-3"
        value={selectedCategory || ""}
        onChange={handleCategoryChange}
        >
          <option value={""} disabled>
            Kategori
          </option>
          <option value={"Handphone"}>Handphone</option>
          <option value={"Komputer"}>Komputer</option>
          <option value={"Laptop"}>Laptop</option>
          <option value={"TV"}>TV</option>
          <option value={"Accesoris"}>Accesoris</option>
          <option value={"Console"}>Console</option>
        </select>
        {/* Search */}
        <input 
        type="text" 
        placeholder="Search" 
        className="input input-bordered w-full max-w-xs ml-3" 
        value={searchTerm}
        onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* menampilkan data barang */}
        {filteredData.map((data: any, index: number) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full aspect-square bg-gray-100 border-b border-gray-200 overflow-hidden">
              <Image
                src={data.image_url}
                alt={data.nama_barang}
                width={500}
                height={300}
                priority
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3 text-center">
              {/* Nama Barang */}
              <h2 className="text-lg font-semibold text-gray-800">
                {data.nama_barang}
              </h2>
              {/* Deskripsi */}
              <p className="text-gray-600 text-sm">{data.deskripsi}</p>
              {/* Harga */}
              <p className="text-base font-medium text-blue-500">
                Rp {data.harga.toLocaleString("id-ID")}
              </p>
              {/* Tombol Kunjungi */}
              <Link
                href={data.link_product || "#"}
                target="_blank"
                className="bg-blue-600 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-700"
              >
                Kunjungi
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
