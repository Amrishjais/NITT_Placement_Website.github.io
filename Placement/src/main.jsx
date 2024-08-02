import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginBtn } from './components/UserLogin/Student.jsx'
import { RecruiterLoginBtn } from './components/UserLogin/Recruiter.jsx'
import { CoordinatorLoginBtn } from './components/UserLogin/Coordinator.jsx'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import RecruiterDash from './components/UserLogin/RecruiterDash.jsx'
import { SignUpBtn } from './components/UserLogin/Signup.jsx'
import RegisterRecruiter from './components/UserLogin/RecSignup.jsx'
import JobDetails from './components/UserLogin/JobDetails.jsx'
import { FormFillcompaniesBtn } from './components/FormFillCompanies1.jsx'
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import Dashboard from './components/Studentdash.jsx'
import { Footprints } from 'lucide-react'
import ApplicantList from './components/UserLogin/ApplicantList.jsx'
import ApplicantProfile from './components/UserLogin/ApplicantProfile.jsx'
axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true;

const routes=(
  <>
  <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
  <Router>
    <Routes>
      <Route path="/" exact element={<App/>}/>
      <Route path="/login" exact element={<LoginBtn/>}/>
      <Route path="/recruiter" exact element={<RecruiterLoginBtn/>}/>
      <Route path="/coordinator" exact element={<CoordinatorLoginBtn/>}/>
      <Route path="/signup" exact element={<SignUpBtn/>}/>
      <Route path='/recsignup' exact element={<RegisterRecruiter/>}/>
      <Route path='/dash' exact element={<Dashboard/>}/>
      <Route path='/recruiterdash' exact element={<RecruiterDash/>}/>
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/stuIdJobs/:id" element={<ApplicantProfile/>}/>
      <Route path="/form-fill-for-companies" element={<FormFillcompaniesBtn />}/>
    </Routes>
  </Router>
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
);
