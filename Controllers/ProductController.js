import productModel from "../Models/productModel.js"
import nodemailer from "nodemailer"
export const addProduct=async(req,res)=>{
  console.log("haiii");
  try {
    const {name, price,desc,quantity}=req.body
    console.log(name, price,desc,quantity);
    let newProduct=productModel(req.body)
          
    // const user= await PractiseModel.find({createrId:createrId})
      console.log("koiiii",newProduct);  

        const Product=await newProduct.save()
        
        res.status(200).json({Product}) 
  } catch (error) {
    res.status(500).json(error)
  }
}


export const addBulkProduct=async(req,res)=>{
  console.log("haiii");
  console.log("kaiii",req.body);
  // const beta =await productModel.insertMany(req.body)
        
  //       res.status(200).json({beta}) 
  try {
    console.log("maiii");
    // const {data}=req.body
   const beta =await productModel.insertMany(req.body)
        
        res.status(200).json({beta}) 
  } catch (error) {
    res.status(500).json(error)
  }
}
export const editfield=async(req,res)=>{
  try {
     
     const data=await productModel.updateMany({typeCatagory:"food"},{typeCatagory:"FOOD" })

    
     res.status(200).json({data}) 
  } catch (error) {
    res.status(500).json(error)
  }
}
export const editProduct=async(req,res)=>{
    try {
        console.log("haiii");
       
        const data=req.body;  
        console.log(data);
        const id= data._id
       console.log(id);
    
    
        if(id ){
            try {
    
                
               const beta =await productModel.findByIdAndUpdate(id,data,{new:true})

               res.status(200).json({beta})
    
      
            } catch (error) {
                res.status(500).json(error) 
            }
        }else{
            res.status(403).json("Product not found")
        }
    } catch (error) {
      res.status(500).json(error)
    } 
}


export const allProducts=async(req,res)=>{

   
 
  
    try {
      console.log(req.body);
      const {typeCatagoryy,petCategoryy}=req.body

      const typeCatagoryy1=typeCatagoryy.toLowerCase()
      const typeCatagoryy2=typeCatagoryy1 + "s"
      const typeCatagoryy3=typeCatagoryy+"S"
      let typeCatagoryy4;
      if(typeCatagoryy=="MAT"){
        typeCatagoryy4="BEDS"
      }else{
        typeCatagoryy4=""
      }
      console.log(typeCatagoryy ,typeCatagoryy1, typeCatagoryy2,typeCatagoryy3,typeCatagoryy4);
       const data=await productModel.aggregate([ {$match:{ typeCatagory: typeCatagoryy,petCategory:petCategoryy}} ])
       const data1=await productModel.aggregate([ {$match:{ typeCatagory: typeCatagoryy1,petCategory:petCategoryy}} ])
       const data2=await productModel.aggregate([ {$match:{ typeCatagory: typeCatagoryy2,petCategory:petCategoryy}} ])
       const data3=await productModel.aggregate([ {$match:{ typeCatagory: typeCatagoryy3,petCategory:petCategoryy}} ])
       const dat4=await productModel.aggregate([ {$match:{ typeCatagory: typeCatagoryy4,petCategory:petCategoryy}} ])
      
      //  const zeta=data.filter((e)=>{
      //   console.log(e.typeCatagory);
      //    //return e.typeCatagory===typeCatagoryy 
         
      //  })

      console.log("heiii",data.length,data1.length,data2.length,data3.length,dat4.length);
      
  //  console.log(data);
  const array=data.concat(data1);
          
   const array2= array.concat(data2)
   const array3= array2.concat(data3)
     const array4= array3.concat(dat4)

             console.log(array4.length);
       res.status(200).json(array4)
    } catch (error) {
      res.status(500).json(error)
    }
} 


export const getProduct=async(req,res)=>{
    try {
        const productId=req.params.id
        const data=await productModel.findById(productId)
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(400).json("Product not found")
        }
 
    } catch (error) {
      res.status(500).json(error)
    } 
}

export const deleteProduct=async(req,res)=>{
    try {
        const productId=req.params.id
         const data=await productModel.deleteOne({productId})
    console.log(data,productId);
         res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
    }
}

export const addVarient=async(req,res)=>{
  console.log("varient");
  try {
   const {productId,type }=req.body
   
   console.log(type);
   if(type==="colorVariation"){
    console.log("heyy");
    const zeta={
        color:req.body.color,
        price:req.body.price
    }

    const bata = await productModel.findOneAndUpdate({_id:productId},{ $push:{colorVariation:zeta}},{new:true})
   if(bata){
    res.status(200).json(bata)
   }else{
    res.status(400).json("not updated")
   }
   } else  if(type==="sizeVariation"){
    console.log("heyy");
    const zeta={
        size:req.body.size,
        price:req.body.price
    }

    const bata = await productModel.findOneAndUpdate({_id:productId},{ $push:{sizeVariation:zeta}},{new:true})
   if(bata){
    res.status(200).json(bata)
   }else{
    res.status(400).json("not updated")
   }
   }
  
   
  
  } catch (error) {
    res.status(500).json(error)
  }
}


export const filtering = async (req,res)=>{
  try {

    console.log("haiiiii");
     const data=await productModel.find()
     const beta=data.reverse()
  
     res.status(200).json(beta)
  } catch (error) {
    res.status(500).json(error)
  }
  
}



export const filterByPetCategory=async(req,res)=>{
  try {
    const {petCategory}=req.body
    const data=await productModel.find({petCategory:petCategory})
    res.status(200).json(data.reverse())
  } catch (error) {
    res.status(500).json(error)
  }
}

export const filterByTypeCategory=async(req,res)=>{
  try {
    const {typeCatagory}=req.body
    const data=await productModel.find({typeCatagory:typeCatagory})
    res.status(200).json(data.reverse())
  } catch (error) {
    res.status(500).json(error)
  }
}


export const filterByBrandCategory=async(req,res)=>{
  try {
    const {brandCategory}=req.body
    const data=await productModel.find({brandCategory:brandCategory})
    res.status(200).json(data.reverse())
  } catch (error) {
    res.status(500).json(error)
  }
}

export const filterByPriceRange=async(req,res)=>{
  try {
    const {min,max}=req.body
    const data= await productModel.find({price: {$gt:min, $lt:max}})
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const filterByMinToMax=async(req,res)=>{
  try {
    const {minTomax}=req.body
     const data =await productModel.aggregate([
      { "$group": {
         "_id": null,
         "MaximumValue": { "$max": "$price" },
         "MinimumValue": { "$min": "$price" }
      }}
   ])

   console.log(data);

   if(minTomax){
    const beta=await productModel.find({price: {$gt:data.MinimumValue, $lt:data.MaximumValue}})
     res.status(200).json(beta)
   }else{
    const beta=await productModel.find({price: {$gt:data.MaximumValue, $lt:data.MinimumValue}})
    res.status(200).json(beta)
   }

  } catch (error) {
    res.status(500).json(error)
  }
}



export const search=async(req,res)=>{
  try {
    const {search}=req.body
    const pattern=`/${search}/`
    console.log(pattern);
    const data=await productModel.find({ "name" : { $regex: search, $options: 'i' } })
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}