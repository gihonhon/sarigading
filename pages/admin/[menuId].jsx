import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const DeleteMenuId = () => {
  const router = useRouter()
  const menuId = router.query.menuId
  const [idMenu, setIdMenu] = useState(menuId)
  const [data, setData] = useState([])
  const [namaMenu, setNamaMenu] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [gambar, setGambar] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data
    const formData = new FormData();
    formData.append("id_menu", menuId);
    formData.append("nama_menu", namaMenu);
    formData.append("harga", harga);
    formData.append("stok", stok);
    formData.append("gambar", gambar);

    try {
      const response = await axios.put(
        "http://localhost:8000/edit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Reset the form fields after successful submission
      setNamaMenu("");
      setHarga("");
      setStok("");
      setGambar(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl py-5">Form Tambah Menu</h1>
      <form
        onSubmit={handleSubmit}
        className="text-lg flex flex-col gap-7 justify-center px-10"
      >
        <div>
          <label>Nama Menu:</label>
          <input
            type="text"
            value={namaMenu}
            onChange={(e) => setNamaMenu(e.target.value)}
            className="mx-2 border-2 rounded-md border-black"
          />
        </div>
        <div>
          <label>Harga:</label>
          <input
            type="text"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="mx-2 border-2 rounded-md border-black"
          />
        </div>
        <div>
          <label>Stok:</label>
          <input
            type="text"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
            className="mx-2 border-2 rounded-md border-black"
          />
        </div>
        <div>
          <label>Gambar : </label>
          <input type="file" onChange={(e) => setGambar(e.target.files[0])} />
        </div>
        <button type="submit" className="bg-orange-400 p-[10px_16px] w-[120px] rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default DeleteMenuId