import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Edit from './Edit';

export default function Card({item}) {
  const handleEdit = () => {
  
    document.getElementById('my_modal_4').showModal();
  };

  const closeModal = () => {
    document.getElementById('my_modal_4').close();
  };

 
  return (
    <>
      <Edit item={item} closeModal={closeModal} />
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <figure>
          <img
            className="w-full h-48 object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="car"
          />
        </figure>
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-4">{item.desc}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="btn btn-outline btn-sm flex items-center space-x-1 text-sm" onClick={handleEdit}>
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
