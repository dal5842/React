function Resume() {
    return (
        <article className="resume-page">
            <header className="page-header">
                <h1>Resume</h1>
                <p>
                    Bachelor of Arts in Digital Media, Arts, and Technology
                    <br />
                    Penn State Behrend — Expected Graduation: May 2027
                </p>
            </header>

            <article className="resume-section">
                <h2>Education</h2>
                <p>
                    <strong>Pennsylvania State University, Behrend College</strong>
                    <br />
                    Bachelor of Arts — Digital Media, Arts, and Technology
                    <br />
                    Expected Graduation: December 2026
                </p>

            </article>

            <article className="resume-section">
                <h2>Work Experience</h2>

                <div className="resume-item">
                    <h3>Digital Collections Intern — Erie Art Museum</h3>
                    <p className="resume-dates">Fall 2024</p>
                    <ul>
                        <li>Digitized and organized archival materials</li>
                        <li>Ensured accessibility and accurate metadata standards</li>
                        <li>Evaluated digital tools used for cultural preservation</li>
                    </ul>
                </div>

                <div className="resume-item">
                    <h3>Activity Aide — Quality Life Services</h3>
                    <ul>
                        <li>Assisted residents with daily activities</li>
                        <li>Helped plan and facilitate group events</li>
                        <li>Provided compassionate support in care settings</li>
                    </ul>
                </div>

                <div className="resume-item">
                    <h3>Data Entry — Access</h3>
                    <ul>
                        <li>Entered and verified sensitive data accurately</li>
                        <li>Maintained confidentiality and attention to detail</li>
                    </ul>
                </div>

                <div className="resume-item">
                    <h3>Team Member — GetGo</h3>
                    <ul>
                        <li>Provided customer service in a fast-paced environment</li>
                        <li>Handled transactions and maintained store organization</li>
                    </ul>
                </div>
            </article>

            <article className="resume-section">
                <h2>Skills</h2>
                    <ul className="skills-list">
                        <li>HTML, CSS, JavaScript</li>
                        <li>React & GitHub Pages</li>
                        <li>SVG & CSS Animation</li>
                        <li>Digital Accessibility Principles</li>
                        <li>Adobe Creative Suite</li>
                        <li>Google & Microsoft Applications</li>
                        <li><a href="https://github.com/dal5842/Portfolio">Link to GitHub Personal Repo Site</a></li>
                        <li><a href="https://dal5842.github.io/Portfolio/">Personal Website Link</a></li>
                        <li><a href="http://www.linkedin.com/in/dannikalove">LinkedIn Profile Link</a></li>
                    </ul>

            </article>

            <article className="resume-section">
                <h2>Leadership & Activities</h2>
                <p>
                    <strong>Secretary — Digital Creations Club</strong>
                    <br />
                    Penn State Behrend
                </p>
            </article>
        </article>
    );
}

export default Resume;