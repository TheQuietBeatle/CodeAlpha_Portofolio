import './Componenttwo.css';

const experience = [
  {
    role: 'Full Stack Engineer Intern',
    company: 'OGTech for ID Systems & IT',
    details: '08/2026 – 10/2026 · Cairo',
    points: [
      'Built NurseryLink with one teammate: a full-stack nursery management app with parent, teacher and admin portals (React 19, TypeScript, Node.js / Express, PostgreSQL).',
      'Designed a 45-endpoint REST API in Express 5 over an 18-table PostgreSQL schema, using raw SQL with no ORM.',
      'Cut the teacher dashboard from one request per child to a single query by joining attendance, temperatures, meals and toilet visits with LEFT JOIN LATERAL.',
      'Added JWT authentication and privilege checks across 14 of 15 route modules, and moved all client calls into one shared fetch helper.',
      'Restructured a single-file API into routes, controllers and middleware without breaking the frontend.',
    ],
  },
  {
    role: 'AI Engineering Intern — Front-End Track',
    company: 'FlyRank AI',
    details: '08/2026 – Present',
    points: [
      'Engineered an offline-first sync module for a nursery-management PWA by building an IndexedDB outbox with exponential-backoff retries and captive-portal detection.',
    ],
  },
  {
    role: 'Core Network & Security Operations Intern',
    company: 'Orange Egypt',
    details: '08/2026 – 09/2026 · Smart Village, Giza',
    points: [
      'Evaluated firewall architectures (packet filtering, stateful inspection, proxy, NGFW) and analyzed data flow across the OSI and TCP/IP models.',
    ],
  },
  {
    role: 'Software Engineering Trainee',
    company: 'Fuzetek',
    details: '06/2025 – 10/2025',
    points: [
      'Completed a 140-hour, project-based internship strengthening skills in C++, Object-Oriented Programming, Data Structures & Algorithms, software testing and database management.',
      'Collaborated with a team on applied problem-solving tasks.',
    ],
  },
  {
    role: 'Information Technology Technician Intern',
    company: 'Orascom Construction PLC',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-CJVHczAGJuBDmwy82ja7BOvfhbuShBM-qMUMro5-Q&s=10',
    details: '07/2025 – 08/2025 · Cairo',
    points: [
      'Earned the Microsoft AZ-900 certification during the internship.',
      'Provisioned and managed Azure Virtual Machines with autoscaling, handling resource allocation.',
      'Automated endpoint compliance in Microsoft Intune, including device compliance, security policies and software deployment.',
      'Administered Active Directory (AD DS) for user provisioning, Group Policy and authentication.',
      'Monitored enterprise infrastructure using SCOM, analyzing alerts and troubleshooting to ensure high service availability.',
      'Documented IT procedures and assisted in incident response and system updates.',
    ],
  },
];

function PROFESSIONAL_EXPERIENCE() {
  return (
    <>
    <section className="projects experience-section">
      <h2 className="projects-title">My Professional Experience</h2>
      <div className="project-grid">
        {experience.map((job) => (
          <div className="project-card" key={job.company}>
            <div className="card-header">
              <h3>{job.role}</h3>
              {job.logo && (
                <h4><img src={job.logo} alt={`${job.company} logo`} className="company-logo" /></h4>
              )}
            </div>
            <h4>{job.company} · {job.details}</h4>
            {job.points.map((point) => (
              <p key={point}>– {point}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default PROFESSIONAL_EXPERIENCE;
