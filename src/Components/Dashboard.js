import React from 'react';
import './sidebars.css';
import Sidebar from './Sidebar';
import Headerdashboard from '../Dashboard_components/Headerdashboard';
import Transfer from '../Dashboard_components/Transfer';
import { Route, Routes } from 'react-router-dom';
import Transaction from '../Dashboard_components/Transaction';
// import RazorpayForm from '../ponents/RazorpayForm';
import LoanForm from '../Dashboard_components/LoanForm';
import Deposit from '../Dashboard_components/Deposit';


const Dashboard = ({user}) => {
  return (

<>
    <div className="d-flex">
    <Sidebar/>
    
     <Headerdashboard user={user}/>
     <Routes>
     <Route path="/transfer" element={<Transfer />} />
     <Route path="/transaction" element={<Transaction/>} />
     <Route path="/deposit" element={<Deposit/>} />
     <Route path="/loan" element={<LoanForm/>} />
     </Routes>

  
     </div>

    </>
  );
};

export default Dashboard;
