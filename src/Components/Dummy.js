import React,{useEffect,useState} from 'react';
import './FourCon.css';

const Dummy = ({user}) => {


  console.log(user);

 const [userData, setUserData] = useState(null);
 useEffect(() => {
  if (user) {
    localStorage.setItem('userData', JSON.stringify(user));
    setUserData(user);
  }
}, [user]);

if (!userData) {
  return null; // Render nothing if userData is null or still loading
}


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
          <h5>{userData.firstname} {userData.lastname}</h5>
          
        </div>
      </div>
      <div style={{marginTop: '3px', marginLeft: '7px'  }}>
      <div className="cont">
      <p>Account No</p>
          {/* <h6>7517526783638</h6> */}
          <h5>{userData.accountno}</h5>
        </div>
      </div>

      <div style={{ marginTop: '3px', marginLeft: '7px'  }}>
      <div className="cont">
      <p>Branch</p>
          <h6>Alandi, Pune</h6>
        </div>
      </div>
      <div style={{ marginTop: '3px', marginLeft: '7px'  }}>
      <div className="cont">
      <p>Account balance</p>
          <h2>26783638</h2>
        </div>
      </div>

    
      </div>
      


      
      {/* <div className="container-wrapper">
        <div className="row">
          <div className="container big-container" style={{ width: '900px', height: '350px' }}>
            <h2>Big Container 1</h2>
          </div>
          <div className="container small-container">Small Container 1</div>
        </div>
        <div className="row">
          <div className="container big-container" style={{ width: '900px', height: '350px' }}>
            <h2>Big Container 2</h2>
          </div>
          <div className="container small-container">Small Container 2</div>
        </div>
      </div> */}
    {/* </div> */}
    </>
  );
};

export default Dummy;