import express from 'express'
import { addProducts, Delete, GetNotes, UpdateNotes } from '../controllers/Products.js'

const ProductRoutes=express.Router()

ProductRoutes.post('/create/:userId',addProducts)
ProductRoutes.put('/update/:id',UpdateNotes)
ProductRoutes.delete('/delete/:id',Delete)
ProductRoutes.get('/getProducts/:userId',GetNotes)

export default ProductRoutes