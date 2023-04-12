import OrderModel from "../Models/OrderModel.js";
import UserModel from "../Models/userModel.js";
import nodemailer from "nodemailer"

export const create=async(req,res)=>{
    try {
        console.log("haiii");  
       let newOrder=OrderModel(req.body)

       const Orders=await newOrder.save()
       const {userId}=req.body
       const address={
        address1:req.body.deliveryAddress.address1,
        city:req.body.deliveryAddress.city,
        state:req.body.deliveryAddress.state,
        post:req.body.deliveryAddress.post
       }
       await UserModel.findByIdAndUpdate({_id:userId},{ $addToSet:{address:address}},{new:true})
       var Transport=nodemailer.createTransport({
        service:"Gmail",
        auth:{
          user:"possindia21@gmail.com",
          pass:"wykvjbreaetbjxvm"
        }
      })
      var mailOptions;
      let sender="PossIndia"
      mailOptions={
          from:sender,
          to:"possindia21@gmail.com",

          subject:`ORDER PLACED fROM ${Orders.deliveryAddress.firstName} ${Orders.deliveryAddress.lastName}`,
          text:`
          OrderId : ${Orders._id}\n

          UserId : ${Orders.userId}\n

          ProductId : ${Orders.productId}\n
          Postal code : ${Orders.deliveryAddress.post}\n
          State : ${Orders.deliveryAddress.state}\n
          City : ${Orders.deliveryAddress.city}\n
          Email : ${Orders.deliveryAddress.email}\n
          Mobile : ${Orders.deliveryAddress.mobile}\n
          Address : ${Orders.deliveryAddress.address1}\n

          Price : ${Orders.price}\n
          PaymentMod : ${Orders.paymentMod}


          
          `
         
      }
      Transport.sendMail(mailOptions,(err,response)=>{
        if(err){
          console.log(err);
        }else{
          console.log(response);
      }
      })
       res.status(200).json({Orders}) 
    } catch (error) {
        
    }
}


export const getOne=async(req,res)=>{
  try{
    const id =req.params.id
const data=await OrderModel.findOne({_id:id}) 
res.status(200).json(data)
} catch (error) {
 res.status(500).json(error)
}
}


export const all=async(req,res)=>{
    try {
        const {userId}=req.body
      const orderlist1 =await OrderModel.find({userId:userId})
      const orderlist=orderlist1.reverse()
      res.status(200).json({orderlist})
      } catch (error) {
        res.status(500).json(error)
      }
}