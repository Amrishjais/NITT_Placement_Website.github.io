import mongoose from "mongoose";
const Schema=mongoose.Schema;

   
const stuCompaniesAppliedSchema = new Schema({
   rollNumber: {
        type: String,
        required:true,
        duplicate:true,
    },
    
    company:{
        type:String,
        required:true,
    }
}, {
    timestamps:true,
})


export default mongoose.model("StuCompanies",stuCompaniesAppliedSchema);
// email: {
//         type: String,
//         required:true,
        
//     },
//     collegeEmail: {
//         type: String,
//         required:true,
        
//     },
//     rollNumber: {
//         type: String,
//         required:true,
//     },
//     phone: {
//         type: String,
//         required:true,
 
//     },
//     isAdmin: {
//         type: Boolean,
//         required:true,
//         default: false
//     },
//     cgpa: {
//         type: Number,
//         required:true,
//     },
//     tenthPercentage: {
//         type: Number,
//         required:true,
//     },
//     twelfthPercentage: {
//         type: Number,
//         required:true,
//     },
//     department: {
//         type: String,
//         required:true,
//     },
//     programme: {
//         type: String,
//         required:true,
//     },