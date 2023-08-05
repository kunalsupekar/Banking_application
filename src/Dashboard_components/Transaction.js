import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Transaction.css';
import base_url1 from '../API/URL';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the autoTable plugin

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

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Set the title for the PDF document
    doc.text('Transaction History', 10, 10);

    // Prepare data for the table
    const tableData = transactions.map(transaction => [
      transaction.name,
      transaction.amount,
      transaction.amount < 0 ? 'Debit' : 'Credit',
      new Date(transaction.transactionDateTime).toLocaleString(),
    ]);

    // Define table headers
    const headers = ['Name', 'Amount', 'Transaction Type', 'Date & Time'];

    // Add the table to the PDF
    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: 20,
    });

    // Save the PDF and trigger the download
    doc.save('transactions.pdf');
  };

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
                  <td>{transaction.name}</td>
                  <td className={transaction.amount < 0 ? 'negative-amount' : 'positive-amount'}>
                    {transaction.amount}
                  </td>
                  <td>{transaction.amount < 0 ? 'Debit' : 'Credit'}</td>
                  <td>{new Date(transaction.transactionDateTime).toLocaleString()}</td>
                </tr>
                <tr>
                  <td colSpan="4" className="empty-row"></td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <button style={{ backgroundColor: 'green', color: 'white' }} onClick={handleDownloadPDF}>
        Download Transactions PDF
      </button>
    </div>
  );
}
