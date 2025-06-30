"use client";

import React from "react";

const skillColors: Record<string, string> = {
    Render: "#000000",
    Vercel: "#000000",
    C: "#A8B9CC",
    "C++": "#00599C",
    HTML5: "#E34F26",
    Java: "#007396",
    JavaScript: "#F7DF1E",
    Python: "#3776AB",
    PHP: "#777BB4",
    Bootstrap: "#7952B3",
    "Chart.js": "#FF6384",
    "Express.js": "#000000",
    JWT: "#000000",
    Laravel: "#FF2D20",
    NPM: "#CB3837",
    NodeJS: "#339933",
    "Next JS": "#000000",
    Nodemon: "#76D04B",
    React: "#61DAFB",
    SASS: "#CC6699",
    Vite: "#646CFF",
    "Vue.js": "#4FC08D",
    MongoDB: "#47A248",
    MySQL: "#4479A1",
    Figma: "#F24E1E",
    PyTorch: "#EE4C2C",
    NumPy: "#013243",
    Pandas: "#150458",
    Babel: "#F9DC3E",
    ESLint: "#4B32C3",
    Jira: "#0052CC",
};

function getTextColor(bgColor: string) {
    // Simple luminance check to decide if text should be black or white
    const c = bgColor.substring(1); // strip #
    const rgb = parseInt(c, 16); // convert to integer
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186 ? "black" : "white";
}

export default function Skills() {
    const skills = Object.entries(skillColors).map(([name, color]) => ({
        name,
        color,
    }));

    return (
        <section id="skills" className="py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
                    Skills & Technologies
                </h2>
                <div className="flex flex-wrap justify-center gap-1">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="px-2 py-1 rounded-md text-xs font-semibold cursor-default"
                            style={{
                                backgroundColor: skill.color,
                                color: getTextColor(skill.color),
                            }}
                            title={skill.name}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
