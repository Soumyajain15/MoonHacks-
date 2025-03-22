import "../styles/pages/events.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Events = () => {
  // Mock Data for Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: "Hackathon 2025",
      date: "April 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "TechHub Auditorium",
      image: "/images/hackathon.jpg",
    },
    {
      id: 2,
      title: "Code Wars 2025",
      date: "May 10, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Center",
      image: "/images/codewars.jpg",
    },
  ];

  // Mock Data for Past Events
  const pastEvents = [
    {
      id: 3,
      title: "AI Summit 2024",
      date: "December 20, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Virtual",
      image: "/images/aisummit.jpg",
    },
    {
      id: 4,
      title: "Tech Expo 2024",
      date: "November 12, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "TechPark Hall A",
      image: "/images/techexpo.jpg",
    },
  ];

  return (
    <div className="events-container container-fluid">
      <h3 className="mb-4">📅 Upcoming Events</h3>

      {/* Upcoming Events */}
      <div className="row">
        {upcomingEvents.map((event) => (
          <div className="col-md-6 mb-4" key={event.id}>
            <div className="event-card">
              <img src={event.image} alt={event.title} className="event-img" />
              <div className="event-info">
                <h5>{event.title}</h5>
                <p>
                  <FaCalendarAlt /> {event.date}
                </p>
                <p>
                  <FaClock /> {event.time}
                </p>
                <p>
                  <FaMapMarkerAlt /> {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-4 mt-5">📚 Past Events</h3>

      {/* Past Events */}
      <div className="row">
        {pastEvents.map((event) => (
          <div className="col-md-6 mb-4" key={event.id}>
            <div className="event-card">
              <img src={event.image} alt={event.title} className="event-img" />
              <div className="event-info">
                <h5>{event.title}</h5>
                <p>
                  <FaCalendarAlt /> {event.date}
                </p>
                <p>
                  <FaClock /> {event.time}
                </p>
                <p>
                  <FaMapMarkerAlt /> {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
