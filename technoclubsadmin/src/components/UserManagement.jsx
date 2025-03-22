import { useState } from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import "../styles/styles.css";

const initialUsers = [
  { id: 1, name: "John Doe", role: "Admin" },
  { id: 2, name: "Jane Smith", role: "Moderator" },
];

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="card p-3 shadow-sm">
      <h6>User Management</h6>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <FaUserEdit className="me-2 text-primary" />
                <FaTrash
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteUser(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
