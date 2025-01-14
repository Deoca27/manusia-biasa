import React, { useEffect, useState } from "react";
import { getData } from "../models/barang";

export default function ProductPage() {
  const [getValue, setValue] = useState<any[]>([]);

  async function fetchData() {
    const data = await getData();
    setValue(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <title>Product</title>
    </div>
  )
}
