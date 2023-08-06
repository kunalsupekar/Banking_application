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
      .get(`${base_url1}/getadminloans`)
      .then((response) => {
        // Set the fetched data in the component's state
        setLoanApplications(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleApprove = (id) => {
    // Show the confirmation dialog
    const confirmed = window.confirm('Are you sure you want to approve this loan application?');
    if (!confirmed) {
      return; // Do nothing if the user cancels the action
    }

    // Handle the approval logic here
    // You can make an HTTP PUT or POST request to update the loan application status
    // Example:
    axios
      .put(`${base_url1}/loans/${id}`, { status: 'approved' })
      .then((response) => {
        // Handle the response if needed
        console.log('Loan application approved:', response.data);
        // Update the loanApplications state to reflect the changed status
        setLoanApplications((prevApplications) =>
          prevApplications.map((application) =>
            application.srno === id ? { ...application, status: 'approved' } : application
          )
        );
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleReject = (id) => {
    // Show the confirmation dialog
    const confirmed = window.confirm('Are you sure you want to reject this loan application?');
    if (!confirmed) {
      return; // Do nothing if the user cancels the action
    }

    // Handle the rejection logic here
    // You can make an HTTP PUT or POST request to update the loan application status
    // Example:
    axios
      .put(`${base_url1}/loans/${id}`, { status: 'rejected' })
      .then((response) => {
        // Handle the response if needed
        console.log('Loan application rejected:', response.data);
        // Update the loanApplications state to reflect the changed status
        setLoanApplications((prevApplications) =>
          prevApplications.map((application) =>
            application.srno === id ? { ...application, status: 'rejected' } : application
          )
        );
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
          {loanApplications
            .filter((application) => application.status === null) // Filter applications with null status
            .map((application) => (
              <tr key={application.srno}>
                <td>{application.srno}</td>
                <td>{application.accountno}</td>
                <td>{application.name}</td>
                <td>{application.amount}</td>
                <td>{application.existingloan}</td>
                <td>{application.loantype}</td>
                <td>{application.income}</td>
                <td>
                  <button
                    className="btn btn-success mx-1"
                    onClick={() => handleApprove(application.srno)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleReject(application.srno)}
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
