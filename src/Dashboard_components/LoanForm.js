import React, { useState } from 'react';
import axios from 'axios';
import base_url1 from '../API/URL';

export default function LoanForm() {
  const userDataString = sessionStorage.getItem('userDetails');
  const userData = JSON.parse(userDataString);

  const resetForm = () => {
    setFormData({
      amount: '',
      existingloan: '',
      loantype: '',
      income: '',
      userid: userData.id,
      accountno: userData.accountno,
      name: userData.firstname + ' ' + userData.lastname,
    });
  };




  const [formData, setFormData] = useState({
    amount: '',
    existingloan: '',
    loantype: '',
    income: '',
    userid: userData.id,
    accountno: userData.accountno,
    name: userData.firstname+" "+userData.lastname,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitloan = (e) => {
    e.preventDefault();
    console.log(formData);

    // Make an HTTP POST request to the backend with the form data using Axios
    axios
      .post(`${base_url1}/loans`, formData)
      .then((response) => {
        // Handle the response from the backend if needed
        console.log(response.data);
        alert("applied for loan successfully");
        resetForm(); // Reset the form data
      })
      .catch((error) => {
        // Handle errors if any
        console.error('Error:', error);
      });
  };

  const containerStyles = {
    position: 'absolute',
    top: '65%',
    left: '53%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: '#f7f7f7',
  };

  return (
    <div style={containerStyles}>
      <form onSubmit={handleSubmitloan}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter loan amount"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="existingLoan">Existing Loan:</label>
            <select
              className="form-control"
              id="existingLoan"
              name="existingloan"
              value={formData.existingloan}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="loanType">Loan Type:</label>
          <select
            className="form-control"
            id="loanType"
            name="loantype"
            value={formData.loantype}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="gold">Gold</option>
            <option value="car">Car</option>
            <option value="personal">Personal</option>
            <option value="home">Home</option>
            <option value="education">Education</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="yearlyIncome">Yearly income</label>
          <select
            className="form-control"
            id="yearlyIncome"
            name="income"
            value={formData.income}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="500000">₹ 5,00,000 or more</option>
            <option value="300000">₹ 3,00,000 - ₹ 4,99,999</option>
            <option value="200000">₹ 2,00,000 - ₹ 2,99,999</option>
            <option value="100000">₹ 1,00,000 - ₹ 1,99,999</option>
            <option value="50000">₹ 50,000 - ₹ 99,999</option>
            <option value="less_than_50000">Less than ₹ 50,000</option>
          </select>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="gridCheck"
            name="checked"
            value={formData.checked}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </form>
    </div>
  );
}
