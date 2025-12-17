
// src/data.js

export const ClickDisplay = [
    // --- AI / Digital Verification & Code ---
    {
        id: "AINetwork",
        name: "AI Network",
        note: "Network visual related to AI coursework.",
        src: "/images/AINetwork.png",
        kind: "AI & Verification"
    },
    {
        id: "DeepFakeEx",
        name: "Deep Fake Example",
        note: "Deepfake exploration / example image.",
        src: "/images/DeepFakeEx.jpg",
        kind: "AI & Verification"
    },
    {
        id: "DigitalCodeEx",
        name: "Digital Code Example",
        note: "Digital code visualization / experiment.",
        src: "/images/DigitalCodeEx.jpg",
        kind: "AI & Verification"
    },
    {
        id: "VerificationCheckEx",
        name: "Verification Check",
        note: "Verification workflow / check illustration.",
        src: "/images/VerificationCheckEx.png",
        kind: "AI & Verification"
    },

    // --- Titanic / Graphic Series ---
    {
        id: "GandDBelieveIT",
        name: "G & D Believe IT",
        note: "Graphic narrative piece (Believe IT).",
        src: "/images/GandDBelieveIT.png",
        kind: "Graphic Series — Titanic"
    },
    {
        id: "GandDinTitanic",
        name: "G & D in Titanic",
        note: "Series piece set in Titanic.",
        src: "/images/GandDinTitanic.png",
        kind: "Graphic Series — Titanic"
    },
    {
        id: "GandDinTitanicStaircase",
        name: "G & D Titanic Staircase",
        note: "Staircase scene variation.",
        src: "/images/GandDinTitanicStaircase.png",
        kind: "Graphic Series — Titanic"
    },
    {
        id: "KDDGOutsideTitanic",
        name: "KDDG Outside Titanic",
        note: "Exterior shot of the Titanic series.",
        src: "/images/KDDGOutsideTitanic.png",
        kind: "Graphic Series — Titanic"
    },

    // --- Outdoors / Personal ---
    {
        id: "GavinAndIonSkyLift",
        name: "Gavin & I on Sky Lift",
        note: "Sky lift moment.",
        src: "/images/GavinAndIonSkyLift.png",
        kind: "Outdoors & Personal"
    },
    {
        id: "GDSkybridge",
        name: "GD Skybridge",
        note: "Skybridge scene.",
        src: "/images/GDSkybridge.png",
        kind: "Outdoors & Personal"
    },
    {
        id: "GDWalking",
        name: "GD Walking",
        note: "Walking sequence.",
        src: "/images/GDWalking.png",
        kind: "Outdoors & Personal"
    },
    {
        id: "GDWithBear",
        name: "GD With Bear",
        note: "With bear scene.",
        src: "/images/GDWithBear.png",
        kind: "Outdoors & Personal"
    },

    // --- Branding / Marketing ---
    {
        id: "STBusinessCard",
        name: "ST Business Card",
        note: "Business card design for Schmoll's Taxidermy.",
        src: "/images/STBusinessCard.png",
        kind: "Branding & Marketing"
    },
    {
        id: "TaxidermyPoster",
        name: "Taxidermy Poster",
        note: "Poster for Schmoll's Taxidermy.",
        src: "/images/TaxidermyPoster.png",
        kind: "Branding & Marketing"
    },

    // --- Design / Misc Experiments ---
    {
        id: "DMKMargs",
        name: "DMK Margs",
        note: "Design/motion/graphic experiment.",
        src: "/images/DMKMargs.png",
        kind: "Design Experiments"
    },

    // --- Photo Edits (Pre vs Post) ---
    // Cash
    { id: "PreCash", name: "Pre Cash", note: "Before edit.", src: "/images/PreCash.png", kind: "Photo Edits — Pre" },
    { id: "PostCash", name: "Post Cash", note: "After edit.", src: "/images/PostCash.png", kind: "Photo Edits — Post" },

    // Johnny
    { id: "PreJohnny", name: "Pre Johnny", note: "Before edit.", src: "/images/PreJohnny.png", kind: "Photo Edits — Pre" },
    { id: "PostJohnny", name: "Post Johnny", note: "After edit.", src: "/images/PostJohnny.png", kind: "Photo Edits — Post" },

    // Gavin with Beaver
    { id: "PreGavinWithBeaver", name: "Pre Gavin with Beaver", note: "Before edit.", src: "/images/PreGavinWithBeaver.png", kind: "Photo Edits — Pre" },
    { id: "PostGavinWithBeaver", name: "Post Gavin with Beaver", note: "After edit.", src: "/images/PostGavinWithBeaver.png", kind: "Photo Edits — Post" },

    // Gavin with Trucks
    { id: "PreGavinWithTrucks", name: "Pre Gavin with Trucks", note: "Before edit.", src: "/images/PreGavinWithTrucks.png", kind: "Photo Edits — Pre" },
    { id: "PostGavinWithTrucks", name: "Post Gavin with Trucks", note: "After edit.", src: "/images/PostGavinWithTrucks.png", kind: "Photo Edits — Post" },

    // Gavin by Water
    { id: "PreGavinByWater", name: "Pre Gavin by Water", note: "Before edit.", src: "/images/PreGavinByWater.png", kind: "Photo Edits — Pre" },

    // Me with Mnt
    { id: "PreMeWithMnt", name: "Pre Me with Mnt", note: "Before edit.", src: "/images/PreMeWithMnt.png", kind: "Photo Edits — Pre" },
    { id: "PostMeWithMnt", name: "Post Me with Mnt", note: "After edit.", src: "/images/PostMeWithMnt.png", kind: "Photo Edits — Post" }
];

export function sortDisplay(items) {
    return [...items].sort((a, b) => String(a.name).localeCompare(String(b.name)));
}
