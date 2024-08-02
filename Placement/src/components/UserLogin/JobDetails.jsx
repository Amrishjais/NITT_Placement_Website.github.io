import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const JobDetails = () => {
  const { id } = useParams(); // Extract job ID from URL parameters
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[st,setSt]=useState();
  const[coman,setComan]=useState();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/jobs/${id}`);
        setJob(response.data.job); // Assume response contains a job object
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError('Failed to load job details');
  
        
        // setLoading();
      }
    };

    fetchJobDetails();
  }, [id]);

  // const handleSubmit = async () => {
  //   try {
  //     //await axios.post('http://localhost:5000/api/applications', { jobId: id });

  //     // alert('Application submitted successfully!');
  //     console.log(st);
  //     // setComan()
  //     let cm=job.nameOftheCompany;
  //     console.log(cm);
  //     setComan(cm);
  //     let rdata={st,coman};
      
  //     // toast.success('Application submitted successfully!');
      
  //   } catch (error) {
  //     console.error('Error submitting application:', error);
  //   }
  // };
  // const submitForm=async ()=>{
  //    try{
  //       const response = await axios.post('/stuJobs',rdata);
  //       // const createdJobId = response.data.id; // Get the ID of the newly created job
  //       // setJobId(createdJobId); // Save the job ID for future updates
  //       // toast.success('Job opening created successfully!');
  //    }
  //    catch(errorr){
  //       console.error('Error creating/updating job opening:', errorr);
  //       toast.error('Failed to create/update job opening.');
  //    }
  // }
  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-gray-200 pb-4">Job Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Company</h3>
          <p className="text-gray-600">{job.nameOftheCompany}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Job Type</h3>
          <p className="text-gray-600">{job.typeOfJobOpening}</p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Job Description</h3>
        <p className="text-gray-600 mb-4"><strong>Designation:</strong> {job.jobDesignation}</p>
        <p className="text-gray-600 mb-4"><strong>Location:</strong> {job.tentativeJobLocation}</p>
        <p className="text-gray-600 mb-4"><strong>Description:</strong> {job.jobDescription}</p>
        <p className="text-gray-600 mb-4"><strong>CTC for BTech:</strong> {job.bTechCTC}</p>
        <p className="text-gray-600 mb-4"><strong>CTC for MTech:</strong> {job.mTechCTC}</p>
        <p className="text-gray-600 mb-4"><strong>Relocation Benefits:</strong> {job.relocationBenefits}</p>
        <p className="text-gray-600 mb-4"><strong>CGPA Required:</strong> {job.cgpa}</p>
        <p className="text-gray-600 mb-4"><strong>Online Test:</strong> {job.onlineTechnicalTest ? 'Yes' : 'No'}</p>
        <p className="text-gray-600 mb-4"><strong>Group Discussion:</strong> {job.groupDiscussion ? 'Yes' : 'No'}</p>
        <p className="text-gray-600 mb-4"><strong>Technical Interviews:</strong> {job.technicalInterviews ? 'Yes' : 'No'}</p>
        <p className="text-gray-600 mb-4"><strong>HR Interviews:</strong> {job.hrInterviews ? 'Yes' : 'No'}</p>
      </div>
      <div className="mt-6 flex justify-center">
       {/* <div>
          <label>Enter Your Roll Number For applying in this Comapany:</label>
          <input type ='text' onChange={(e)=>setSt(e.target.value)} className="placeholder-gray-600  focus:placeholder-gray-500 p-2 border-y-cyan-950" placeholder="Roll Number"/>
          </div> */}
      <a href='/form-fill-for-companies'>
       <button
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Application
        </button>
        </a>
      </div>
    </div>
  );
};

export default JobDetails;
