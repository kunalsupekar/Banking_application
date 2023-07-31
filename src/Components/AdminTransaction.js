import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminTransaction.css';
import base_url1 from '../API/URL';

export default function AdminTransaction() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url1}/getadmintransactions`)
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <div className="container-transaction">
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
                  <td>
                    {transaction.amount < 0 ? (
                      <span className="to-suffix">to </span>
                    ) : (
                      <span className="from-suffix">from </span>
                    )}
                    {transaction.name}
                  </td>
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
