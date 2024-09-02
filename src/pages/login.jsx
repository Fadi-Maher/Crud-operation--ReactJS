import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading ,setIsLoading]=useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !email) {
      alert("Please fill in all fields.");
      return;
    }

    let userData = { password, email };
    // console.log(userData)
    setIsLoading(true)
    axios.get(`http://localhost:3000/admins`)
    .then(res => {
      toast.success("Admin Logged in successfully")
      setIsLoading(false)
      navigate("/users")
    })
    .catch (e=> {
      toast.error(e.message)
      setIsLoading(false)
    })
  };

  return (
    
    <div className="bg-dark " style={{  minHeight: '100vh'}}>
      <div className="  bg-dark h-full text-white " >
       
        <div className=" container" style={{ maxWidth: "400px" }}>
          <div className=" row justify-content-center">
            <div className=" col">
              <form onSubmit={handleSubmit} className="  bg-dark text-white border p-3 rounded " style={{ marginTop:"200px" }}>
                 <h2 className="  text-center text-bold text-white"  >User Login</h2>
                <div className="  mb-2">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    required
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button disabled={isLoading ? true: false} type="submit" className="  btn btn-primary" style={{marginLeft:"120px", marginTop:"20px"}}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Login;