
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ApplicantList = () => {
  const [jobOpenings, setStul] = useState([]);

  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        const response = await axios.get('/stuJobs');
        setStul(response.data); // Assuming response contains a jobs array
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching job openings:', error);
      }
    };

    fetchJobOpenings();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 ">List of Applicants</h2>
      {/* Add UI elements to display list of applicants */}
      {jobOpenings.map((st) => (
          <div key={st._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{st.rollNumber}</h3>
            <p className="text-gray-600">{st.name}</p>
            <Link to={`/stuIdJobs/${st._id}`}>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
               See Details
              </button>
           </Link>
          </div>
        ))}
    </div>
  );
};

export default ApplicantList;
