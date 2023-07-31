import React, { useState } from 'react';
import './transfer.css';
import axios from 'axios';
import base_url1 from '../API/URL';

const Transfer = () => {



  const userDataString = sessionStorage.getItem('userDetails');

// Parse the data string to get the object
const userData = JSON.parse(userDataString);

  const [showNextInputs, setShowNextInputs] = useState(false);
  const [formData, setFormData] = useState({
    accountno: userData.accountNo, // Use the accountNo variable here
    amount: '',
    pin: '',
    confirmPin: '',
    toaccountNo: '', // Correct the name to 'toaccountNo'
    id: userData.id, // Use optional chaining to handle undefined userData and provide a default value for id
    accountHolderName: '', 
  });
  const [accountHolderName, setAccountHolderName] = useState('');

  const handleButtonClick = () => {
    // Check if the account number is provided before making the API call
    if (!formData.toaccountNo) {
      alert("Please enter the account number first.");
      return;
    }

    // Make the API call to check the account number and get the account holder name
    axios
      .get(`${base_url1}/getname/${formData.toaccountNo}`)
      .then(response => {
        // If the account number exists, update the accountHolderName state variable
        console.log(response);
        if (response.data === "") {
          // If the account number exists, update the accountHolderName state variable and show next inputs
          alert("Account not found.");
          setAccountHolderName('');
        } else {
          // If the account number does not exist, show an alert and reset the accountHolderName
          setAccountHolderName(response.data);
          setFormData(prevData => ({ ...prevData, accountHolderName: response.data }));
          setShowNextInputs(true);
        }
      })
      .catch(error => {
        console.log(error);
        // If the account number does not exist or there is an error, reset the accountHolderName
        setAccountHolderName('');
        setFormData(prevData => ({ ...prevData, accountHolderName: '' }));

      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.pin !== formData.confirmPin) {
      alert("PIN and Confirm PIN do not match.");
      return; // Exit the function if the PINs don't match
    }

    // API call to perform the money transfer
    const transferData = {
      toaccountNo: formData.toaccountNo,
      amount: formData.amount,
      pin: formData.pin,
      accountno:userData.accountno,
      id:userData.id,
      accountHolderName: formData.accountHolderName

    };

    console.log(transferData);
    axios
      .post(`${base_url1}/transfer`, transferData)
      .then(response => {

          // If the account number exists, update the accountHolderName state variable and show next inputs
          alert(response.data);
          
        


        // Handle successful transfer response here, if needed
        console.log('Money transferred successfully!');
        // window.location.reload();
      })
      .catch(error => {
        // Handle transfer error here, if needed
        console.error('Error transferring money:', error);
      });
  };

  return (
    <div className="container2">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
  <div className="row">
    <label htmlFor="accountNo" className="col-sm-2">
      Account.No
    </label>
    <div className="col-sm-10">
      <input
        type="text"
        className="form-control"
        id="accountNo"
        name="toaccountNo"
        value={formData.toaccountNo}
        onChange={e => {
          handleChange(e);
          setAccountHolderName(''); // Reset account holder name when the account number is changed
        }}
        placeholder="Recipient's account no"
      />
      {accountHolderName && (
        <div style={{ color: 'green' }}>Account Holder: {accountHolderName}</div>
      )}
    </div>
  </div>
</div>
        
        <div className="form-group">
          <div className="row">
            <label htmlFor="amount" className="col-sm-2">
              Amount
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount in Rs"
              />
            </div>
          </div>
        </div>

        {!showNextInputs && (
          <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
            Next
          </button>
        )}

        {showNextInputs && (
          <>
            <div className="form-group">
              <div className="row">
                <label htmlFor="pin" className="col-sm-2">
                  Pin
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="pin"
                    name="pin"
                    value={formData.pin}
                    onChange={handleChange}
                    placeholder="Enter pin"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <label htmlFor="confirmPin" className="col-sm-2">
                  Confirm Pin
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPin"
                    name="confirmPin"
                    value={formData.confirmPin}
                    onChange={handleChange}
                    placeholder="Confirm pin"
                  />
                </div>
              </div>
            </div>
            
            <button type="submit" className="btn btn-success">
              Confirm Transfer
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Transfer;
