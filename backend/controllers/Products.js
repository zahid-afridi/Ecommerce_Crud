import ProductModal from "../models/Products.js";


const addProducts=async(req,res)=>{
    try {
        const UserId=req.params.userId
        const {title,desc,ImageUrl}=req.body;
        if(!title){
            return res.status(303).json({success:false,message:"Title are required"})
        }
        const CreateProduct= new ProductModal({
            title,userId:UserId,desc,ImageUrl
        })
        await CreateProduct.save()
        res.status(200).json({success:true,message:"Product Added Successfully",Products:CreateProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Internal Server Error",})

    }
}
const UpdateNotes=async(req,res)=>{
    try {
        const userId=req.userId
        const NotesId=req.params.id
        const {title}=req.body
        const FindeNotes= await NotesModel.findById({_id:NotesId})
        if (!FindeNotes) {
        res.status(404).json({success:false,message:"Notes not Found",})
            
        }
      const NotesUserId=FindeNotes.userId.toString()
      
      if (userId.toString() !== NotesUserId) {
       return res.status(404).json({success:false,message:"Unauthorized user",})
        
      }
      console.log("NotesUserId",NotesUserId)
 
        const UpdateNotes= await NotesModel.findByIdAndUpdate(
            {_id:NotesId},
            {title},{new:true}
        )
        console.log(FindeNotes)
        res.status(200).json({success:true,message:"Notes Updates Successfully",UpdateNotes})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Internal Server Error",})
    }
}
const Delete=async(req,res)=>{
    try {
        const userId=req.userId
        const NotesId=req.params.id
        const FindeNotes=await NotesModel.findById(NotesId)

        if (userId.toString() !== FindeNotes.userId.toString()) {
       return res.status(404).json({success:false,message:"Unauthorized user",})
            
        }
        const Delete=await NotesModel.findByIdAndDelete(NotesId)


              res.status(200).json({success:true,message:"Notes Deleted Successfully",Delete})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Internal Server Error",})
    }
}
const GetNotes=async(req,res)=>{
    try {
        const UserId=req.params.userId
   

        
        const Products=await ProductModal.find({userId:UserId})


        res.status(200).json({success:true,Products})
        console.log(error)
        res.status(500).json({success:false,message:"Internal Server Error",})
    } catch (error) {
        
    }
}
export {addProducts,UpdateNotes,Delete,GetNotes}