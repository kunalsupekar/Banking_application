import React from 'react';
import './sidebars.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Sidebar() {
  return (
   <>
   <div className="d-flex " style={{ width: '220px', marginTop: '70px', height: '550px' }}>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-secondary" style={{ width: '220px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="fs-4">Welcome</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link active" aria-current="page">
              <i className="fa fa-home me-2" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="transfer" className="nav-link link-body-emphasis">
              <i className="fa fa-inr me-2" />
              Fund Transfer
            </Link>
          </li>
          <li>
            <Link to="transaction" className="nav-link link-body-emphasis">
              <i className="fa fa-exchange me-2" />
              Transactions
            </Link>
          </li>
          <li>
            <a href="/" className="nav-link link-body-emphasis">
              <i className="fas fa-credit-card me-2" />
              Credit-Cards
            </a>
          </li>
          <li>
            <Link to="deposit" className="nav-link link-body-emphasis">
              <i  className="fa-solid fa-money-bill-transfer "/>
              Deposit Money
            </Link>
          </li>
          <li>
            <Link to="loan" className="nav-link link-body-emphasis">
              <i className="fa  fa-hand-holding-usd me-2" />
              Loan & insurances
            </Link>
          </li>
          <li>
            <a href="/" className="nav-link link-body-emphasis">
              <i className="fa fa-money me-2" />
              Bill & recharge
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-body-emphasis">
              <i className="fa fa-download me-2" />
              Download Statement
            </a>
          </li>
        </ul>
      </div>
      <div >
      
      </div>
    </div>
 
   
   </>
  )
}
