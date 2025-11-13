import React from 'react'

export default function Gallery() {
    return (
        <section className="page">
            <h2>Gallery of Works</h2>
            <p>Explore our hand-crafted displays, from avian mounts to detailed mammal recreations.</p>
            <div className="gallery">
                <img src="https://placebear.com/300/200" alt="Bear mount" />
                <img src="https://placekitten.com/300/200" alt="Small mammal mount" />
                <img src="https://placebeard.it/300x200" alt="Custom art mount" />
            </div>
        </section>
    )
}