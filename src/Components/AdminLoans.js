import React, { useState, useEffect } from 'react';
import axios from 'axios';
import base_url1 from '../API/URL';



export default function AdminLoans() {
  const [loanApplications, setLoanApplications] = useState([]);

  useEffect(() => {
    // Fetch the loan applications when the component mounts
    fetchLoanApplications();
  }, []);

  const fetchLoanApplications = () => {
    // Make an HTTP GET request to fetch loan applications from the backend using Axios
    axios
    .get(`${base_url1}/getadminloans`)// Replace '/api/loans' with the appropriate API endpoint
      .then((response) => {
        // Set the fetched data in the component's state
        setLoanApplications(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleApprove = (id) => {
    // Handle the approval logic here
    // You can make an HTTP PUT or POST request to update the loan application status
    // Example:
    // axios.put(`/api/loans/${id}`, { status: 'approved' });
  };

  const handleReject = (id) => {
    // Handle the rejection logic here
    // You can make an HTTP PUT or POST request to update the loan application status
    // Example:
    // axios.put(`/api/loans/${id}`, { status: 'rejected' });
  };

  const containerStyles = {
    position: 'absolute',
    top: '55%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: '1000px',
    height: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: '#f7f7f7',
  };

  return (
    <div style={containerStyles}>
      <table className="table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Account no</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Existing Loan</th>
            <th>Loan Type</th>
            <th>Yearly Income</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loanApplications.map((application) => (
            <tr key={application.id}>
              <td>{application.userid}</td>
              <td>{application.accountno}</td>
              <td>{application.name}</td>
              <td>{application.amount}</td>
              <td>{application.existingloan}</td>
              <td>{application.loantype}</td>
              <td>{application.income}</td>
              <td>
                <button
                  className="btn btn-success mx-1"
                  onClick={() => handleApprove(application.id)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleReject(application.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
