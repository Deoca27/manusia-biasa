"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getData } from "./models/barang";
import Link from "next/link";

export default function RootPage() {
  // buat hook
  // hook dengan "use  state"
  const [getValue, setValue] = useState({});

  // buat fungsi untuk panggil "getData"
  async function fetchData() {
    setValue(await getData());
  }

  // hook dengan "use effect"
  useEffect(() => {
    // panggil fungsi "getData"
    fetchData();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white min-h-[600px] flex items-center">
        <div className="container mx-auto px-6 py-12 flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold mb-6">Electronic Hub</h1>
            <p className="text-gray-300 text-xl mb-8 max-w-xl">
              Website katalog elektronik ini menyediakan berbagai pilihan produk
              elektronik terkini dengan informasi lengkap, harga terbaik, dan
              fitur pencarian yang memudahkan Anda menemukan produk sesuai
              kebutuhan.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/foto.png"
              alt="MacBook Pro 14"
              width={800}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="py-16 px-6">
        <h2 className="text-5xl font-bold mb-12 text-center">Product</h2>
        <div className="grid grid-cols-4 gap-6">
          {/* tampilkan data barang */}
          {Object.values(getValue).map((data: any, index: number) => (
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
                />
              </div>
              <div className="p-3 text-center">
                {/* nama barang */}
                <h2 className="text-lg font-semibold text-gray-800">{data.nama_barang}</h2>
                {/* deskripsi */}
                <p className="text-gray-600 text-sm">{data.deskripsi}</p>
                {/* harga */}
                <p className="text-base font-medium text-blue-500">Rp {data.harga.toLocaleString("id-ID")}</p>
                {/* Tombol */}
                <Link 
                href={data.link_product || "#"}
                target="_blank"
                className="bg-blue-600 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-700"
                >Kunjungi</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
