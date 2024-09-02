  import { Link } from "react-router-dom"
 const  Home=() => {
  return (
    <main className="bg-dark vh-100 text-white">
     <h1 className="text-center mb-5 pt-4 "> Welcome To Admin Home Page </h1>
     <div className=" w-50 m-auto  text-center">
        <Link to={"/login"} className=" me-2 btn btn-primary">Login</Link>
        <Link to={"/signup"} className=" me-2 btn btn-primary">Sign up</Link>



     </div>
    </main>
  )
}

export default Home
