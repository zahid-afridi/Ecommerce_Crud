import mongoose from "mongoose";

const DbCon=async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/Crud2")
        console.log('Mongodb is connected')
        
    } catch (error) {
        console.log("Error in mongodb connection",error)
    }
}
export default DbCon