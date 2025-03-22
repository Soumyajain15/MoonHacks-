import "../styles/pages/profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <h3>👤 Profile Settings</h3>
      <form className="profile-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="admin@technoclubs.com" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;
