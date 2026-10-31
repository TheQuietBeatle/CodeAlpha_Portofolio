import React from 'react';
import './Projects.css';

const GithubIcon = (props) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
  </svg>
);

const projects = [
  {
    name: 'NurseryLink',
    stack: 'React 19 · TypeScript · Tailwind CSS · Express 5 · PostgreSQL · Resend',
    description: [
      'A full-stack nursery management web app where teachers log daily care events and parents follow their child’s day from home, with parent, teacher and admin portals across 12 routes and 38 React components.',
      'Automated fever alerts: any reading of 38.0 °C or above emails every linked parent through Resend and sends an in-app notification in one transaction.',
    ],
  },
  {
    name: 'GUC Talent Marketplace (Power-Puff)',
    stack: 'React 19 · Vite · JavaScript (ES6+) · Material UI · Framer Motion · Context API · Team of 4',
    repo: 'https://github.com/Software-Engineering-Spring-2026/Power-Puff.git',
    description: [
      'A role-gated SPA built for the German University in Cairo that connects students, employers and instructors across 28+ routes, with an admin review pipeline and platform-wide analytics.',
      'Built on a layered Context API architecture, with a 6-stage invitation lifecycle, a drag-and-drop Kanban board, custom SVG analytics charts and memoised multi-field search, using Git feature branches, pull requests and Scrum sprints.',
    ],
  },
  {
    name: 'CinePulse (Movie Explorer)',
    stack: 'React 19 · TypeScript · Tailwind CSS · Firebase',
    description: [
      'A movie explorer and cloud-synced watchlist on an MVVM architecture, with debounced OMDB search, filters and pagination, Firebase Auth and Realtime Database, a protected route and an offline mock-data fallback.',
    ],
  },
  {
    name: 'Smart Home Dashboard',
    stack: 'React 19 · TypeScript · Vite · Tailwind CSS',
    description: [
      'A touch-first wall-tablet dashboard with 10 rearrangeable widgets on a swipeable 12-column grid, a mock-data mode and optional two-way Home Assistant sync.',
    ],
  },
  {
    name: 'Accessible Components Playground',
    stack: 'React · TypeScript · Vite · Tailwind CSS · Radix UI',
    description: [
      'Three accessible components built from scratch (modal dialog, tabs, disclosure) following W3C ARIA authoring guidance, and compared against shadcn/ui equivalents.',
    ],
  },
  {
    name: 'Inbox Reply Monitor (AI Automation)',
    stack: 'n8n · Gmail API · Groq (Llama 3.3) · Docker',
    description: [
      'A containerized pipeline that polls Gmail every 5 minutes and uses Llama 3.3 to classify mail (interview invite, reply, rejection, irrelevant), pushing color-coded alerts to Telegram.',
    ],
  },
  {
    name: 'University HR Management System',
    stack: 'ASP.NET Core · C# · SQL Server',
    description: [
      'A full-stack HR portal with RESTful APIs, multi-level approval workflows and payroll automated through SQL stored procedures and triggers.',
    ],
  },
  {
    name: 'Airline Booking Web App',
    stack: 'JavaScript · MongoDB',
    description: ['REST-backed flight search with dynamic seat-class pricing.'],
  },
  {
    name: 'Jackaroo Board Game Engine',
    stack: 'Java · JUnit',
    description: ['A board game engine with a rule test suite, using the Strategy pattern.'],
  },
  {
    name: 'Cassette Retro Music Player',
    stack: 'HTML5 · CSS3 · JavaScript',
    description: ['A retro player with animated reels synced to playback, online search and custom playlists.'],
  },
  {
    name: 'Travel Website',
    stack: 'Express · EJS · MongoDB · express-session',
    description: ['A server-rendered travel site with session handling.'],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">My Work</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <div className="card-header">
              <h3>{project.name}</h3>
              {project.repo && (
                <button
                  className="source-btn"
                  onClick={() => window.open(project.repo, '_blank', 'noopener,noreferrer')}
                  aria-label="View on GitHub"
                >
                  <GithubIcon className="source-icon" />
                </button>
              )}
            </div>
            <h4>{project.stack}</h4>
            {project.description.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="see-more">
        <button
          className="source-btn"
          onClick={() => window.open('https://github.com/TheQuietBeatle', '_blank', 'noopener,noreferrer')}
          aria-label="See more on GitHub"
        >
         
          <span>See more on GitHub</span> <GithubIcon className="source-icon" />
        </button>
      </div>
    </section>

  );
};
export default Projects;