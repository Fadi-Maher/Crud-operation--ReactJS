 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; 
import Login from "./pages/login";
import SignUp from './pages/signUp';
import NotFound from "./pages/notFound";
import Users from "./pages/users";
  import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    <ToastContainer/>
    </>
  
  );
}

export default App;


 