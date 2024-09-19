import mongoose from "mongoose";

const connectDB = async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URL);
     console.log("connection successfull");
   } catch (error) {
    console.log("connection error");
    
   }
}

export default connectDB;