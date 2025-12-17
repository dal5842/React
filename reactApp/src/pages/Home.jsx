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
        </section>
    );
}

export default Home;