import React from 'react';
import './Projects.css';

const GithubIcon = (props) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
  </svg>
);

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">My Work</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="card-header">
            <h3>GUC Talent Marketplace</h3>
            <button
              className="source-btn"
              onClick={() => window.open('https://github.com/Software-Engineering-Spring-2026/Power-Puff.git', '_blank', 'noopener,noreferrer')}
              aria-label="View on GitHub"
            >
              <GithubIcon className="source-icon" />
            </button>
          </div>

          <h4>React 19 · Vite · JavaScript (ES6+) · Material UI · Framer Motion · Context API Team of 4 ·
            CSEN603 Software Engineering</h4>
          <p>A role-gated single-page application built for
            the German University in Cairo that connects students,
            employers, and instructors in one platform.
            The app serves four distinct user personas across 28+ routes
            — students browse internships and collaborate on projects,
            employers post opportunities and get verified through an
            admin review pipeline, instructors manage bachelor thesis submissions
            , and admins monitor platform-wide analytics.Collaborated in Agile/ Scrum team:
            sprint planning, standups, retrospectives, PR reviews
            The technical core is a layered Context API architecture with three custom providers
            handling auth, notifications, and invitations. Features include a drag-and-drop
            Kanban task board, a full invitation lifecycle with six status transitions,
            custom SVG analytics charts, and a memoisation-optimised multi-field search.
            Built collaboratively using Git feature branches, pull requests,
            and Scrum sprints across the full SDLC.</p>
        </div>
        <div className="project-card">
          <h3>Airline Booking Web Applicatoin</h3>
          <h4>ReactHTML5 · CSS3 · JavaScript (ES6+) · MongoDB</h4>
          <p>Built a mobile-first,responsive booking interface using semantic HTML5 and CSS3 Grid/ Flexbox, optimised for conversion efficiency across devices.
          </p>
          <p>Integrated a REST API -backed flight-search endpoint returning real-time results; designed a MongoDB document schema supporting dynamic seat-class pricing without schema migrations.
          </p>
        </div>
        <div className="project-card">
          <h3>University HR Management System</h3>
          <h4>ASP.NET Core · JavaScript (ES6+) · SQL</h4>
          <p>
            Delivered a full-stack HR portal — ASP.NET Core backend exposing RESTful API endpoints
            consumed by a JavaScript (ES6+) frontend — supporting multi-level approval workflows
            and complex organisational hierarchies.
          </p>
          <p>
            Automated payroll processing with SQL Stored Procedures and Triggers, integrating
            overtime and attendance logic with 100% data-integrity on constraint testing.
          </p>
        </div>
      </div>
      <div className="see-more">
        <button
          className="source-btn"
          onClick={() => window.open('https://github.com/THEbeatles1970', '_blank', 'noopener,noreferrer')}
          aria-label="See more on GitHub"
        >
         
          <span>See more on GitHub</span> <GithubIcon className="source-icon" />
        </button>
      </div>
    </section>

  );
};
export default Projects;