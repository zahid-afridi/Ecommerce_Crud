import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Edit from "../components/Edit";
import Navbar from "../components/Navbar";
import axios from "axios";
import Product from "./Product";
import { useSelector } from "react-redux";
import AddProductModal from "../components/AddProductModal";
import { useNavigate } from "react-router-dom";
import Delete from "../components/Delete";
import toast from "react-hot-toast";

export default function Home() {
  const navigate = useNavigate(); // Use useNavigate outside handleSubmit
  const [deleteId,setDeletedId]=useState('')
const [show,setShow]=useState(false)
  const [itemId, setItemId] = useState();
  const [products, setProducts] = useState([]);
  const [staterefersh,setStaterefersh]=useState(false)
  const {Auth}=useSelector((state)=>state.auth)
  console.log(Auth)

  useEffect(()=>{
   if (!Auth) {
    navigate('/login')
   }
  },[])
  useEffect(() => {
    if (Auth) {
      GetProducts();
      
    }
  }, [staterefersh]);

  const GetProducts = async () => {
    try {
      const resposne = await axios.get(
        `http://localhost:5000/product/getProducts/${Auth._id}`
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
  // console.log('updatefullitem',itemId)
  const CloseAddproductModal = () => {
    document.getElementById('addProductModal').close();
  };

  const handleDelete=async(id)=>{
    setDeletedId(id)
    setShow(true)
    
 
  }
  const handleApiDelte=async()=>{
    try {
      
        
      const response= await axios.delete(`http://localhost:5000/product/delete/${deleteId}`)
       
    
      const data=response.data
      console.log('delete',data)
      if (response.status==200) {
        toast.success(data.message, {
          style: {
            zIndex: 999,
          },
        });
        setShow(false)
 

        setStaterefersh((prev) => !prev)
      }
      console.log(data)
    
  } catch (error) {
    console.log(error)

  }
  }
  
  return (
    <>
      <Edit item={itemId} closeModal={closeModal} setStaterefersh={setStaterefersh} />
      <AddProductModal closeModal={CloseAddproductModal} setStaterefersh={setStaterefersh} />
     
     <Delete show={show} setShow={setShow} handleDlete={handleApiDelte}/>
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
          {products.length === 0 ? (
            <h1 className="text-center font-bold text-xl text-gray-800">No Product Found</h1>
          ) : (
            ""
          )}
          {products.map((item) => {
            return (
              <Card
                key={item.id} // Ensure to add a unique key for each card
                item={item}
                HandleEdit={() => HandleEdit(setItemId(item))}
                handleDelete={()=>handleDelete(item._id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
  
}
