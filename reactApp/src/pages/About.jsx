function About() {
    return (
        <section className="about-page">
            <header className="page-header">
                <h1>About Me</h1>
            </header>

            <article className="about-section">
                <p>
                    I am a Digital Media, Arts, and Technology student at Penn State Behrend
                    with an interest in interactive design, web development, and creative
                    technology. My work explores how technical systems and visual design
                    can work together to create engaging, accessible user experiences.
                </p>

                <p>
                    This portfolio represents projects completed throughout the semester
                    and reflects my growth in working with front-end technologies,
                    animation, and component-based development.
                </p>
            </article>

            <article className="about-section">
                <h2>Academic Focus</h2>
                <p>
                    My coursework emphasizes both creative experimentation and technical
                    structure. I am especially interested in projects that combine
                    research, design, and interactivity, allowing users to explore complex
                    topics through clear visual and navigational systems.
                </p>
            </article>

            <article className="about-section">
                <h2>Design Approach</h2>
                <p>
                    I focus on intentional design choices that prioritize usability and
                    accessibility. Whether working with static layouts or interactive
                    elements, I aim to ensure that design decisions support clarity rather
                    than distraction.
                </p>
                <p>
                    Accessibility principles guide my work, including readable contrast,
                    meaningful structure, and interfaces that remain usable across devices
                    and input methods.
                </p>
            </article>

            <article className="about-section">
                <h2>Technical Interests</h2>
                <ul>
                    <li>Front-end web development</li>
                    <li>React and component-based design</li>
                    <li>SVG and CSS animation</li>
                    <li>Digital accessibility and inclusive design</li>
                    <li>Creative coding and experimentation</li>
                </ul>
            </article>
        </section>
    );
}

export default About;