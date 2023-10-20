import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signout();
      // Redirect to the login page
      window.location.href = '/login';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;