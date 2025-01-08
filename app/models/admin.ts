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