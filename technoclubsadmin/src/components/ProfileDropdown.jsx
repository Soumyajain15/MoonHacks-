import { FaUserCircle } from "react-icons/fa";

function ProfileDropdown() {
  return (
    <div className="dropdown">
      <FaUserCircle className="dropdown-toggle user-icon" data-bs-toggle="dropdown" />
      <ul className="dropdown-menu dropdown-menu-end">
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;
