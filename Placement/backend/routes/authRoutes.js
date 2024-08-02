import express from "express";
import cors from "cors";
import { test,registerUser,getAllJobs,getJobById,createJobOpening,updateJobOpening ,loginStudent,regRecruiter,loginRecruiter,updateProfile,getNotifications,getAppliedCompanies,submitFeedback,withdrawApplication, createStuCompanies,getStuCompaniesApplied,getStuJobById,creatingMsg,getStuDetailsById} from "../controllers/authController.js";

export const router=express.Router();

//middleware
router.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}));


  const companies = [
    { name: 'Google', description: 'A technology company.' },
    { name: 'Microsoft', description: 'A software company.' },
    { name: 'Apple', description: 'A hardware and software company.' },
    // Add more companies as needed
  ];

  router.get('/companies', (req, res) => {
    res.json(companies);
  });
router.get("/",test);
router.post("/signup",registerUser);
router.post("/login",loginStudent);
router.post("/recsignup",regRecruiter);
router.post("/recruiter",loginRecruiter);
router.put('/dash',updateProfile);
router.get('/notifications',getNotifications);
router.post('/jobs',createJobOpening);
router.put('/jobs/:id', updateJobOpening);
router.get('/jobs',getAllJobs);
router.get('/jobs/:id', getJobById);
router.get('/applied-companies', getAppliedCompanies);
router.post('/withdraw-application', withdrawApplication);
router.post('/submit-feedback', submitFeedback);

// router.get('/stuJobs/:id',getStuCompaniesApplied);

router.post('/stuJobs',createStuCompanies);
router.get('/stuJobs',getStuCompaniesApplied);

// router.get('/allStud', getStuJobById);
router.post('/newmsg',creatingMsg);
router.get('/stuJobs/:id',getStuDetailsById);
// router.get('/jobs/:id', getJobById);
// router.get('/stu-id-jobs/:id', getStuJobById);

