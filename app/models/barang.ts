"use server";

import { PrismaClient } from "@prisma/client";

//buat variabel "prisma"
const prisma = new PrismaClient();

// buat fungsi untuk ambil data barang
export async function getData(category: string | null = null) {
  // buat variable "barang"
  const barang = await prisma.tb_barang.findMany({
    where: {
      status: "Y",
      ...(category && { kategori: category }),
    },
  });

  return barang;
}

// function setDelete
export const setUpdateStatus = async (link_product: string) => {
  await prisma.tb_barang.updateMany({
    where: {
      link_product: link_product,
    },
    data: {
      status: 'N',
    },
  })
}

// buat fungsi check data 
export const checkData = async (link_product: string) => {
  const check = await prisma.tb_barang.findMany({
    select: {
      id: true,
    },
    where: {
      link_product: link_product,

    },
  });
  return check;
};

// buat fungsi untuk simpan data 
export const SaveData = async (image_url: string, nama_barang: string, deskripsi: string, harga: number, kategori: string, link_product: string) => {
  await prisma.tb_barang.create({
    data: {
      image_url: image_url,
      nama_barang: nama_barang,
      deskripsi: deskripsi,
      harga: parseFloat(harga.toString()),
      kategori: kategori,
      link_product: link_product,
      status: 'Y',
    },
  })
}

// buat fungsi untuk tampil detail data
export const detailData = async (link_product: string) => {
  // buat variabel
  const detail = await prisma.tb_barang.findMany({
    where: {
      link_product: link_product,
    },
  });

  return detail;
}

export const setUpdateData = async (link_product: string, nama_barang: string, deskripsi: string, harga: number, kategori: string, link_product_old: string) => {
  // buat variabel
  // untuk ubah status data (Y >> T)
  await prisma.tb_barang.updateMany({
    where: {
      link_product: link_product_old,
    },
    data: {
      link_product: link_product,
      nama_barang: nama_barang,
      harga: parseFloat(harga.toString()),
      deskripsi: deskripsi,
      kategori: kategori,
    },
  });

}