import { useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "../styles/styles.css";

function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="topbar d-flex justify-content-between align-items-center">
      <h5 className="mb-0">📊 Admin Dashboard</h5>
      <div className="topbar-buttons d-flex align-items-center">
        <button className="btn btn-outline-secondary me-2" onClick={() => alert("🔔 No new notifications!")}>
          <FaBell />
        </button>
        <button className="btn btn-outline-secondary me-2" onClick={goToProfile}>
          <FaUserCircle />
        </button>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}

export default Topbar;
