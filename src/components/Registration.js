import "./Registration.css"
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {

   const [name, setName] = useState(" ");
   const [email, setEmail] = useState(" ");
   const [mobile, setMobile] = useState(" ");
   const [password, setPassword] = useState(" ");
   const [location, setLocation] = useState(" ");
   const [role, setRole] = useState(" ");

async function SignUp(){
  let item = {name, email, mobile, password, location, role}
  
 let result= await fetch("https://srninfotech.com/projects/loanApp/api/register",{
    method :"POST",
    headers :{
      "Content-Type": "application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify(item)
  });
  result = await result.json();
  console.warn("result", result)
}

  return (
    // <div className='col-sm-6 offset-sm-3'>
    //   <h1>Sign Up</h1>
    //   <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-comtrol' />
    //   <br /> 
    //   <input type="email" value={email}onChange={(e)=>setEmail(e.target.value)} className='form-comtrol' />
    //   <br /> 
    //   <input type="number" value={mobile}onChange={(e)=>setMobile(e.target.value)} className='form-comtrol' />
    //  <br />
    //   <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-comtrol' />
    //  <br />
    //  <input type="text" value={location}onChange={(e)=>setLocation(e.target.value)} className='form-comtrol' />
    // <br />
    //  <input type="text" value={role}onChange={(e)=>setRole(e.target.value)} className='form-comtrol' />
    // <br />
    //   <button onClick={SignUp} className='btn btn-primary'>Sign Up</button>
    // </div>
    <div className="signup-container col-sm-6 offset-sm-3">
    <h1>Sign Up</h1>
    <form>
      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="mobile" className="form-label">Mobile</label>
        <input
          type="number"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="location" className="form-label">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="button" onClick={SignUp} className="btn btn-primary">Sign Up</button>
    </form>
  </div>
  )
}

export default Register


