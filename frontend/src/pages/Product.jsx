import React from 'react'
import Card from '../components/Card'

export default function Product() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Card Collection</h1>
          <p className="text-gray-600">Explore the different options below</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Rendering multiple cards */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    
    </>
  )
}
