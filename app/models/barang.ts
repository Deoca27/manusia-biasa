"use server";

import { PrismaClient } from "@prisma/client";

//buat variabel "prisma"
const prisma = new PrismaClient ();

// buat fungsi untuk ambil data barang
export async function getData() {
  // buat variable "barang"
  const barang = await prisma.tb_barang.findMany({
    where: {
      status: "Y",
    },   
  });
}