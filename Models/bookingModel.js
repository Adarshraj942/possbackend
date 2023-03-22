import mongoose from "mongoose";
const BookingSchema=mongoose.Schema({
    username:{
        type:String
    },
    time:{
        type:String
    },
    date:{
        type:String
    },
    email:{
        type:String
    }
})

const BookingModel=mongoose.model("Admin",BookingSchema)

export default BookingModel