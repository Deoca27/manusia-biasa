/*
  Warnings:

  - Added the required column `link_product` to the `tb_barang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_barang` ADD COLUMN `link_product` VARCHAR(100) NOT NULL;
