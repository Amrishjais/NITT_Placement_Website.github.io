import React, { useState } from 'react';
import JobOpenings from './JobOpenings';
import ApplicantList from './ApplicantList';
import UpdateSelectionStatus from './UpdateSelectionStatus';
import RecruiterMessage from './RecruiterMessage';

export const RecruiterDash = () => {
  const [selectedSection, setSelectedSection] = useState('jobOpenings');

  const renderSection = () => {
    switch (selectedSection) {
      case 'jobOpenings':
        return <JobOpenings />;
      case 'applicantList':
        return <ApplicantList />;
      case 'applicantMessage':
        return <RecruiterMessage />;
      case 'updateSelectionStatus':
        return <UpdateSelectionStatus />;
      default:
        return < RecruiterMessage/>;
    }
  };

  return (
    <div className="flex h-full min-h-screen">
      <div className="sticky top-0 w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Recruiter Dashboard</h2>
        <ul>
          <li
            className={`cursor-pointer py-2 ${selectedSection === 'jobOpenings' && 'bg-gray-700'}`}
            onClick={() => setSelectedSection('jobOpenings')}
          >
            Create/Update Job Openings
          </li>
          <li
            className={`cursor-pointer py-2 ${selectedSection === 'applicantList' && 'bg-gray-700'}`}
            onClick={() => setSelectedSection('applicantList')}
          >
            List of Applicants
          </li>
          <li
            className={`cursor-pointer py-2 ${selectedSection === 'applicantMessage' && 'bg-gray-700'}`}
            onClick={() => setSelectedSection('RecruiterMessage')}
          >
           Enter Some Message
          </li>
         
          <li className='mt-10'>
            <img className='flex rounded-md h-28 justify-center' src='src/assets/logo.png'></img>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        {renderSection()}
      </div>
    </div>
  );
};

export default RecruiterDash;
