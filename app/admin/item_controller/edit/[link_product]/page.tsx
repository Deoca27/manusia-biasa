"use client";

import { useState } from "react";

export default function EditPage({ params }: { params: { link_product: string } }) {
    const [getValue, setValue] = useState({});


    return (
        <>
            <div className="text-center font-extrabold text-2xl">EDIT DATA BARANG</div>
            
                <div className="grid grid-cols-10 gap-4 mt-16">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs " />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />


                </div>
            
        </>
    );

}