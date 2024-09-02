import   { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Form from "../components/form";
import axios from "axios";

const Users = () => {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [showForm, showEditForm]);

  const handleEdit = (user) => {
    setUserData(user);
    setShowForm(false);
    setShowEditForm(true);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      {(showForm || showEditForm) && (
        <Form
          show={showForm}
          setShow={setShowForm}
          showEditForm={showEditForm}  
          setShowEditForm={setShowEditForm}  
          userData={userData}
        />
      )}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 bg-dark vh-100">
            <h4 className="text-white m-4 text-center">Admin Dashboard</h4>
            <hr />
            <button
              onClick={() => {
                setShowForm(true);
                setShowEditForm(false);
              }}
              style={{ fontSize: "1.5rem", margin: "auto" }}
              className="btn btn-danger d-block fw-bold w-40"
            >
              Add User
            </button>
          </div>
          <div className="col-lg-10 p-0">
            <table
              className="table table-striped"
              style={{
                margin: "0%",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "1rem",
                      backgroundColor: "gray",
                      color: "white",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "1rem",
                      backgroundColor: "gray",
                      color: "white",
                    }}
                  >
                    Email
                  </th>
                  <th
                    colSpan={3}
                    style={{
                      padding: "1rem",
                      backgroundColor: "gray",
                      color: "white",
                    }}
                  >
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td style={{ padding: "1rem" }}>{user.userName}</td>
                    <td style={{ padding: "1rem" }}>{user.email}</td>
                    <td style={{ padding: "1rem" }}>{user.select}</td>
                    <td
                      onClick={() => handleEdit(user)}
                      style={{ padding: "1rem", fontSize: "1.5rem" }}
                    >
                      <FiEdit
                        className="text-info"
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                    <td
                      onClick={() => handleDelete(user.id)}
                      style={{ padding: "1rem", fontSize: "1.7rem" }}
                    >
                      <MdOutlineDelete
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
