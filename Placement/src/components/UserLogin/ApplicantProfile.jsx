import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ApplicantProfile= () => {
  const { id } = useParams();                  // Extract job ID from URL parameters
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[st,setSt]=useState();
  const[coman,setComan]=useState();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        console.log(id);
        const response = await axios.get(`/stuJobs/${id}`);
        console.log(response.data.stud);
        setJob(response.data.stud);              // Assume response contains a job object
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError('Failed to load job details');
  
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-gray-200 pb-4">Student Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-2"> Name</h3>
          <p className="text-gray-600">{job.name}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Roll Number</h3>
          <p className="text-gray-600">{job.rollNumber}</p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Job Description</h3>
        <p className="text-gray-600 mb-4"><strong>Department:</strong> {job.department}</p>
        <p className="text-gray-600 mb-4"><strong>College Email:</strong> {job.collegeEmail}</p> 
        <p className="text-gray-600 mb-4"><strong>Email:</strong> {job.email}</p>
        <p className="text-gray-600 mb-4"><strong>Phone:</strong> {job.phone}</p>
        <p className="text-gray-600 mb-4"><strong>Programme:</strong> {job.programme}</p>
        <p className="text-gray-600 mb-4"><strong>10th Percentage:</strong> {job.tenthPercentage}</p>
        <p className="text-gray-600 mb-4"><strong>12th Percentage:</strong> {job.twelfthPercentage        }</p>
        {/* <p className="text-gray-600 mb-4"><strong>Online Test:</strong> {job.onlineTechnicalTest ? 'Yes' : 'No'}</p>
        <p className="text-gray-600 mb-4"><strong>Group Discussion:</strong> {job.groupDiscussion ? 'Yes' : 'No'}</p>
        <p className="text-gray-600 mb-4"><strong>Technical Interviews:</strong> {job.technicalInterviews ? 'Yes' : 'No'}</p>
        <p className="text-gray-600 mb-4"><strong>HR Interviews:</strong> {job.hrInterviews ? 'Yes' : 'No'}</p> */}
       </div>
      {/* <div className="mt-6 flex justify-center">
      
      <a href='/form-fill-for-companies'>
       <button
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Application
        </button>
        </a>
      </div> */}
    </div>
  );
};

export default ApplicantProfile;
