"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getData } from "./models/barang";

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
            <div className="mb-6 text-right">
              <input
                type="text"
                placeholder="Search products..."
                className="input input-bordered w-full max-w-md pl-10"
              />
            </div>
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
            <div key={index}>
              <div>
                <Image
                  src="/images/foto.png"
                  alt={data.nama_barang}
                  width={500}
                  height={300}
                />
              </div>
              <div>
                {data.nama_barang} - {data.deskripsi} - {data.harga}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
