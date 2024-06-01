import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://aryan_upadhyay:2103@cluster0.gj3ijen.mongodb.net/food-del').then(()=>console.log('DB Connected'));
}