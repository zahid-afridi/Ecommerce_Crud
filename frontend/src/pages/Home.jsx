import React, { useState } from 'react';
import Card from '../components/Card';
import Edit from '../components/Edit';

export default function Home() {
    const [itemId,setItemId]=useState()
    const [products, setProducts] = useState([
        {
          title: "Life Hack",
          desc: "How to park your car at your garage?",
          imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
          id: 1
        },
        {
            title: "Life Hack",
            desc: "How to park your car at your garage?",

          imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
          id: 2
        },
        {
            title: "Life Hack",
            desc: "How to park your car at your garage?",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            id: 1
          },
          {
              title: "Life Hack",
              desc: "How to park your car at your garage?",
  
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            id: 2
          }
        
      ]);
      const HandleEdit=()=>{
        document.getElementById('my_modal_4').showModal()
      }
  return (
    <>
    <Edit item={itemId} />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Card Collection</h1>
          <p className="text-gray-600">Explore the different options below</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Rendering multiple cards */}
         
         
          {
            products.map((item)=>{
                return(
                    <Card item={item} HandleEdit={()=>HandleEdit(setItemId(item))}/>
                )
            })
          }
         
        </div>
      </div>
    </>
  );
}
