
// src/pages/Gallery.jsx
import { useMemo, useState } from "react";
import { ClickDisplay, sortDisplay } from "../data.js";
import "../App.css"; // adjust this path if App.css lives elsewhere

function List({ selectedKind }) {
    const filtered = useMemo(() => {
        const byKind = ClickDisplay.filter((pic) => pic.kind === selectedKind);
        return sortDisplay(byKind);
    }, [selectedKind]);

    if (!filtered.length) {
        return (
            <section className="gallery-grid">
                <p className="empty-state">
                    No images found for <strong>{selectedKind}</strong>. Update your entries in{" "}
                    <code>src/data.js</code>.
                </p>
            </section>
        );
    }

    return (
        <section className="gallery-grid">
            {filtered.map((pic) => (
                <article className="gallery-card" key={pic.id}>
                    <figure className="gallery-figure">
                        <img className="gallery-img" src={pic.src} alt={pic.name} loading="lazy" />
                        <figcaption className="gallery-caption">
                            <span className="strong">{pic.name}:</span> {pic.note}
                        </figcaption>
                    </figure>
                </article>
            ))}
        </section>
    );
}

function Selector({ selectedKind, setSelectedKind }) {
    // Build distinct kinds from data
    const kinds = useMemo(() => {
        const distinct = [...new Set(ClickDisplay.map((pic) => pic.kind))];
        return distinct.sort((a, b) => a.localeCompare(b));
    }, []);

    return (
        <>
            <div className="selectionBar" role="radiogroup" aria-label="Choose a gallery category">
                {kinds.map((kind) => (
                    <label key={kind} className="select-label">
                        <input
                            type="radio"
                            name="choosePic"
                            value={kind}
                            checked={selectedKind === kind}
                            onChange={(e) => setSelectedKind(e.target.value)}
                        />
                        <span>{kind}</span>
                    </label>
                ))}
            </div>
            <p className="selection-text">
                Selection: <strong>{selectedKind}</strong>
            </p>
        </>
    );
}


export default function Gallery() {
    const initialKind = ClickDisplay.length ? ClickDisplay[0].kind : 'All';
    const [selectedKind, setSelectedKind] = useState(initialKind);

    return (
        <section className="gallery-page">
            <header className="page-header">
                <h1>Project Gallery</h1>
                <p>
                    This gallery highlights selected projects from this semester that
                    demonstrate experimentation with interactive, animated, and user‑focused
                    web technologies.
                </p>
            </header>

            <Selector selectedKind={selectedKind} setSelectedKind={setSelectedKind} />
            <List selectedKind={selectedKind} />

            <div className="gallery-grid static-section">
                <article className="gallery-card">
                    <h2>Animated SVG & CSS Experiments</h2>
                    <p>
                        Visual experiments using animated SVGs, hover effects, and CSS transitions to explore motion,
                        feedback, and engagement in web design.
                    </p>
                    <ul>
                        <li>SVG hover animations</li>
                        <li>CSS transitions and transforms</li>
                        <li>Motion used to guide user attention</li>
                    </ul>
                    <a href="/tech-guide" className="gallery-link" ></a>
                </article>
            </div>

            <article className="gallery-card">
                <h2>React Multi-Page Portfolio</h2>
                <p>
                    This portfolio is a React application, using client-side routing to present content across
                    multiple pages while maintaining a consistent visual identity.
                </p>
                <ul>
                    <li>React Router multi-page structure</li>
                    <li>Reusable components</li>
                    <li>Keyboard and screen-reader friendly navigation</li>
                </ul>
            </article>

            <article className="gallery-card">
                <h2>Visual Design & Branding</h2>
                <p>
                    A cohesive visual identity developed across projects using color, typography, spacing, and
                    motion to reinforce clarity and usability.
                </p>
                <ul>
                    <li>Consistent color palette</li>
                    <li>Intentional layout spacing</li>
                    <li>Design decisions guided by accessibility</li>
                </ul>
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
    );}