import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const JobOpenings = () => {
  const [form, setForm] = useState({
    nameOftheCompany: '',
    typeOfJobOpening: '',
    jobDesignation: '',
    tentativeJobLocation: '',
    jobDescription: '',
    bTechIT: false,
    bTechECE: false,
    mTechIT: false,
    mTechECE: false,
    bTechCTC: '',
    mTechCTC: '',
    relocationBenefits: 'NA',
    cgpa: 0,
    onlineTechnicalTest: false,
    groupDiscussion: false,
    technicalInterviews: false,
    hrInterviews: false,
    formDeadline: '',
  });

  const [jobId, setJobId] = useState(null);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  let funcTemp=()=>{
     let some=user.infoLocation().server();
     let somethinf=user.infoLocation().backend();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (jobId) {
        // Update existing job
        await axios.put(`jobs/${jobId}`, form);
        localStorage.setItem('companyName',form.nameOftheCompany);
        toast.success('Job opening updated successfully!');

      } else {
        // Create new job
        const response = await axios.post('/jobs', form);
        localStorage.setItem('companyName',form.nameOftheCompany);
        const createdJobId = response.data.id; // Get the ID of the newly created job
        setJobId(createdJobId); // Save the job ID for future updates
        toast.success('Job opening created successfully!');
      }
    } catch (error) {
      console.error('Error creating/updating job opening:', error);
      toast.error('Failed to create/update job opening.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create/Update Job Openings</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div className="mb-4" key={key}>
            <label className="block text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}:
            </label>
            {typeof form[key] === 'boolean' ? (
              <input
                type="checkbox"
                name={key}
                checked={form[key]}
                onChange={handleChange}
                className="mt-1 p-2"
              />
            ) : (
              <input
                type={key === 'formDeadline' ? 'date' : 'text'}
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                required={key !== 'relocationBenefits'}
              />
            )}
          </div>
        ))}
        <button  type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobOpenings;
