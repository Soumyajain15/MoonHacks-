import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "../styles/styles.css";

const activities = [
  { id: 1, type: "success", message: "User 'John Doe' created a new event." },
  { id: 2, type: "warning", message: "Server memory usage is high!" },
  { id: 3, type: "success", message: "Club 'TechnoHub' approved by admin." },
  { id: 4, type: "error", message: "Database backup failed." },
];

function ActivityFeed() {
  return (
    <div className="card p-3 shadow-sm">
      <h6>Recent Activity</h6>
      <ul className="list-unstyled">
        {activities.map((activity) => (
          <li key={activity.id} className={`activity-item ${activity.type}`}>
            {activity.type === "success" && (
              <FaCheckCircle className="me-2 text-success" />
            )}
            {activity.type === "warning" && (
              <FaExclamationCircle className="me-2 text-warning" />
            )}
            <span>{activity.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
