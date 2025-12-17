function TechGuide() {
    return (
        <section className="tech-guide-page">
            <header className="page-header">
                <h1>Tech Issue Resource Guide</h1>
                <p>
                    This guide introduces a current digital technology issue to a
                    non-technical audience by breaking down complex ideas into clear,
                    accessible sections supported by curated sources.
                </p>
            </header>

            <article className="guide-section">
                <h2>Audience & Purpose</h2>
                <p>
                    This resource is designed for students, educators, and general readers
                    who may not have a technical background but want to better understand
                    how emerging technologies shape culture, ethics, and everyday life.
                </p>
                <p>
                    Rather than overwhelming readers with jargon, this guide emphasizes
                    clarity, usability, and visual structure to support learning and
                    accessibility.
                </p>
            </article>

            <article className="guide-section">
                <h2>Issue Overview</h2>
                <p>
                    Artificial intelligence systems are increasingly embedded into daily
                    life through recommendation algorithms, image generation tools, and
                    automated decision-making systems. While these technologies promise
                    efficiency and creativity, they also raise serious ethical concerns.
                </p>
                <p>
                    Key issues include bias in training data, lack of transparency,
                    environmental costs, and the impact of automation on labor and creative
                    work.
                </p>
            </article>

            <article className="guide-section">
                <h2>Why This Issue Matters</h2>
                <ul>
                    <li>AI systems can reinforce social bias when trained on unequal data</li>
                    <li>Automated tools affect who gets visibility, resources, and power</li>
                    <li>Creative labor is increasingly mediated by algorithmic systems</li>
                    <li>Many users interact with AI without understanding how it works</li>
                </ul>
            </article>

            <article className="guide-section">
                <h2>Key Resources</h2>
                <p>
                    The following sources were selected to provide multiple perspectives,
                    including technical explanations, ethical critiques, and cultural
                    analysis.
                </p>

                <ul className="resource-list">
                    <li>
                        <a
                            href="https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ProPublica — Machine Bias
                        </a>
                        <p>
                            An investigative report examining how algorithmic systems can
                            reinforce racial bias in criminal justice.
                        </p>
                    </li>

                    <li>
                        <a
                            href="https://www.theverge.com/2023/3/13/23637690/ai-art-copyright-lawsuit-stable-diffusion-midjourney"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Verge — AI Art & Copyright
                        </a>
                        <p>
                            An overview of ongoing legal and ethical debates surrounding
                            generative AI and creative ownership.
                        </p>
                    </li>

                    <li>
                        <a
                            href="https://www.brookings.edu/articles/how-artificial-intelligence-is-transforming-the-world/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Brookings Institution — AI & Society
                        </a>
                        <p>
                            A high-level explanation of how AI technologies impact economics,
                            policy, and daily life.
                        </p>
                    </li>
                </ul>
            </article>

            <article className="guide-section">
                <h2>Design & Accessibility Considerations</h2>
                <p>
                    This guide follows accessibility principles by using clear headings,
                    readable contrast, descriptive links, and a logical reading order. The
                    layout is designed to support screen readers and keyboard navigation.
                </p>
                <p>
                    Motion and interactivity are used sparingly to enhance understanding,
                    not distract from content.
                </p>
            </article>

            <article className="guide-section">
                <h2>Conclusion</h2>
                <p>
                    Understanding how artificial intelligence systems work — and how they
                    affect people — is essential as these technologies become more
                    pervasive. This guide encourages readers to engage critically with AI
                    rather than accept it as a neutral or inevitable force.
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

export default TechGuide;