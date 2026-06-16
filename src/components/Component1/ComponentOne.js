    import React from 'react';
    import './ComponentOne.css';
    const ComponentOne = () => {
        return (
            <div class =  "width:80% ,   border : 10 px solid black">
                <div className='row'>
                    <h1 className='col-12'>TECHNICAL SKILLS</h1>
                    <ul className='col-4'>    
                        <li>Frontend:</li>
                        <ul className='col-4'>
                        <li>React</li>  
                        <li>JavaScript (ES6+)</li>  
                        <li>HTML5</li>  
                        <li>CSS3</li>  
                        <li>Tailwind</li>  
                        <li>Bootstrap</li>  
                        <li>Responsive Design</li>  
                        </ul>
                    </ul>
                    <ul className='col-4'>    
                        <li>APIs & Data:</li>
                        <ul className='col-4'>
                        <li> REST APIs</li>
                            <li>MongoDB</li> 
                            <li>SQL Server</li> 
                            <li>PostgreSQL</li>
                        </ul>
                    </ul>
                    <ul className='col-4'>    
                        <li>Backend:</li>
                        <ul className='col-4'>
                        <li>ASP.NET Core</li>
                            <li>C#</li> 
                            <li>Node.js (basic)</li> 
                        </ul>
                    </ul>
                    <ul className='col-4'>    
                        <li>Tools:</li>
                        <ul className='col-4'>
                        <li>Git</li>
                        <li>GitHub </li>
                        <li>GitHub Copilot</li>
                        <li>VS Code</li>
                        <li>IntelliJ</li>
                        <li>Docker (basic)</li>
                        </ul>
                    </ul>
                </div>
        </div>

        );
    };
    export default ComponentOne;
