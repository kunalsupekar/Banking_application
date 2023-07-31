import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Transaction.css';
import base_url1 from '../API/URL';

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    // Get the "userDetails" object from session storage
    const storedUserDetails = sessionStorage.getItem('userDetails');
    if (storedUserDetails) {
      // Parse the JSON string to get the userDetails object
      const userDetails = JSON.parse(storedUserDetails);
      const userId = userDetails.id;

      console.log(userId);

      // Fetch data from the API using the user id
      axios
        .get(`${base_url1}/gettransactions?id=${userId}`)
        .then(response => {
          // Set the fetched data to the transactions state
          console.log(response);
          setTransactions(response.data);
        })
        .catch(error => {
          console.error('Error fetching transactions:', error);
        });
    }
  }, []);


  return (
    <div className="container-transactions">
      <div className="header">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Transaction Type</th>
              <th>Date & Time</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="body">
        <table>
          <tbody>
            {transactions.map(transaction => (
              <React.Fragment key={transaction.id}>
                <tr>
                  {/* <td>{transaction.id}</td> */}
                  <td>{transaction.name}</td>
                 <td className={transaction.amount < 0 ? 'negative-amount' : 'positive-amount'}>
                    {transaction.amount}
                  </td>
                  <td>{transaction.amount < 0 ? 'Debit' : 'Credit'}</td>
                  <td>{transaction.transactionDateTime}</td>
                </tr>
                <tr>
                  <td colSpan="5" className="empty-row"></td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
