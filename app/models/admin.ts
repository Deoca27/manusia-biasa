"use server";

import { PrismaClient } from "@prisma/client";

//buat variabel "prisma"
const prisma = new PrismaClient ();

//fungsi ambil data
export async function getData() {
    const admin = await prisma.tb_admin.findMany({
      where: {
        status: "Y",
      },
    })
    return admin;
  }

// function setDelete
export const setUpdateStatus = async(username: string) => {
  await prisma.tb_admin.updateMany({
    where: {
      username: username,
    },
    data: {
      status: 'N',
    },
  })
}

// buat fungsi check data mahasiswa (npm)
export const checkData = async(username: string) => {
  const check = await prisma.tb_admin.findMany({
    where: {
      username: username,
      
    },
  });
  return check;
};

// buat fungsi untuk simpan data mahasiswa
export const SaveData = async (username: string, password: string) => {
  await prisma.tb_admin.create({
      data: {
        username: username,
        password: password,
          status: 'Y',
      },
  })
}