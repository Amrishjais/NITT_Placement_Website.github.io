import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppliedCompaniesSection = () => {
  const [appliedCompanies, setAppliedCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roll,setRoll]=useState();

  useEffect(() => {
    const fetchAppliedCompanies = async () => {
      try {
        const { data } = await axios.get('/applied-companies', {
          params: { rollno: localStorage.getItem('rollNumber') },
        });
        
        setAppliedCompanies(data);
      } catch (error) {
        console.error('Error fetching applied companies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedCompanies();
  }, []);

  const handleWithdraw = async (companyId) => {
    try {
      await axios.post('/withdraw-application', { companyId, rollno: localStorage.getItem('rollno') });
      setAppliedCompanies(appliedCompanies.filter(company => company._id !== companyId));
    } catch (error) {
      console.error('Error withdrawing application:', error);
    }
  };

  const handleFeedback = async (companyId, feedback) => {
    try {
      await axios.post('/submit-feedback', { companyId, feedback });
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Applied Companies</h1>
    
      <div className="bg-white p-6 rounded-lg shadow-md">
        {appliedCompanies.length === 0 ? (
          <p>No applied companies found.</p>
        ) : (
          appliedCompanies.map(company => (
            <div key={company._id} className="mb-4 p-4 border-b border-gray-300">
              <h2 className="text-xl font-semibold">{company.company}</h2>
              <p>Status: {company.status}</p>
              {company.googleMeetLink && (
                <p>
                  Interview Link: <a href={company.googleMeetLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">Google Meet</a>
                </p>
              )}
              {company.status === 'Selected' && (
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback:</label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Provide your feedback after the interview..."
                    onBlur={(e) => handleFeedback(company._id, e.target.value)}
                  />
                </div>
              )}
              <button
                className="mt-2 text-sm text-red-600 hover:underline"
                onClick={() => handleWithdraw(company._id)}
              >
                Withdraw Application
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppliedCompaniesSection;
