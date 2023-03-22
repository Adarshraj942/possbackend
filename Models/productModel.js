import mongoose from "mongoose";

const ProductSchema=mongoose.Schema(
    {
        name:{
            type:String,
           
        },
        typeCategory:{
            type:String
        },
        brandCategory:{
           type:String  
        },
        price:{
            type:Number,
       
        },
        maxPrice:{
            type:Number
        },
        desc:{
            type:String,
           
        },
        
        quantity:{
            type:Number,
           

        },
        rating:{
            type:Number,
            default:0
        },
       
        sku:{
            type:String
        }
        ,
        

        varientType:{
          type:String
        },

        petCategory:{
           type:Array
        },

        
        
        image1:String,
        image2:String,
        image3:String,
        image4:String,
       


  
        
      

    },
    {timestamps:true}
)

const productModel=mongoose.model("Products",ProductSchema);

export default productModel;