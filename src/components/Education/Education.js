import '../Component2/Componenttwo.css';

const education = [
  {
    school: 'German University in Cairo (GUC)',
    degree: 'B.Sc. in Computer Engineering',
    details: '09/2023 – 06/2027 (expected) · Cairo, Egypt',
  },
  {
    school: 'Manor House School',
    degree: 'IGCSE Section',
    details: '2010 – 2023 · Cairo, Egypt',
  },
];

function Education() {
  return (
    <section className="projects experience-section">
      <h2 className="projects-title">Education</h2>
      <div className="project-grid">
        {education.map((item) => (
          <div className="project-card" key={item.school}>
            <h3>{item.school}</h3>
            <h4>{item.degree}</h4>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
