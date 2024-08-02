import React, { useState } from 'react';
import Profile from './UserLogin/StudentProfile';
import Notification from './UserLogin/Notification';
import Companies from './UserLogin/companies';
import AppliedCompaniesSection from './UserLogin/AppliedCompanies';
export const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('profile');

  const renderSection = () => {
    switch (selectedSection) {
      case 'profile':
        return <Profile />;
      case 'notifications':
        return <Notification />;
      case 'companies':
        return <Companies />;
      case 'appliedCompanies':
        return <AppliedCompaniesSection />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex h-full min-h-screen">
      <div className="sticky top-0 w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li
            className={`cursor-pointer py-2 ${selectedSection === 'profile' && 'bg-gray-700'}`}
            onClick={() => setSelectedSection('profile')}
          >
            Basic Profile
          </li>
          <li
            className={`cursor-pointer py-2 ${selectedSection === 'notifications' && 'bg-gray-700'}`}
            onClick={() => setSelectedSection('notifications')}
          >
            Messages
          </li>
          <li
            className={`cursor-pointer py-2 ${selectedSection === 'companies' && 'bg-gray-700'}`}
            onClick={() => setSelectedSection('companies')}
          >
            Job Openings
          </li>
          <li
            className={`cursor-pointer py-2 ${selectedSection === 'appliedCompanies' && 'bg-gray-700'}`}
            onClick={() => setSelectedSection('appliedCompanies')}
          >
            Applications
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



export default Dashboard;
