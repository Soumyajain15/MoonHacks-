import "../styles/pages/members.css";
import { FaUser, FaEnvelope, FaUserTie, FaCalendarCheck } from "react-icons/fa";

const Members = () => {
  // Extended Member List
  const members = [
    {
      id: 1,
      name: "John Doe",
      role: "President",
      email: "john.doe@example.com",
      joined: "Jan 15, 2024",
      avatar: "/images/member1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Vice President",
      email: "jane.smith@example.com",
      joined: "Feb 12, 2024",
      avatar: "/images/member2.jpg",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "Event Coordinator",
      email: "michael.lee@example.com",
      joined: "Mar 5, 2024",
      avatar: "/images/member3.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Treasurer",
      email: "emily.davis@example.com",
      joined: "Apr 20, 2024",
      avatar: "/images/member4.jpg",
    },
    {
      id: 5,
      name: "Chris Johnson",
      role: "Secretary",
      email: "chris.johnson@example.com",
      joined: "May 10, 2024",
      avatar: "/images/member5.jpg",
    },
    {
      id: 6,
      name: "Sophia Martinez",
      role: "Design Head",
      email: "sophia.martinez@example.com",
      joined: "Jun 5, 2024",
      avatar: "/images/member6.jpg",
    },
    {
      id: 7,
      name: "David Wilson",
      role: "Technical Lead",
      email: "david.wilson@example.com",
      joined: "Jul 15, 2024",
      avatar: "/images/member7.jpg",
    },
    {
      id: 8,
      name: "Olivia Taylor",
      role: "PR Manager",
      email: "olivia.taylor@example.com",
      joined: "Aug 25, 2024",
      avatar: "/images/member8.jpg",
    },
    {
      id: 9,
      name: "Liam Brown",
      role: "Content Strategist",
      email: "liam.brown@example.com",
      joined: "Sep 10, 2024",
      avatar: "/images/member9.jpg",
    },
    {
      id: 10,
      name: "Ava Williams",
      role: "Social Media Manager",
      email: "ava.williams@example.com",
      joined: "Oct 5, 2024",
      avatar: "/images/member10.jpg",
    },
  ];

  return (
    <div className="members-container container-fluid">
      <h3 className="mb-4">🧑‍🤝‍🧑 Member Directory</h3>

      {/* Member List */}
      <div className="row">
        {members.map((member) => (
          <div className="col-md-6 mb-4" key={member.id}>
            <div className="member-card">
              <img
                src={member.avatar}
                alt={member.name}
                className="member-avatar"
              />
              <div className="member-info">
                <h5>
                  <FaUser /> {member.name}
                </h5>
                <p>
                  <FaUserTie /> {member.role}
                </p>
                <p>
                  <FaEnvelope /> {member.email}
                </p>
                <p>
                  <FaCalendarCheck /> Joined: {member.joined}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
