"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../models/barang";

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
            <div className="bg-blue-700">
              test
              {/* {data.nama_barang} - {data.deskripsi} - {data.harga} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
