import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Main Routes after login */}
        <Route
          path="/*"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="w-100">
                <Topbar />
                <div className="p-3">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/chat" element={<Chat />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
