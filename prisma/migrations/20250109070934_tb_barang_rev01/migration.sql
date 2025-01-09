-- CreateTable
CREATE TABLE `tb_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_barang` VARCHAR(50) NOT NULL,
    `deskripsi` VARCHAR(100) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `kategori` VARCHAR(20) NOT NULL,
    `status` ENUM('Y', 'N') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
