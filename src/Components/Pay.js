import React from 'react'
// import './App.css';

function Pay() {
    const loadScript = (src) => {
        return new Promise((resovle) => {
          const script = document.createElement("script");
          script.src = src;
    
          script.onload = () => {
            resovle(true);
          };
    
          script.onerror = () => {
            resovle(false);
          };
    
          document.body.appendChild(script);
        });
      };
    
      const displayRazorpay = async (amount) => {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          alert("You are offline... Failed to load Razorpay SDK");
          return;
        }
    
        const options = {
          // key: "rzp_test_5VSjKliP97CKhj",
          key: "rzp_test_YFItJan72ybMww",
          currency: "INR",
          amount: amount * 100,
          name: "Nidhi Bank",
          description: "Thanks for booking through our portal",
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert("Payment Successfully");
            
          },
          prefill: {
            name: "UserName",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      return (
        <div className="App">
          
                <div className="buttons">
                  <button onClick={() => displayRazorpay(5000)}>
                    DEPOSITE
                  </button>
                </div>
        </div>
      );
}

export default Pay;