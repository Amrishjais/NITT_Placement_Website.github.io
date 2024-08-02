import student_model from "../models/student_model.js";
import { hashPassword,comparePassword } from "../helpers/auth.js";
import recruiter_model from "../models/recruiter_model.js";
import messagessses from "../models/messages.js";
import JobOpening from "../models/JobOpening.js";
import AppliedCompany from "../models/appliedCompany_model.js";
import generateToken from "../utils/generateToken.js";
import StuCompanies from "../models/stuCompaniesApplied.js";
import { ChevronsLeftRight } from "lucide-react";


export const test=(req,res)=>{
    res.json("test is working")
};


export const registerUser=async (req,res)=>{
    try {
        const {
            name,
            email,
            collegeEmail,
            rollNumber,
            phone,
            password,
            cpassword,
            cgpa,
            tenthPercentage,
            twelfthPercentage,
            department,
            programme,
            lookingFor,
            dateOfBirth
        } = req.body
        if (!rollNumber){
            return res.json({
                error:"Rollno is required!"
            })
        }
        console.log(password);
        if (!password || password.length<6){
            return res.json({
                error:"Password of min 6 chars required"
            })
        }
        if (cpassword!==password){
            return res.json({
                error:"Passwords do not match"
            })
        }
        if (!email){
            return res.json({
                error:"Enter mail id"
            })
        }
        const exist=await student_model.findOne({email});
        if (exist){
            return res.json({
                error:"Email is taken already"
            })
        }
        const rollexist=await student_model.findOne({rollNumber});
        if (rollexist){
            return res.json({
                error:"Rollno is taken already"
            })
        }
        const hashed=await hashPassword(password);
        const user = await student_model.create({
            name,
            email,
            collegeEmail,
            rollNumber,
            phone,
            password:hashed,
            cgpa,
            tenthPercentage,
            twelfthPercentage,
            department,
            programme,
            lookingFor,
            dateOfBirth
        })

        if(!user){
            res.status(400)
            throw new Error('User not found')
        }

        try{
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                collegeEmail: user.collegeEmail,
                rollNumber: user.rollNumber,
                phone: user.phone,
                password:user.password,                
                resume: user.resume,
                cgpa: user.cgpa,
                tenthPercentage: user.tenthPercentage,
                twelfthPercentage: user.twelfthPercentage,
                department: user.department,
                programme: user.programme,
                lookingFor: user.lookingFor,
                dateOfBirth: user.dateOfBirth,
                isAdmin: user.isAdmin,
                verified: user.verified,
            })
        } catch(error){
            res.status(400)
            throw new Error('Unable to Sign Up')
        }
    } catch (error) {
        console.log(error);
    }
};

export const loginStudent=async (req,res)=>{
    try {
        const {roll,password}=req.body;
        if (!roll){
            return res.json({
                error:"Roll no is required!"
            })
        }
        if (!password){
            return res.json({
                error:"Password is Required"
            })
        }
        const rollno=roll;
        const student=await student_model.findOne({rollNumber:rollno});
        if (!student){
            return res.json({
                error:"Student not Found!"
            })
        }
        const match=await comparePassword(password,student.password);
        if (match){
            res.json({
                _id: student._id,
                name: student.name,
                password:student.password,
                email: student.email,
                collegeEmail: student.collegeEmail,
                rollNumber: student.rollNumber,
                phone: student.phone,
                cgpa: student.cgpa,
                tenthPercentage: student.tenthPercentage,
                twelfthPercentage: student.twelfthPercentage,
                department: student.department,
                programme: student.programme,
                lookingFor: student.lookingFor,
                dateOfBirth: student.dateOfBirth,
                isAdmin: student.isAdmin,
                token: generateToken(student._id),
            })
        }
        if (!match){
            return res.json({
                error:"Password Incorrect"
            })
        }


    } catch (error) {
        console.log(error);
    }
}

export const regRecruiter = async (req,res)=>{
    try {
        const {name,email,phoneNumber,password,nameOftheCompany,designation,modeOfRecruitment}=req.body;
        if (!name){
            return res.json({
                error:"Name is required!"
            })
        }
        if (!password || password.length<6){
            return res.json({
                error:"Password of min 6 chars required"
            })
        }
        if (!email){
            return res.json({
                error:"Enter email id"
            })
        }
        if (!nameOftheCompany){
            return res.json({
                error:"Enter Company Name"
            })
        }
        if (!designation){
            return res.json({
                error:"Select Stream"
            })
        }0
        if (!phoneNumber){
            return res.json({
                error:"Select Stream"
            })
        }
        if (!modeOfRecruitment){
            return res.json({
                error:"Select Stream"
            })
        }
        const exist=await recruiter_model.findOne({email});
        if (exist){
            return res.json({
                error:"Email is taken already"
            })
        }
        const compexist=await recruiter_model.findOne({nameOftheCompany});
        if (compexist){
            return res.json({
                error:"Company is registered already"
            })
        }
        const hashed=await hashPassword(password);
        const newcompany= await recruiter_model.create({
            name,email,phoneNumber,password:hashed,nameOftheCompany,designation,modeOfRecruitment
        })
        await newcompany.save();
        if (!newcompany){
            return res.json({
                error:"Error in creating Account"
            })
        }

        return res.json(newcompany);
    } catch (error) {
        console.log(error);
    }
}

export const loginRecruiter=async (req,res)=>{
    try {
        const {email,password,company}=req.body;
        if (!email){
            return res.json({
                error:"Email id is required!"
            })
        }
        if (!password){
            return res.json({
                error:"Password is Required"
            })
        }
        if (!company){
            return res.json({
                error:"Password is Required"
            })
        }
        const recruiter=await recruiter_model.findOne({email:email});
        if (!recruiter){
            return res.json({
                error:"Recruiter not Registered!"
            })
        }
        const match=await comparePassword(password,recruiter.password);
        if (match){
            res.json({
                _id: recruiter._id,
                name: recruiter.name,
                email: recruiter.email,
                phoneNumber:recruiter.phoneNumber,
                password:recruiter.password,
                nameOftheCompany:recruiter.nameOftheCompany,
                designation: recruiter.designation,
                modeOfRecruitment: recruiter.modeOfRecruitment,
                verifiedByAdmin:recruiter.verifiedByAdmin,
                token: generateToken(recruiter._id)
            })
        }
        if (!match){
            return res.json({
                error:"Password Incorrect"
            })
        }


    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = async (req, res) => {
    const { _id, name, email, collegeEmail, rollNumber, phone, cgpa, tenthPercentage, twelfthPercentage, department, programme, lookingFor, dateOfBirth } = req.body;

    try {
      const user = await student_model.findById(_id);
      if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        user.collegeEmail = collegeEmail || user.collegeEmail;
        user.rollNumber = rollNumber || user.rollNumber;
        user.phone = phone || user.phone;
        user.cgpa = cgpa || user.cgpa;
        user.tenthPercentage = tenthPercentage || user.tenthPercentage;
        user.twelfthPercentage = twelfthPercentage || user.twelfthPercentage;
        user.department = department || user.department;
        user.programme = programme || user.programme;
        user.lookingFor = lookingFor || user.lookingFor;
        user.dateOfBirth = dateOfBirth || user.dateOfBirth;

        const updatedUser = await user.save();
        res.json(updatedUser);
      } else {
        res.status(404);
        throw new Error('User not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const getNotifications=async (req, res) => {
    try {
      const notifications = await messagessses.find().sort({ timestamp: -1 }).exec();
      res.json(notifications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const createJobOpening = async (req, res) => {
    const jobData = req.body;

    try {
      const newJob = new JobOpening(jobData);
      await newJob.save();
      res.status(201).json({
        message: 'Job opening created successfully',
        job: newJob,
        id: newJob._id // Send the newly created job's ID
      });
    } catch (error) {
      console.error('Error creating job opening:', error);
      res.status(500).json({ error: 'Failed to create job opening', details: error.message });
    }
  };

  export const updateJobOpening = async (req, res) => {
    const jobId = req.params.id;
    const jobData = req.body;

    try {
      const updatedJob = await JobOpening.findByIdAndUpdate(jobId, jobData, { new: true, runValidators: true });
      if (!updatedJob) {
        return res.status(404).json({ error: 'Job opening not found' });
      }
      res.status(200).json({ message: 'Job opening updated successfully', job: updatedJob });
    } catch (error) {
      console.error('Error updating job opening:', error);
      res.status(500).json({ error: 'Failed to update job opening', details: error.message });
    }
  };

  export const getAllJobs = async (req, res) => {
    try {
      const jobs = await JobOpening.find();
      setTimeout(() => {
        res.status(200).json({ jobs });
      }, 3000);

    } catch (error) {
      console.error('Error fetching job openings:', error);
      res.status(500).json({ error: 'Failed to fetch job openings', details: error.message });
    }
  };

  // Get a job opening by ID
  export const getJobById = async (req, res) => {
    const jobId = req.params.id;

    try {
      const job = await JobOpening.findById(jobId);
      if (!job) {
        return res.status(404).json({ error: 'Job opening not found' });
      }
      res.status(200).json({ job });
    } catch (error) {
      console.error('Error fetching job details:', error);
      res.status(500).json({ error: 'Error in job details'});
    }
  };
  export const getAppliedCompanies = async (req, res) => {
    const { rollno } = req.query;
    // console.log(rollno);
    try {
      const appliedCompanies = await StuCompanies.find({ rollNumber: rollno });
    //   console.log(appliedCompanies);
      res.json(appliedCompanies);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  export const withdrawApplication = async (req, res) => {
    const { companyId, rollno } = req.body;
    try {
      await AppliedCompany.findOneAndDelete({ _id: companyId, studentRollNo: rollno });
      res.json({ message: 'Application withdrawn successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  export const submitFeedback = async (req, res) => {
    const { companyId, feedback } = req.body;
    try {
      await AppliedCompany.findByIdAndUpdate(companyId, { feedback });
      res.json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
 
  export const createStuCompanies = async (req,res)=>{
    try {
        const {name,email,collegeEmail,rollNumber,phone,cgpa,tenthPercentage,twelfthPercentage,department,programme,company}=req.body;
      
        if (!name){
            return res.json({
                error:"Name is required!"
            })
        }
       
        if (!email){
            return res.json({
                error:"Email is Required"
            })
        }
        if (!rollNumber){
            return res.json({
                error:"Roll Number is Required "
            })
        }
        if (!phone){
            return res.json({
                error:"Enter Phone"
            })
        }
        if (!cgpa){
            return res.json({
                error:"Enter CGPA"
            })
        }
        if (!company){
            return res.json({
                error:"Enter company Name"
            })
        }
        const exist=await StuCompanies.findOne({company});
        if (exist){
            return res.json({
                error:"Form Has Already Submmited"
            })
        }
       
        
        const newcApplication= await StuCompanies.create({
            name,email,collegeEmail,rollNumber,phone,cgpa,tenthPercentage,twelfthPercentage,department,programme,company
        })
        console.log(newcApplication);
        await newcApplication.save();
        if (!newcApplication){
            return res.json({
                error:"Error in Submmiting Form"
            })
        }

        return res.json(newcApplication);
    } catch (error) {
        console.log(error);
    }
};
  
export const getStuCompaniesApplied = async (req, res) => {
    // const { rollno } = req.query;
    try {
    //   const appliedCompanies = await StuCompanies.find({ studentRollNo: rollno });
    const getappliedCompanies = await StuCompanies.find({});
      res.json(getappliedCompanies);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

export const getStuJobById = async (req, res) => {
    const { companyName } = req.query;
    // console.log(rollno);
    try {
      const appliedStudent = await StuCompanies.find({ company:companyName });
    //   console.log(appliedCompanies);
      res.json(appliedStudent);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

export const creatingMsg= async (req,res) =>{
   const {content,lookingFor,dateOfBirth} =req.body;    
   console.log(content);
   if (!content){
    return res.json({
        error:"Message is required!"
    })
   }
    const newMessage= await messagessses.create({
        content,
    })
    console.log(newMessage);
    await newMessage.save();
    if (!newMessage){
        return res.json({
            error:"Error in Submmiting Form"
        })
    }

    return res.json(newMessage);
}


export const getStuDetailsById = async (req, res) => {
    const StujobId = req.params.id;

    try {
      const stud = await StuCompanies.findById(StujobId);
      if (!stud) {
        return res.status(404).json({ error: 'Job opening not found' });
      }
      res.status(200).json({ stud });
    } catch (error) {
      console.error('Error fetching job details:', error);
      res.status(500).json({ error: 'Error in job details'});
    }
  };