"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../models/barang";
import Image from "next/image";

export default function ProductPage() {
  //buat hook dengan "use  state"
  const [getValue, setValue] = useState<any[]>([]);

  // buat fungsi untuk panggil "getData"
  async function fetchData() {
    const data = await getData();
    setValue(data);
  }

  // hook dengan "use effect"
  useEffect(() => {
    // panggil fungsi "getData"
    fetchData();
  }, []);

  return (
    <div>
      <title>Product</title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* menampilkan data barang */}
        {getValue.map((data: any, index: number) => (
          <div key={index}>
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200">
              <Image
              src="/images/foto.png" 
              alt={data.nama_barang}
              width={500} 
              height={300}
              priority
              />
            </div>
            <div className="p-3 text-center">
              {/* Nama Barang */}
              <h2 className="text-lg font-semibold text-gray-800">
                {data.nama_barang}
              </h2>
              {/* Deskripsi */}
              <p>
                {data.deskripsi}
              </p>
              {/* Harga */}
              <p>
                Rp {data.harga.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
