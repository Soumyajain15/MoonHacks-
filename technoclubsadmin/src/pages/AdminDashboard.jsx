import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dashboard from "./Dashboard";

function AdminDashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default AdminDashboard;
