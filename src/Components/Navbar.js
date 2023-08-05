import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHome} from '@fortawesome/free-solid-svg-icons';


export default function Navbar({ isLoggedIn,user, handleLogout,isAdminLoggedIn,admin }) {
  return (
    <div>
   
{/* <html lang="en" data-bs-theme="auto"/> */}
  <script src="../assets/js/color-modes.js"></script>

    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content=""/>
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"/>
    <meta name="generator" content="Hugo 0.112.5"/>
    <title>Fixed top navbar example · Bootstrap v5.3</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/navbar-fixed/"/>

    

    

<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"/>

    

    
   
    <link href="navbar-fixed.css" rel="stylesheet"/>
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src="/bank2.png" alt="Brand Logo" width="50" height="50" />
    Nidhi Bank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto ">
      <li className="nav-item">
              <Link className="nav-link" to="/">
                <p> <FontAwesomeIcon icon={faHome}/> &nbsp;&nbsp;&nbsp;&nbsp;</p>
             
              </Link>
            </li>

       {!isLoggedIn && !isAdminLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Create Account
              </Link>
            </li>
          )}
        
        {!isAdminLoggedIn && (
          <>
        {isLoggedIn && user ? (
              <NavDropdown title={`Hello, ${user ? user.firstname : 'User'}`} id="navbarScrollingDropdown">

                <NavDropdown.Item>
                  <Link className="nav-link active" to="/profile" style={{ color: 'black' }}>
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  <p className="nav-link active" style={{ color: 'black' }}>
                    Logout
                  </p>
                </NavDropdown.Item>
              </NavDropdown>
            ) : ( 
          
          // <NavDropdown title="Login"   style={{ marginRight: '20px' }}> 
          <NavDropdown title={<><FontAwesomeIcon icon={faUser} /> Login</>} style={{ marginRight: '20px' }}>

          
        <NavDropdown.Item>
          <Link   className="nav-link active " to="/adminlogin"   style={{ color: 'black' }}>Admin</Link>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <Link   className="nav-link active " to="/login"   style={{ color: 'black' }}>User</Link>
        </NavDropdown.Item>
      </NavDropdown>)
      }
</>
        )}


{/* condition for admin login */}

{isAdminLoggedIn && admin && (
<NavDropdown title="Hello,Admin" id="navbarScrollingDropdown">

<NavDropdown.Item>
  <Link className="nav-link active" to="/profile" style={{ color: 'black' }}>
    Profile
  </Link>
</NavDropdown.Item>
<NavDropdown.Item onClick={handleLogout}>
  <p className="nav-link active" style={{ color: 'black' }}>
    Logout
  </p>
</NavDropdown.Item>
</NavDropdown>

)}




</ul>
      

    </div>
  </div>
</nav>


<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

  


    </div>
  );
}
