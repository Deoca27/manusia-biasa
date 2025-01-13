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