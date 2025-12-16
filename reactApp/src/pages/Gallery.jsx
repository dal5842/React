function Gallery() {
    return (
        <section className="gallery-page">
            <header className="page-header">
                <h1>Project Gallery</h1>
                <p>
                    This gallery highlights selected projects from this semester that
                    demonstrate experimentation with interactive, animated, and
                    user-focused web technologies.
                </p>
            </header>

            <div className="gallery-grid">
                {/* Project 1 */}
                <article className="gallery-card">
                    <h2>Interactive Tech Issue Guide</h2>
                    <p>
                        A multi-page resource guide exploring artificial intelligence,
                        ethics, and digital culture. Built with structured navigation,
                        visual hierarchy, and accessible design principles.
                    </p>
                    <ul>
                        <li>Structured research presentation</li>
                        <li>Semantic HTML and accessibility-first layout</li>
                        <li>Designed for non-technical audiences</li>
                    </ul>
                    <a
                        href="/tech-guide"
                        className="gallery-link"
                        aria-label="View the Tech Issue Resource Guide"
                    >
                        View Project →
                    </a>
                </article>

                {/* Project 2 */}
                <article className="gallery-card">
                    <h2>Animated SVG & CSS Experiments</h2>
                    <p>
                        A series of visual experiments using animated SVGs, hover effects,
                        and CSS transitions to explore motion, feedback, and engagement in
                        web design.
                    </p>
                    <ul>
                        <li>SVG hover animations</li>
                        <li>CSS transitions and transforms</li>
                        <li>Motion used to guide user attention</li>
                    </ul>
                </article>

                {/* Project 3 */}
                <article className="gallery-card">
                    <h2>React Multi-Page Portfolio</h2>
                    <p>
                        This portfolio itself is a React application, using client-side
                        routing to present content across multiple pages while maintaining
                        a consistent visual identity.
                    </p>
                    <ul>
                        <li>React Router multi-page structure</li>
                        <li>Reusable components</li>
                        <li>Keyboard and screen-reader friendly navigation</li>
                    </ul>
                </article>

                {/* Project 4 */}
                <article className="gallery-card">
                    <h2>Visual Design & Branding</h2>
                    <p>
                        A cohesive visual identity developed across projects using color,
                        typography, spacing, and motion to reinforce clarity and usability.
                    </p>
                    <ul>
                        <li>Consistent color palette</li>
                        <li>Intentional layout spacing</li>
                        <li>Design decisions guided by accessibility</li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Gallery;