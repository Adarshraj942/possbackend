import mongoose from "mongoose";

const OrderSchema=mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        productId:{
            type:String,
            
        },
        deliveryAddress:{
            type:Object
        },
        price:{
            type:Number
        },
        paymentMod:{
            type:String
        },
        paymentStatus:{
            type:String
        },
        deliveryStatus:{
            type:String
        },
        OrderStatus:{
            type:String
        }

    },
    {timestamps:true}
)

const OrderModel=mongoose.model("Orders",OrderSchema);

export default OrderModel;