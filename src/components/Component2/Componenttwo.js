import './Componenttwo.css';

function PROFESSIONAL_EXPERIENCE() {
  return (
    <>
    <section className="projects experience-section">
      <h2 className="projects-title">My Professional Experience</h2>
      <div className="project-grid">
        
        <div className="project-card">
          
          <div className="card-header">
            <h3>IT Infrastructure Intern</h3>
            <h4><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-CJVHczAGJuBDmwy82ja7BOvfhbuShBM-qMUMro5-Q&s=10"
                alt="Orascom Construction logo"
                className="company-logo"
              /></h4>
            
          </div>
          <h4>Orascom Construction 07/2025 – 08/2025 · Cairo </h4>
          <p> – EarnedMicrosoft AZ-900certification independently during the internship, validating applied knowledge of Azure cloud governance, security, and networking in a live enterprise environment.</p>
              <p>  – Automated endpoint compliance policies in Microsoft Intune, reducing manual device-review workload across a fleet of managed enterprise devices.</p>
              <p>  – Provisioned and right-sized Azure Virtual Machines using resource tagging and autoscaling rules to optimise cloud compute spend.</p>
              <p>  – Administered Active Directory (AD DS) managing GPO policies, user provisioning, and access-control groups to maintain zero unauthorised-access incidents.</p>
             <p>   – Documented IT procedures and incident runbooks, accelerating Tier-1 response and reducing escalation rate.
                          </p>
                          
        </div>
      </div>
    </section>
    </>
  );
}

export default PROFESSIONAL_EXPERIENCE;