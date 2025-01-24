import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
    try {
        // Ambil file dari request body
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        // Buat path untuk menyimpan file
        const fileData = await file.arrayBuffer();
        const fileName = file.name;
        const filePath = path.join(process.cwd(), "public/images", fileName);

        // Pastikan folder "public/images" ada
        await fs.mkdir(path.dirname(filePath), { recursive: true });

        // Tulis file ke folder "public/images"
        await fs.writeFile(filePath, Buffer.from(fileData));

        return NextResponse.json({ message: "File uploaded successfully", filePath: `/images/${fileName}` });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "File upload failed" }, { status: 500 });
    }
}
