import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { Route, Routes,useNavigate} from 'react-router-dom';
import AddCustomer from './Components/AddCustomer';
import ViewCustomers from './Components/ViewCustomers';
import Login from './Components/Login';
import LoadingAnimation from './Components/LoadingAnimation';
import Footer from './Components/Footer';
import React, { useEffect,useState } from 'react';
import Dashboard from './Components/Dashboard';
import AdminLogin from './Components/AdminLogin';
import AdminDashboard from './Components/AdminDashboard';
// import Transfer from './Dashboard_components/Transfer';




function App() {
  const navigate = useNavigate();
  
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');
  const [user, setUser] = useState(null); // Initialize user state
  const[admin,setAdmin]=useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  



  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === '/') {
      navigate('/home');
    }


    const storedUserData = sessionStorage.getItem('userData');
  try {
    if (storedUserData && storedUserData !== 'undefined') {
      setUser(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  } catch (error) {
    console.error('Error parsing user data:', error);
    setUser(null); // Set user to null if there's an error with stored user data
    setIsLoggedIn(false);
  }


    const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }


    const storedIsAdminLoggedIn = sessionStorage.getItem('isAdminLoggedIn'); // Read isAdminLoggedIn from sessionStorage
    if (storedIsAdminLoggedIn === 'true') {
      setIsAdminLoggedIn(true); // Set isAdminLoggedIn state based on stored value
    }
     }, [navigate]);


     const handleLogin = (userData) => {
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userData', JSON.stringify(userData));
      setUser(userData); // Set the user data when the user logs in
    
      // Store user data in session storage
      sessionStorage.setItem('userDetails', JSON.stringify(userData));
    
      navigate('/dashboard');
    };

  const handleAdminLogin = (userData) => {
    console.log("Admin login successful");
    //setIsLoggedIn(true);
    setIsAdminLoggedIn(true);
    sessionStorage.setItem('isAdminLoggedIn', 'true');
    setAdmin(userData);
    navigate('/admindashboard'); // Redirect to the admin dashboard
  };


  // Function to handle logout
  const handleLogout = () => {
    // Your logout logic he
    setIsLoggedIn(false);
    // Clear the isLoggedIn state in sessionStorage
    sessionStorage.removeItem('isLoggedIn');
    setUser(null);
    sessionStorage.removeItem('userData');
    setAdmin(null);
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('isAdminLoggedIn'); // Remove isAdminLoggedIn from sessionStorage
    console.log("call coming logout working");
    navigate('/home');
  };

  return (
    <>
    
<Navbar isLoggedIn={isLoggedIn}  isAdminLoggedIn={isAdminLoggedIn} 
user={user} handleLogout={handleLogout}  admin={admin} />


  <Routes>

  <Route exact path='/adminlogin' element={<AdminLogin handleAdminLogin={handleAdminLogin} />} />
  <Route path="/dashboard/*" element={<Dashboard  user={user}/>}></Route>
  <Route path="/admindashboard/*" element={<AdminDashboard  admin={admin}/>}></Route>
  <Route exact path='/Add' element={<AddCustomer/>}></Route>
  <Route exact path='/home' element={<Hero/>}></Route>
  <Route exact path='/view' element={<ViewCustomers/>}></Route>
  <Route exact path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />}></Route>
  <Route exact path='/load' element={<LoadingAnimation/>}></Route>
  {/* <Route exact path='/transfer' element={<Transfer/>}></Route> */}

  </Routes>

<Footer/>
    
    </>
  );
}

export default App;
