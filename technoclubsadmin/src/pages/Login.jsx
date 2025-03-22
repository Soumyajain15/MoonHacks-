import "../styles/pages/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-container">
      <h3>🔐 Admin Login</h3>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="admin@technoclubs.com" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="••••••••" />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
