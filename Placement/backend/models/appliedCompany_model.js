// models/appliedCompany_model.js
import mongoose from 'mongoose';

const appliedCompanySchema = new mongoose.Schema({
  studentRollNo: { type: String, required: true },
  companyName: { type: String, required: true },
  
  // status: { type: String, enum: ['Applied', 'Selected', 'Rejected'], default: 'Applied' },
  // googleMeetLink: { type: String },
  // feedback: { type: String },
});

const AppliedCompany = mongoose.model('AppliedCompany', appliedCompanySchema);
export default AppliedCompany;
