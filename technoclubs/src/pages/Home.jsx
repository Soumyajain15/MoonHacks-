import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Join the Future of Tech Clubs</h1>
        <p>Revolutionizing student organizations with automation & collaboration.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Featured Clubs */}
      <section className="featured-clubs">
        <h2>Popular Clubs</h2>
        <div className="club-list">
          <div className="club-card">
            <h3>🚀 AI & Machine Learning Club</h3>
            <p>Explore AI projects, research, and hackathons.</p>
          </div>
          <div className="club-card">
            <h3>💻 Web Development Club</h3>
            <p>Build amazing websites and learn new technologies.</p>
          </div>
          <div className="club-card">
            <h3>🎮 Game Development Club</h3>
            <p>Create your own games and animations.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>🎤 TechTalk 2024 - AI in Industry (April 10, 2024)</li>
          <li>💡 Hackathon - Build for Good (May 15, 2024)</li>
          <li>📚 Workshop - Web Dev Basics (June 5, 2024)</li>
        </ul>
      </section>

      {/* Latest Tech Articles */}
      <section className="tech-news">
        <h2>Latest in Tech</h2>
        <div className="news-grid">
          <article>
            <h3>🤖 AI is Changing the World</h3>
            <p>AI is transforming industries faster than ever. Learn more.</p>
          </article>
          <article>
            <h3>🚀 Web 3.0 & the Future</h3>
            <p>Discover how decentralized tech is shaping the internet.</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
