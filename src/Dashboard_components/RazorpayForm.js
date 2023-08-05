// RazorpayForm.js

import React, { useState } from 'react';
import { loadRazorpay } from './razorpay'; // Import the utility function

const RazorpayForm = () => {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    const razorpay = await loadRazorpay();

    const options = {
      key: 'YOUR_RAZORPAY_API_KEY', // Replace with your Razorpay API Key
      amount: amount * 100, // Payment amount in paise (100 paise = ₹1)
      currency: 'INR', // Currency code (INR for Indian Rupees)
      name: 'Acme Corp', // Your company name or payment title
      description: 'Test Payment', // Payment description
      image: 'https://example.com/logo.png', // Your company logo or icon URL
      order_id: 'ORDER_ID_FROM_BACKEND', // Unique order ID generated from your backend
      handler: (response) => {
        // Handle the payment success response here
        console.log('Payment Successful:', response);
        // You can make an API call to your backend to confirm the payment and update your database.
      },
      prefill: {
        email: 'john.doe@example.com', // Customer's email
        contact: '9876543210', // Customer's contact number
      },
      theme: {
        color: '#F37254', // Customize the color of the payment button
      },
    };

    const paymentObject = new razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="container-transactions">
    <div>
      <h3>Enter the amount to deposit:</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
    </div>
  );
};

export default RazorpayForm;
