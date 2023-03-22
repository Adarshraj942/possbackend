import OrderModel from "../Models/OrderModel.js";



export const create=async(req,res)=>{
    try {
        console.log("haiii");  
       let newOrder=OrderModel(req.body)
       const Orders=await newOrder.save()
        
       res.status(200).json({Orders}) 
    } catch (error) {
        
    }
}


export const edit=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}


export const cancel=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}