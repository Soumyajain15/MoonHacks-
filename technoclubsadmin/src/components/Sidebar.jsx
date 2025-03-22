import { Link } from "react-router-dom";
import { FaHome, FaChartLine, FaCalendarAlt, FaComments, FaUsers, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">📚 Technoclubs</h3>
      <ul className="list-unstyled">
        <li>
          <Link to="/">
            <FaHome className="me-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <FaChartLine className="me-2" /> Analytics
          </Link>
        </li>
        <li>
          <Link to="/events">
            📅 Events
          </Link>
        </li>
        <li>
          <Link to="/members">
            <FaUsers className="me-2" /> Members
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <FaCalendarAlt className="me-2" /> Calendar
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <FaComments className="me-2" /> Chat
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog className="me-2" /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
