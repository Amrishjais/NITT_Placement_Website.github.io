import toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const FormFillcompaniesBtn = () => {
  // const navigate = useNavigate();
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    collegeEmail: "",
    rollNumber: 0,
    phone: "",
    cgpa: 0,
    tenthPercentage: 0,
    twelfthPercentage: 0,
    department: "",
    programme: "",
    company:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // console.log(regData);
      const { data } = await axios.post('/stuJobs', regData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setRegData({});
        toast.success('Form Submmited Successfully...!');
        // navigate('/dash');
      }
    } catch (error) {
      // console.log(error);
      toast.error('Form Submmited failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Application Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={regData.name}
              onChange={(e) => setRegData({ ...regData, name: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={regData.email}
              onChange={(e) => setRegData({ ...regData, email: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">College Email</label>
            <input
              type="email"
              value={regData.collegeEmail}
              onChange={(e) => setRegData({ ...regData, collegeEmail: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="College Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll Number</label>
            <input
              type="number"
              value={regData.rollNumber}
              onChange={(e) => setRegData({ ...regData, rollNumber: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Roll Number"
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              value={regData.phone}
              onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Phone"
            />
          </div>
         
          
          <div>
            <label className="block text-sm font-medium text-gray-700">CGPA</label>
            <input
              type="number"
              value={regData.cgpa}
              onChange={(e) => setRegData({ ...regData, cgpa: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="CGPA"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">10th Percentage</label>
            <input
              type="number"
              value={regData.tenthPercentage}
              onChange={(e) => setRegData({ ...regData, tenthPercentage: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="10th Percentage"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">12th Percentage</label>
            <input
              type="number"
              value={regData.twelfthPercentage}
              onChange={(e) => setRegData({ ...regData, twelfthPercentage: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="12th Percentage"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input
              type="text"
              value={regData.department}
              onChange={(e) => setRegData({ ...regData, department: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Department"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Programme</label>
            <input
              type="text"
              value={regData.programme}
              onChange={(e) => setRegData({ ...regData, programme: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Programme"
            />
          </div> 
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              value={regData.company}
              onChange={(e) => setRegData({ ...regData, company: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Company Name"
            />
          </div>
        
          <div className="w-[80%] ml-10 flex flex-col items-center mb-4">
            <button
              type="submit"
              className="w-full text-white font-semibold bg-[#060606] rounded p-4"
            >
              Submit Form
            </button>
          </div>

        
        </form>
      </div>
    </div>
  )};
