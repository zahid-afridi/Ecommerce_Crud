import React from 'react';
import img from '../assets/img.png'
import Edit from './Edit';
import AddProductModal from './AddProductModal';
export default function Navbar() {
    const hanldeAdd=()=>{
        // alert('hello')
    document.getElementById('addProductModal').showModal();

    }
    const closeModal = () => {
        document.getElementById('addProductModal').close();
      };
  return (
   <>
   <AddProductModal closeModal={closeModal}/>
    <div className="navbar bg-base-100 px-4 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">StockNest</a>
      </div>
      <div className="flex-none gap-4">
  
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src={img}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[1]">
            <li onClick={hanldeAdd}>
              <a className="justify-between">
                Add Product
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div></>
  );
}
