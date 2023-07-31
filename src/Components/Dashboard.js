import React from 'react';
import './sidebars.css';
import Sidebar from './Sidebar';
import Headerdashboard from '../Dashboard_components/Headerdashboard';
import Transfer from '../Dashboard_components/Transfer';
import { Route, Routes } from 'react-router-dom';
import Transaction from '../Dashboard_components/Transaction';

const Dashboard = ({user}) => {
  return (

<>
    <div className="d-flex">
    <Sidebar/>
     <Headerdashboard user={user}/>
     <Routes>
     <Route path="/transfer" element={<Transfer />} />
     <Route path="/transaction" element={<Transaction/>} />
     </Routes>

  
     </div>

    </>
  );
};

export default Dashboard;
