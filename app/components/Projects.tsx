"use client";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Feeme",
            desc: "Full-stack expense management solution with Vuejs, Node.js, and Stripe integration",
            tech: [
                "Vuejs",
                "Boostrap",
                "Node.js",
                "MongoDB",
                "Express",
                "Mongoose",
                "JWT",
                "Stripe",
                "OnRender",
                "Sendgrid",
            ],
            link: "https://feeme.ca",
            code: "https://github.com/WillBousada",
            image: "bg-gradient-to-br from-green-500 to-blue-500",
        },
        {
            title: "Krew Home Inspectors",
            desc: "Home Inspection Booking website.",
            tech: ["React", "Tailwind", "Vercel"],
            link: "https://www.krewhomeinspectors.ca/",
            code: "https://github.com/WillBousada",
            image: "bg-gradient-to-br from-purple-500 to-pink-500",
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`fade-in-delay-${index} flex flex-col bg-gray-800 rounded-xl overflow-hidden card-hover`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="flex flex-col justify-between flex-grow p-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex space-x-4 mt-auto">
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300"
                                    >
                                        <Github size={16} />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                                    >
                                        <ExternalLink size={16} />
                                        <span>Link</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
