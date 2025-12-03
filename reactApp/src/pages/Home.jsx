import React from "react";

const galleryItems = [
    { src: "https://placebear.com/600/400", alt: "Bear mount", caption: "Majestic Bear" },
    { src: "https://placekitten.com/600/400", alt: "Small mammal mount", caption: "Feline Mount" },
    { src: "https://placebeard.it/600x400", alt: "Custom art mount", caption: "Custom Mount" }
    // Add more items here as needed
];

export default function Gallery() {
    return (
        <section>
            <h2>Gallery of Works</h2>
            <p>Explore our hand-crafted displays, from avian mounts to detailed mammal recreations.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1em", marginTop: "1em" }}>
                {galleryItems.map((item, idx) => (
                    <figure key={idx} style={{ margin: 0 }}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            style={{ borderRadius: "10px", width: "300px", height: "200px", objectFit: "cover" }}
                        />
                        <figcaption style={{ textAlign: "center", marginTop: "0.5em", color: "inherit" }}>
                            {item.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}