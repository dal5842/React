function Home() {
    return (
        <section className="home-page">
            <header className="hero">
                <h1>Dannika Love</h1>
                <p className="hero-tagline">
                    Digital Media, Arts, and Technology Student
                    <br />
                    Interactive Design • Web Development • Creative Technology
                </p>
            </header>

            <article className="home-intro">
                <h2>About This Site</h2>
                <p>
                    This multi-page React website serves as a digital portfolio showcasing
                    projects developed throughout the semester. It highlights experimentation
                    with interactive and animated technologies, thoughtful design practices,
                    and accessibility-focused development.
                </p>
                <p>
                    The site is designed for instructors, peers, and potential collaborators
                    who are interested in how creative and technical practices intersect in
                    digital media.
                </p>
            </article>

            <article className="home-highlights">
                <h2>Featured Work</h2>

                <ul>
                    <li>
                        <strong>Tech Issue Resource Guide:</strong> A structured, accessible guide
                        that introduces a contemporary digital technology issue to a
                        non-technical audience using curated sources and clear explanations.
                    </li>

                    <li>
                        <strong>Interactive & Animated Experiments:</strong> Projects exploring
                        motion, SVG animation, and visual feedback using JavaScript and CSS.
                    </li>

                    <li>
                        <strong>React Multi-Page Portfolio:</strong> This site itself is built
                        with React and client-side routing, demonstrating component-based
                        architecture and reusable design patterns.
                    </li>
                </ul>
            </article>

            <article className="home-navigation">
                <h2>Explore the Site</h2>
                <p>
                    Use the navigation menu to explore project documentation, the resource
                    guide, and professional materials.
                </p>
            </article>
        </section>
    );
}

export default Home;