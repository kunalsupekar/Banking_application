import React,{useState} from 'react';
import axios from 'axios';
import base_url1 from '../API/URL';
import { Link } from 'react-router-dom';
import { Person, Key } from 'react-bootstrap-icons';
import LoadingSpinner from './LoadingSpinner';


export default function Login({ handleLogin}) {
  
  const [accountno, setAccountno] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 



  const handleLogin1 = (e) => {
     e.preventDefault();
     setIsLoading(true);

    // Make a POST request to your login endpoint
    axios
      .post(`${base_url1}/login`, { accountno, password })
      .then((response) => {
     
        console.log(response);
        if (response.data) {
          setIsLoading(false);
         handleLogin(response.data);
        


          
        } else {
          alert('Invaliad Credetainls. Please try again.');
          setIsLoading(false);
          
         
        }
        
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
        alert('Error while connecting to the API. Please try again later.');
        setIsLoading(false);

      
      });
    };


    const [passwordType, setPasswordType] = useState("password");
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }







  return (
    <div className="container" style={{ width: '800px', height: '420px', display: 'flex', justifyContent: 'center', 
    alignItems: 'center',marginBottom:'200px',marginTop:'120px' }}>



    {isLoading && (
      <LoadingSpinner label="Wait we are logging.." />
)}


    <div className="container d-flex justify-content-center align-items-center vh-70" >
      <form className="login-form p-4 rounded shadow" onSubmit={handleLogin1}>
        <h2 className="text-center mb-4">Welcome User</h2>

        <div className="form-group mb-6">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <Person />
              </span>
            </div>
            <input
              type="text"
             className="form-control"
              placeholder="Enter Account no"
               style={{ height: '40px', width: '400px' }} 
              required
              value={accountno}
              onChange={(e) => setAccountno(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <Key />
              </span>
            </div>
            <input
             type={passwordType}
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           <div className="input-group-btn">
                     <button 
                     type="button"
                     className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-start align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMeCheckbox"
                // checked={rememberMe}
                // onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="rememberMeCheckbox">
                Remember me
              </label>
            </div>
          </div>
          {/* <div className="col text-right">
            <Link to="/">Forgot password?</Link>
          </div> */}
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Don't have an account? <Link to="/signup">Create Account</Link>
          </p>
          {/* <p>or sign up with:</p> */}
        </div>
      </form>
    </div>
    </div>
  );
};