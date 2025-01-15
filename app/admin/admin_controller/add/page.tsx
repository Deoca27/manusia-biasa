"use client";

import { checkData, SaveData } from "@/app/models/admin";
import Link from "next/link";
import { useState } from "react";

export default function AddPage() {
    const [showPassword, setShowPassword] = useState(false);

    //buat hook (use state)
    const [getUsername, setUsername] = useState("");
    const [getPassword, setPassword] = useState("");

    //buat hook (usestate)
    //untuk respon hasil fungsi "checkData"
    const [getValue, setValue] = useState({});

    //buat fungsi untuk respon fungsi "checkData"
    const getCheckData = async (username: string) => {
        setValue(await checkData(username))
    }

    //simpan data
    const setSaveData = async() => {
        (getUsername == "" || getPassword == "")
        ? alert("Lengkapi seluruh data")
        : (Object.values(getValue).length == 0)
            ? [await SaveData(getUsername, getPassword),
                alert("Berhasil tambah data"),
                location.reload()
            ]
            : alert ("NPM Sudah ada")
    };

    return (
        <>
         <div className="">TAMBAH ADMIN</div>
            <div className="grid grid-cols-10 gap-4 mt-16">
                <label className="input input-bordered flex items-center col-start-4 col-span-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder=" Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                            getCheckData(e.target.value);
                        }} />
                </label>

                <label className="input input-bordered flex items-center col-start-4 col-span-4 relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="grow"
                        placeholder=" Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button
                        type="button"
                        className="absolute right-2 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4">
                                <path d="M13.359 11.238 15 13l-1 1-2.25-2.25c-1.04.5-2.233.75-3.75.75-3.25 0-6-2-7.5-5 1.16-2.5 3-4.25 5-5L2 2l1-1 2.45 2.45A8.17 8.17 0 0 1 8 3c3.25 0 6 2 7.5 5a9.56 9.56 0 0 1-2.141 3.238ZM3.516 6.043c-.626.734-1.161 1.607-1.516 2.457 1.32 2.547 3.537 4.5 6 4.5.817 0 1.602-.138 2.344-.406l-1.48-1.48a2.5 2.5 0 0 1-3.222-3.222L3.516 6.043Zm4.48.863L6.9 5.81A2.5 2.5 0 0 1 9.19 8.1L7.996 6.906Z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4">
                                <path d="M8 3c-3.25 0-6 2-7.5 5 1.5 3 4.25 5 7.5 5s6-2 7.5-5c-1.5-3-4.25-5-7.5-5Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                            </svg>
                        )}
                    </button>
                </label>
                
                    <button className="btn col-end-7" onClick={setSaveData}>Simpan</button>
                    <Link href={"/admin/admin_controller"} className="btn btn-neutral">Batal</Link>
                
            </div>
        </>
    );
}
