import mongoose from "mongoose";
const Schema=mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    collegeEmail: {
        type: String,
        required: true,
        unique: true
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    cgpa: {
        type: Number,
        required: true,
    },
    tenthPercentage: {
        type: Number,
        required: true,
    },
    twelfthPercentage: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    programme: {
        type: String,
        required: true
    },
    lookingFor: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


export default mongoose.model("Student",studentSchema);
