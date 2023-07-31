
import React from 'react';
import './sidebars.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import ViewCustomers from './ViewCustomers';
import { Route, Routes } from 'react-router-dom';
import AdminTransaction from './AdminTransaction';



export default function AdminDashboard() {
    return (
        <>
        <div className="d-flex">
        <div className="d-flex " style={{ width: '220px', marginTop: '70px', height: '550px' }}>
           <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-secondary" style={{ width: '220px' }}>
             <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
               <span className="fs-4">Welcome Admin</span>
             </a>
             <hr />
             <ul className="nav nav-pills flex-column mb-auto">
               <li className="nav-item">
                 <Link to="" className="nav-link " aria-current="page">
                   <i className="fa fa-home me-2" />
                   Dashboard
                 </Link>
               </li>
               <li>
                 <Link to="view" className="nav-link link-body-emphasis">
                   <i className="fa fa-users me-2" />
                   All Customers
                 </Link>
               </li>
               <li>
                 <Link to="transaction" className="nav-link link-body-emphasis">
                   <i className="fa fa-exchange me-2" />
                  All Transactions
                 </Link>
               </li>
               <li>
                 <Link to="delete" className="nav-link link-body-emphasis">
                   <i className="fas fa-trash me-2" />
                   Delete
                 </Link>
               </li>
             
               <li>
                 <Link to="download" className="nav-link link-body-emphasis">
                   <i className="fa fa-download me-2" />
                   Download Statement
                 </Link>
               </li>
             </ul>
           </div>
           <div >
           
           </div>
         </div>

         <Routes>
     <Route path="/view" element={<ViewCustomers/>} />
      <Route path="/transaction" element={<AdminTransaction/>} />
     </Routes>
      
     </div>
        </>
       )
}
