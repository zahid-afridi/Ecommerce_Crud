import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Edit from './Edit';

export default function Card({item,HandleEdit}) {
    // const HandleEdit=()=>{
    //     // document.getElementById('my_modal_4').showModal()
    // }
  return (
    <>
    
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <figure>
          <img
            className="w-full h-48 object-cover"
            src={item.ImageUrl}
            alt="car"
          />
        </figure>
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-4">{item.desc}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="btn btn-outline btn-sm flex items-center space-x-1 text-sm" onClick={HandleEdit}>
                <FaEdit /> <span>Edit</span>
              </button>
              <button className="btn btn-outline btn-error btn-sm flex items-center space-x-1 text-sm">
                <FaTrash /> <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
