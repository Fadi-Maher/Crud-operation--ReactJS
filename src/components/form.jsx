import axios from "axios";
import { useEffect, useState } from "react";

const Form = ({ show, setShow, showEditForm, setShowEditForm, userData }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");

 
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!userName || !email || !select) {
    alert("Please fill in all fields.");
    return;
  }

  const userDataToSubmit = { userName, email, select };

  if (showEditForm) {
    // Ensure that the ID is included when updating
    if (userData && userData.id) {
      return axios.put(`http://localhost:3000/users/${userData.id}`, userDataToSubmit)
        .then((response) => {
          console.log("User updated successfully:", response.data);
          setShow(false);
          setShowEditForm(false);
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      console.error("User ID is missing for update.");
    }
  } else {
    return axios.post('http://localhost:3000/users', userDataToSubmit)
      .then((response) => {
        console.log("User added successfully:", response.data);
        setShow(false);
        setShowEditForm(false);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  }
 
  };
   useEffect(() => {
    if (userData) {
      setUserName(userData.userName);
      setEmail(userData.email);
      setSelect(userData.select);
    }
  }, [userData]);


  return (
    <div
      className="w-100 vh-100 d-flex justify-center items-center"
      style={{ background: 'rgba(0,0,0,0.5)', position: "fixed", left: "0", top: "0" }}
    >
      <div
        className="w-50 vh-50 text-center p-3 bg-danger rounded shadow-lg"
        style={{ position: "absolute", left: "25%", top: "20%" }}
      >
        <h3 className="text-white p-2">{showEditForm ? "Edit User" : "Add New User"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={userName}
            type="text"
            className="d-block mb-3 m-auto px-4 border p-2"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            value={email}
            type="email"
            className="d-block mb-3 m-auto px-4 border p-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            value={select}
            className="p-2"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="egypt">Egypt</option>
            <option value="germany">Germany</option>
            <option value="england">England</option>
          </select>

          <input
            className="m-auto d-block btn btn-outline-light mt-4 mb-4 p-2"
            type="submit"
            value={showEditForm ? "Update User" : "Add User"}
          />

          <div
            onClick={() => {
              setShow(false);
              setShowEditForm(false);
            }}
            className="text-white"
            style={{ cursor: "pointer", fontSize: "2rem", position: "absolute", top: "10px", right: "30px" }}
          >
            x
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
