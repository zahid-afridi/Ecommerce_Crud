import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Edit from "../components/Edit";
import Navbar from "../components/Navbar";
import axios from "axios";
import Product from "./Product";

export default function Home() {
  const [itemId, setItemId] = useState();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GetProducts();
  }, []);

  const GetProducts = async () => {
    try {
      const resposne = await axios.get(
        `http://localhost:5000/product/getProducts/66f29035636b395430cf355d`
      );
      const data = resposne.data;
      console.log(data);
      setProducts(data.Products);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleEdit = () => {
    document.getElementById("my_modal_4").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_4").close();
  };
  if (!Product) {
    return (
      <>
        <Navbar />

        <h1>No data Found</h1>
      </>
    );
  }
  return (
    <>
      <Edit item={itemId} closeModal={closeModal} />
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Our Card Collection
          </h1>
          <p className="text-gray-600">Explore the different options below</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Rendering multiple cards */}

          {products.map((item) => {
            return (
              <Card
                item={item}
                HandleEdit={() => HandleEdit(setItemId(item))}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
