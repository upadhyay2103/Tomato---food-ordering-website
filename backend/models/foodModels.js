import mongoose from "mongoose";

const foodSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
});

// neeche or laga hai taaki baar baar model nhi bane agar ek baar bn chuka hai to phle check kar le nhi to naya model banaye kyuki model sirf ek bar hi bn skta hai
const foodModel=mongoose.model.food || mongoose.model("food",foodSchema);

export default foodModel;

