import React, { useState, useEffect } from "react";
import axios from "axios";
// import Image from "next/image";
// import ImageDisplay from "@/components/ImageDisplay";
// Keren bang
const AdminDashboard = () => {
  // Fetch data from API and store it in a state variable
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/tampil");
        console.log(response.data);
        setData(response.data.values);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const CombinedImage = ({ imageData }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
      const loadImage = () => {
        const image = new Image();
        image.src = `data:image/jpeg;base64,${imageData}`;
        setImageSrc(image);
      };

      loadImage();
    }, [imageData]);

    if (!imageSrc) {
      return null;
    }

    return (
      <div>
        <img src={imageSrc.src} alt="Combined Image" width={100} height={50} />
      </div>
    );
  };
  return (
    <div>
      <h1>Dashboard Admin</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((menu) => (
            <tr key={menu.id_menu}>
              <td>{menu.id_menu}</td>
              <td>{menu.nama}</td>
              <td>{menu.harga}</td>
              <td>{menu.stok}</td>
              <td>
                <CombinedImage
                  imageData={Buffer.from(menu.gambar.data).toString("base64")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
