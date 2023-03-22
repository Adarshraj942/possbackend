import BookingModel from "../Models/bookingModel.js"


export const add=async(req,res)=>{
    console.log("haiii");
    try {
        const {username,email,time,date}=req.body
        console.log(username,email,time,date);
        let newTicket=BookingModel(req.body)
              
        // const user= await PractiseModel.find({createrId:createrId})
          console.log("koiiii",newTicket);  
    
            const Ticket=await newTicket.save()
            
            res.status(200).json({Ticket})  
    } catch (error) {
        res.status(500).json(error)
    }
}