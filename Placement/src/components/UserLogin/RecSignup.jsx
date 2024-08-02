import toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export  const RegisterRecruiter = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    nameOftheCompany: "",
    designation: "",
    modeOfRecruitment: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/recsignup', regData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setRegData({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          nameOftheCompany: "",
          designation: "",
          modeOfRecruitment: ""
        });
        toast.success('Sign Up successful');
        navigate('/recruiter');
      }
    } catch (error) {
      console.log(error);
      toast.error('Sign Up failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">NIT Trichy T&P Portal</h1>
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
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              value={regData.phoneNumber}
              onChange={(e) => setRegData({ ...regData, phoneNumber: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={regData.password}
              onChange={(e) => setRegData({ ...regData, password: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              value={regData.nameOftheCompany}
              onChange={(e) => setRegData({ ...regData, nameOftheCompany: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              value={regData.designation}
              onChange={(e) => setRegData({ ...regData, designation: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Designation"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mode of Recruitment</label>
            <input
              type="text"
              value={regData.modeOfRecruitment}
              onChange={(e) => setRegData({ ...regData, modeOfRecruitment: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Mode of Recruitment"
            />
          </div>


          <div className="w-full flex flex-col items-center mb-4">
            <button
              type="submit"
              className="w-full text-white font-semibold bg-[#060606] rounded p-4"
            >
              Sign Up
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2 mb-4">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-white px-2">or</p>
          </div>

          <div className="w-full flex items-center justify-center p-1">
            <p className="text-sm font-normal text-[#060606]">
              Already have an account?
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                <a href='/recruiter'> Log in</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterRecruiter;
