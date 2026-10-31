    import React from 'react';
    import './ComponentOne.css';

    const skills = [
        {
            category: 'Frontend:',
            items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'Responsive Design'],
        },
        {
            category: 'Backend & Data:',
            items: ['Node.js', 'Express (middleware, CORS)', 'REST API design', 'JWT', 'ASP.NET Core', 'C#', 'PostgreSQL', 'SQL Server', 'MongoDB'],
        },
        {
            category: 'Languages & Testing:',
            items: ['Java', 'Python (NumPy / SciPy)', 'C++', 'Jest', 'JUnit'],
        },
        {
            category: 'Tools & Cloud:',
            items: ['Git', 'GitHub', 'GitHub Copilot', 'VS Code', 'IntelliJ', 'Docker (basic)', 'Microsoft Azure (VMs, Networking)', 'Intune', 'Active Directory'],
        },
        {
            category: 'AI & Automation:',
            items: ['Prompt engineering', 'AI-assisted development (Claude Code)', 'LLM integration (Groq / Llama)', 'n8n', 'Gmail API', 'OAuth2', 'Telegram Bot API'],
        },
        {
            category: 'Spoken Languages:',
            items: ['Arabic (Native)', 'English (Fluent)', 'German (Intermediate)'],
        },
    ];

    const ComponentOne = () => {
        return (
            <div className='skills-section'>
                <div className='row'>
                    <h1 className='col-12'>TECHNICAL SKILLS</h1>
                    {skills.map((group) => (
                        <ul className='col-4' key={group.category}>
                            <li>{group.category}
                                <ul>
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    ))}
                </div>
        </div>

        );
    };
    export default ComponentOne;
