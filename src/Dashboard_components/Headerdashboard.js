import React,{useEffect,useState} from 'react';
import './Headerdashboard.css';
import axios from 'axios';
import base_url1 from '../API/URL';

const Headerdashboard = ({user}) => {

   console.log(user)
   const [userDetails, setUserDetails] = useState({});
   const [balance, setBalance] = useState(0);
  

   useEffect(() => {
     const id = user?.id;
     if (id) {
       axios
         .get(`${base_url1}/getdetails/${id}`)
         .then(response => {
           setUserDetails(response.data);
           setBalance(response.data.balance || 0);
 
           // Storing the fetched data in sessionStorage
           sessionStorage.setItem('userDetails', JSON.stringify(response.data));
         })
         .catch(error => {
           console.error('Error fetching user details:', error);
         });
     }
   }, [user?.id]);
 
   // Retrieve the data from sessionStorage on component mount
   useEffect(() => {
     const storedUserDetails = sessionStorage.getItem('userDetails');
     if (storedUserDetails) {
       setUserDetails(JSON.parse(storedUserDetails));
       setBalance(storedUserDetails.balance || 0);
     }
   }, []);


  

  return (
    <>
    {/* <div className="outer-container"> */}
      <div className="horizontal-container " style={{ width: '1000px', height: '100px',marginTop: '95px',marginLeft: '25px' }}>
        <div style={{ marginTop: '10px', marginLeft: '30px' }}>
          {/* <h7>Account Summary</h7> */}
          <div className="left-image" style={{ marginBottom: '20px' }}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Xwquh7b39vo0RocyWVTvuQHaHH&pid=Api&P=0&h=180" // Replace with the actual image URL
              alt="Horizontal"
            />
          </div>
      </div>
      <div style={{ marginTop: '3px', marginLeft: '7px' }}>
      <div className="cont">
          <p>Account holder Name</p>
          <h5>{userDetails.firstname} {userDetails.lastname}</h5>
          
        </div>
      </div>
      <div style={{marginTop: '3px', marginLeft: '7px'  }}>
      <div className="cont">
      <p>Account No</p>
          {/* <h6>7517526783638</h6> */}
          <h5>{userDetails.accountno}</h5>
        </div>
      </div>

      <div style={{ marginTop: '3px', marginLeft: '7px'  }}>
      <div className="cont">
      <p>Branch</p>
          <h6>{userDetails.city}</h6>
        </div>
      </div>
      <div style={{ marginTop: '3px', marginLeft: '7px'  }}>
      <div className="cont">
      <p>Account balance</p>
          <h2>{balance}</h2>
        </div>
      </div>

    
      </div>
      

    </>
  );
};

export default Headerdashboard;