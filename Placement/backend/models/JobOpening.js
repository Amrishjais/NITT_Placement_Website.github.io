import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobOpeningSchema = new Schema({
    nameOftheCompany: { type: String, required: true },
    typeOfJobOpening: { type: String, required: true },
    jobDesignation: { type: String, required: true },
    tentativeJobLocation: { type: String, required: true },
    jobDescription: { type: String, required: true },
    bTechIT: { type: Boolean, required: true, default: false },
    bTechECE: { type: Boolean, required: true, default: false },
    mTechIT: { type: Boolean, required: true, default: false },
    mTechECE: { type: Boolean, required: true, default: false },
    bTechCTC: { type: String, required: true },
    mTechCTC: { type: String, required: true },
    relocationBenefits: { type: String, default: 'NA' },
    cgpa: { type: Number, required: true, default: 0 },
    onlineTechnicalTest: { type: Boolean, required: true, default: false },
    groupDiscussion: { type: Boolean, required: true, default: false },
    technicalInterviews: { type: Boolean, required: true, default: false },
    hrInterviews: { type: Boolean, required: true, default: false },
    verifiedByAdmin: { type: Boolean, default: false },
    formDeadline: { type: Date, required: true, default: Date.now() },
  }, {
    timestamps: true
  });

export default mongoose.model('JobOpening', jobOpeningSchema);
