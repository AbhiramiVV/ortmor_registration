import mongoose from "mongoose"
function dbConnect(){
    mongoose.connect("mongodb://localhost:27017/ortmor").then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log("Database error:\n" +err);
    })
}

export default dbConnect;