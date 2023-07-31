import React,{useState} from 'react'
import axios from 'axios';
import base_url1 from '../API/URL';

export default function AddCustomer() {


  const [loading, setLoading] = useState(false); // New loading state
  
  
  const[Customer,setCustomer]=useState({
    id:'',
   
   accountno:'',
	pin:'',
  Mobile:'',
  firstname:'',
 lastname:'',
	 City:'',
 State:'',
 address:'',
	 Email:'',
	 Password:''

  });



  const handleSubmitF=(e)=>{
    e.preventDefault();
    setLoading(true);
    // Hide any existing alerts
    axios
    .post(`${base_url1}/getdetails`,Customer)
    .then((response)=>{
    console.log(response.data);
    setLoading(false);
      alert('Account Created successfully');
     
    })
    .catch((error)=>{
      console.error('error Creating Account',error);
    })
    // .finally(() => {
    //   setLoading(false); // Set loading state back to false after the response is received
    // });
};


const handleChange=(event)=>{
  setCustomer({
    ...Customer,
    [event.target.name]: event.target.value,
  });

};




  return (
    <>

    
     <main className="container"   style={{ marginTop: '50px'}}>
  <div className="bg-body-tertiary p-5 rounded"  style={{blurStyle}}>
  <form  onSubmit={handleSubmitF}>
  <div className="form-group col-md-4">
      <label htlmFor="inputState">ID</label>
      <input type="text" className="form-control" id="id"
      name="id"
      onChange={handleChange}
      />
    </div>


{/* loading spinner */}

    {loading && (
  <div className="d-flex justify-content-center">
  <button className="btn btn-primary text-center" type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Creating...
  </button>
</div>

)}





  <div className="form-row">
    <div className="col">
    <label htlmFor="inputFirstname">First Name</label>
      <input type="text" className="form-control" placeholder="First name"
     name="firstname"
     onChange={handleChange}
      />
    </div>
    <div className="col">
    <label htlmFor="inputLastname">Last Name</label>
      <input type="text" className="form-control" placeholder="Last name"
      name="lastname"
      onChange={handleChange}
      />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htlmFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
      name="email"
      onChange={handleChange}
      />
    </div>
    <div className="form-group col-md-6">
      <label htlmFor="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
      name="password"
      onChange={handleChange}
      />
    </div>
  </div>
<div className="form-row">
    <div className="col">
    <label htlmFor="inputFirstname">Pin</label>
      <input type="text" className="form-control" placeholder="pin"
      name="pin"
      onChange={handleChange}/>
    </div>
    {/* <div className="col">
    <label htlmFor="inputLastname">Accountno</label>
      <input type="text" className="form-control" placeholder="account no"
      name="accountno"
      onChange={handleChange}
      />
    </div> */}
  </div>
  <div className="form-row">
    <div className="col">
    <label htlmFor="inputFirstname">Mobile No</label>
      <input type="text" className="form-control" placeholder="Mobile no"
      name="mobile"
      onChange={handleChange}
      />
    </div>
    <div className="col">
    <label htlmFor="inputLastname">Address</label>
      <input type="text" className="form-control" placeholder="Address"
       name="address"
       onChange={handleChange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htlmFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"
      name="city"
      onChange={handleChange}/>
    </div>
    <div className="form-group col-md-4">
      <label htlmFor="inputState">State</label>
      <input type="text" className="form-control" id="inputState"
      name="state"
      onChange={handleChange}
      />
    </div>
    
  </div>
  {/* <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htlmFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <button type="submit"className="btn btn-primary btn-lg btn-block">Create</button>
</form>


          
</div>

  </main>
    </>
  )
}

const blurStyle = {
  backdropFilter: 'blur(500px)',
  pointerEvents: 'none'

};