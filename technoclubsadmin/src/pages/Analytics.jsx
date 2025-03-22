import "../styles/pages/analytics.css";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {
  FaChartBar,
  FaChartPie,
  FaUser,
  FaCalendarCheck,
  FaBullseye,
  FaClock,
} from "react-icons/fa";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  // Mock Data for Bar Chart (User Registrations)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "User Registrations",
        data: [120, 150, 180, 220, 250, 300, 320],
        backgroundColor: "#007bff",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  // Mock Data for Pie Chart (Events Participation)
  const pieData = {
    labels: ["Workshops", "Seminars", "Hackathons", "Meetups"],
    datasets: [
      {
        label: "Event Participation",
        data: [35, 25, 20, 20],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545", "#17a2b8"],
      },
    ],
  };

  return (
    <div className="analytics-container container-fluid">
      <h3 className="mb-4">📊 Analytics Overview</h3>

      {/* Row for Summary Cards */}
      <div className="row">
        {/* Total Users */}
        <div className="col-md-3 mb-3">
          <div className="analytics-card">
            <FaUser className="icon" />
            <h5>Total Users</h5>
            <p>2,540</p>
          </div>
        </div>

        {/* Active Events */}
        <div className="col-md-3 mb-3">
          <div className="analytics-card">
            <FaCalendarCheck className="icon" />
            <h5>Active Events</h5>
            <p>35</p>
          </div>
        </div>

        {/* Goal Completion Rate */}
        <div className="col-md-3 mb-3">
          <div className="analytics-card">
            <FaBullseye className="icon" />
            <h5>Goal Completion</h5>
            <p>87%</p>
          </div>
        </div>

        {/* Average Event Duration */}
        <div className="col-md-3 mb-3">
          <div className="analytics-card">
            <FaClock className="icon" />
            <h5>Avg. Event Duration</h5>
            <p>2.5 Hours</p>
          </div>
        </div>
      </div>

      {/* Row for Charts */}
      <div className="row">
        {/* Bar Chart Card */}
        <div className="col-md-6 mb-3">
          <div className="chart-container">
            <h5 className="chart-title">
              <FaChartBar /> User Registration Trends
            </h5>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Pie Chart Card */}
        <div className="col-md-6 mb-3">
          <div className="chart-container">
            <h5 className="chart-title">
              <FaChartPie /> Event Participation
            </h5>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
