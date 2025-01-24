"use client";

export default function AdditemPage(){

   return(
    <>
    <div className="text-center pb-4 font-extrabold text-2xl">TAMBAH BARANG</div>
       <div>
       <input type="text" placeholder="Nama Barang" className="input input-bordered w-full max-w-xs" 
       
       />

       <input type="text" placeholder="Deskripsi" className="input input-bordered w-full max-w-xs" 
       
       />

       <input type="text" placeholder="harga" className="input input-bordered w-full max-w-xs" 
       
       />

       <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
       
       />

       <input type="text" placeholder="link_product" className="input input-bordered w-full max-w-xs" 
       
       />
        </div> 
    </>
   );
}