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
    </div>
  )
}
