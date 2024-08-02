import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Companies = () => {
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        const response = await axios.get('/jobs');
        setJobOpenings(response.data.jobs); // Assuming response contains a jobs array
      } catch (error) {
        console.error('Error fetching job openings:', error);
      }
    };

    fetchJobOpenings();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {jobOpenings.map((job) => (
        <div key={job._id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{job.nameOftheCompany}</h3>
          <p className="text-gray-600">{job.typeOfJobOpening}</p>
          <Link to={`/jobs/${job._id}`}>
            <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
              Open
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Companies;
