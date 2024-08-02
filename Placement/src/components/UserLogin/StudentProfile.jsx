import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    password: "",
    cpassword: "",
    email: "",
    collegeEmail: "",
    rollNumber: 0,
    phone: "",
    cgpa: 0,
    tenthPercentage: 0,
    twelfthPercentage: 0,
    department: "",
    programme: "",
    lookingFor: "",
    dateOfBirth: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setProfileData(userInfo);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put('/dash', profileData); // Update endpoint
      if (data.error) {
        toast.error(data.error);
      } else {
        // localStorage.setItem('RollNumber', JSON.stringify(data));
        localStorage.setItem('RollNumber',rollNumber);
        toast.success('Profile updated successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">College Email</label>
          <input
            type="email"
            name="collegeEmail"
            value={profileData.collegeEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Roll Number</label>
          <input
            type="number"
            name="rollNumber"
            value={profileData.rollNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CGPA</label>
          <input
            type="number"
            name="cgpa"
            value={profileData.cgpa}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">10th Percentage</label>
          <input
            type="number"
            name="tenthPercentage"
            value={profileData.tenthPercentage}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">12th Percentage</label>
          <input
            type="number"
            name="twelfthPercentage"
            value={profileData.twelfthPercentage}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={profileData.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Programme</label>
          <input
            type="text"
            name="programme"
            value={profileData.programme}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Looking For</label>
          <input
            type="text"
            name="lookingFor"
            value={profileData.lookingFor}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Update Profile</button>
      </form>
    </div>

  );
};

export default Profile;
