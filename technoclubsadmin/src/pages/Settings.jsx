import "../styles/pages/settings.css";
import { useState, useEffect } from "react";

function Settings() {
  // Load settings from localStorage or set default values
  const [settings, setSettings] = useState(() => {
    const storedSettings = JSON.parse(localStorage.getItem("settings"));
    return (
      storedSettings || {
        notification: true,
        darkMode: false,
        autoBackup: false,
      }
    );
  });

  // Effect to apply dark mode based on saved preference
  useEffect(() => {
    if (settings.darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [settings.darkMode]);

  // Save settings to localStorage when updated
  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  // Handle toggle change
  const handleToggle = (e) => {
    const { name, checked } = e.target;
    setSettings({
      ...settings,
      [name]: checked,
    });
  };

  return (
    <div className="settings-container">
      <h3 className="mb-4">⚙️ Application Settings</h3>

      <div className="card shadow-sm p-4">
        <form>
          {/* Notification Toggle */}
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="notification"
              name="notification"
              checked={settings.notification}
              onChange={handleToggle}
            />
            <label className="form-check-label" htmlFor="notification">
              Enable Notifications
            </label>
          </div>

          {/* Dark Mode Toggle */}
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleToggle}
            />
            <label className="form-check-label" htmlFor="darkMode">
              Enable Dark Mode
            </label>
          </div>

          {/* Auto Backup Toggle */}
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="autoBackup"
              name="autoBackup"
              checked={settings.autoBackup}
              onChange={handleToggle}
            />
            <label className="form-check-label" htmlFor="autoBackup">
              Enable Auto Backup
            </label>
          </div>

          <button type="button" className="btn btn-primary mt-3">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
