import { useState } from "react";
import axios from "axios";
  import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";
  
const SignUp = () => {
  const [name , setName]=useState("");
  const [password , setPassword]=useState("");
  const [email , setEmail]=useState("");
  const [phone , setPhone]=useState("");
  const [country , setCountry]=useState("");
  const [gender , setGender]=useState("");

  const navigate =  useNavigate();


 
const handleSubmit = (e) => {
  e.preventDefault();
      if (!name || !password || !email || !phone || !country || !gender) {
      alert("Please fill in all fields.");
      return;

      }
  let userData = { name, password, email, phone, country, gender };


  axios.post('http://localhost:5000/admins', userData)
    .then(res => {
      toast.success("User registered successfully");
       
        navigate('/login');
     })
    .catch(error => {
      console.error("Error:", error);
      toast.error("User registration failed");
    });
};

     
  return (
      
  <div className="bg-dark" style={{   minHeight: '100vh' }}>
  <div className="bg-dark h-full text-white mt-11">
  
    <div className="container" style={{ maxWidth: "500px" }}>
      <div className="row justify-content-center">
        <div className="col">
          <form className="bg-dark text-white border p-3 rounded" style={{marginTop:"100px"}} >
              <h2 className="text-center text-bold text-white">User Registration</h2>
            <div className="mb-2">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control form-control-md"
                id="username"
                required
                placeholder="Enter username"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control form-control-md"
                id="password"
                required
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control form-control-md"
                id="email"
                required
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control form-control-md"
                id="phone"
                required
                placeholder="Phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
             / >
            </div>
            <div className="mb-2">
              <label htmlFor="country" className="form-label">Country</label>
              <select
                className="form-select form-select-md"
                id="country"
                required
                value={country}
                onChange={e => setCountry(e.target.value)}
              >
                <option value="">Select country</option>
                <option value="egypt">Egypt</option>
                <option value="england">England</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="form-label">Gender</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  required
                  checked={gender === "male"}
                  onChange={e => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  required
                  checked={gender === "female"}
                  onChange={e => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
            </div>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-sm">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default SignUp;



 