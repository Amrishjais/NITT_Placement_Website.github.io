import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const { data } = await axios.get('/notifications');
      setNotifications(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul className="space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications</p>
        ) : (
          notifications.map((notification) => (
            <li key={notification._id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-800">{notification.content}</p>
              <p className="text-gray-600 text-sm">{new Date(notification.timestamp).toLocaleString()}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Notification;
