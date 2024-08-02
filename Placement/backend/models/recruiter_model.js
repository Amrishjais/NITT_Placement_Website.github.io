import mongoose from "mongoose";
const Schema=mongoose.Schema;

const recruiterSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    nameOftheCompany: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    modeOfRecruitment: {
        type: String,
        required: true,
    },
    verifiedByAdmin: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

export default mongoose.model("Recruiter",recruiterSchema);
