import OrderModel from "../Models/OrderModel.js";

import nodemailer from "nodemailer"

export const create=async(req,res)=>{
    try {
        console.log("haiii");  
       let newOrder=OrderModel(req.body)
       const Orders=await newOrder.save()
       var Transport=nodemailer.createTransport({
        service:"Gmail",
        auth:{
          user:"vorpstechnologies@gmail.com",
          pass:"vkqdlnzbtdbmeawa"
        }
      })
      var mailOptions;
      let sender="PossIndia"
      mailOptions={
          from:sender,
          to:"vorpstechnologies@gmail.com",

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


export const edit=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}


export const all=async(req,res)=>{
    try {
        const {userId}=req.body
      const orderlist =await OrderModel.find({userId:userId})
      res.status(200).json({orderlist})
      } catch (error) {
        res.status(500).json(error)
      }
}