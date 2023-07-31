
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import base_url1 from '../API/URL';

export default function ViewCustomers() {
  
 
    const [Cous,setCustomer]=useState([]);
  
    const GetAllCustomers=()=>{

        axios
        // .get('http://localhost:8090/getdetails')
        .get(`${base_url1}/getdetails`)
        .then((response)=>{
          setCustomer(response.data);

          console.log(response.data);
        })
        .catch((error)=>{
          console.error('error while fetching customers',error);
        });
      
      
      };
      
      useEffect(()=>{
  
        GetAllCustomers();
        
        
      },[]);
  
    return (
    <>
     <main className="container" style={{ overflow: 'auto' }}>
  <div className="bg-body-tertiary p-5 rounded"   style={{ overflow: 'auto' }}>
  <table class="table table-fixed">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">AccountNo</th>
      {/* <th scope="col">Address</th> */}
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">State</th>
      <th scope="col">city</th>
      <th scope="col">Email</th>
      <th scope="col">Balance</th>
      <th scope="col">Mobile</th>
      <th scope="col">Password</th>
      {/* <th scope="col">Pin</th> */}
     
    </tr>
  </thead>
  <tbody>
    {Cous.map((kunal)=>(
      <tr  key={kunal.id}>
        <td>{kunal.id}</td>
        <td>{kunal.accountno}</td>
        {/* <td>{kunal.address}</td> */}
        <td>{kunal.firstname}</td>
        <td>{kunal.lastname}</td>
        <td>{kunal.state}</td>
        <td>{kunal.city}</td>
        <td>{kunal.email}</td>
        <td>{kunal.balance}</td>
        <td>{kunal.mobile}</td>
        <td>{kunal.password}</td>
        {/* <td>{kunal.pin}</td> */}
        
        
      </tr>

))}
    

  </tbody>
</table>



  </div>
  </main>
    </>
  )
}
