import React, { useState } from 'react';
import axios from 'axios';
import base_url1 from '../API/URL';

const Deleteuser = () => {
  const [accountNo, setAccountNo] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    // Make an HTTP GET request to search for the user using Axios
    axios
      .get(`${base_url1}/getname/${accountNo}`)
      .then((response) => {
        const user = response.data;
        if (user) {
          // User found
          setAccountHolderName(user);
          setMessage('');
        } else {
          // User not found
          setAccountHolderName('');
          setMessage('User not found.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setAccountHolderName('');
        setMessage('Error occurred while searching for the user.');
      });
  };

  const handleDelete = () => {
    // Display a confirmation dialog before proceeding with the deletion
    const confirmation = window.confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      // Make an HTTP DELETE request to delete the user using Axios
      axios
      .delete(`${base_url1}/getdetails/${accountNo}`)
        .then((response) => {
          // Handle the success message if needed
          console.log(response.data);
          setAccountNo('');
          setAccountHolderName('');
          setMessage('User deleted successfully.');
        })
        .catch((error) => {
          console.error('Error:', error);
          setMessage('Error occurred while deleting the user.');
        });
    }
  };

  const containerStyles = {
    position: 'absolute',
    top: '55%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: '#f7f7f7',
  };

  return (
    <div style={containerStyles}>
      <div>
        <label htmlFor="accountNo">Enter User Account No:</label>
        <input
          type="text"
          id="accountNo"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {accountHolderName && (
        <div style={{ color: 'blue' }}>Account Holder Name: {accountHolderName}</div>
      )}

      {message && <div style={{ color: 'red' }}>{message}</div>}

      {accountHolderName && (
        <button onClick={handleDelete}>Delete User</button>
      )}
    </div>
  );
};

export default Deleteuser;
