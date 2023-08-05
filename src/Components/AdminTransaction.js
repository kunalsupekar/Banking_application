import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminTransaction.css';
import base_url1 from '../API/URL';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the autoTable plugin

export default function AdminTransaction() {


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
    doc.save('Alltransactions.pdf');
  };


  

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
      <button style={{ backgroundColor: 'green', color: 'white' }} onClick={handleDownloadPDF}>
        Download All Transactions
      </button>
    </div>
  );
}
