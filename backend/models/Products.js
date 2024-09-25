import mongoose from "mongoose";
const ProductSchema= new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    ImageUrl:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    
},{
    timestamps:true
})

const ProductModal=mongoose.model("Products",ProductSchema)

export default ProductModal