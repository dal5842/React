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
            <article className="about-section">
                <h2>Licensing</h2>
                <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
                    <a property="dct:title" rel="cc:attributionURL"
                       href="http://dal5842.github.io/Portfolio/">Dannika's Portfolio</a> by <a
                    rel="cc:attributionURL dct:creator" property="cc:attributionName"
                    href="https://github.com/dal5842/Portfolio">Dannika Love</a> is licensed under
                    <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
                       target="_blank" rel="license noopener noreferrer" style="display:inline-block;"
                    >CC BY-NC-ND 4.0 <img
                        style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                        src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                        alt="" />
                        <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                             alt="" />
                        <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                             alt="" />
                        <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
                             alt="" /></a></p>
                <a href="https://www.aihonestybadge.com" target="_blank" rel="noopener"><img src="https://www.aihonestybadge.com/badges/ai-assisted.svg" alt="AI Assisted Badge" style="max-width: 190px; height: auto;" /></a>
            </article>
        </article>
    );
}

export default Resume;