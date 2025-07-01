"use client";
import {
    Github,
    Linkedin,
    Mail,
    Code,
    Palette,
    Smartphone,
    ExternalLink,
} from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-1">
                            <div className="bg-gray-900 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4">
                                    My Journey
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    I'm a fourth-year Computer Science student
                                    at Carleton University, specializing in
                                    Software Engineering. Through my co-op
                                    placements and side projects, I’ve gained
                                    hands-on experience building full-stack
                                    applications using technologies like Vue.js,
                                    Laravel, React, and MongoDB.
                                </p>
                                <p className="text-gray-300 mb-6">
                                    Whether it's developing a CRM at Mortgage
                                    Brokers Ottawa or building my own
                                    expense-tracking app <strong>Feeme</strong>,
                                    I love creating software that solves real
                                    problems. Outside of tech, I’m passionate
                                    about sports and value quality time with my
                                    family and friends — they keep me grounded
                                    and motivated.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/WillBousada"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/william-bousada-950b4823b"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                                    </a>
                                    <a href="mailto:willboo34@gmail.com">
                                        <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            {
                                icon: Code,
                                title: "Clean Code",
                                desc: "Writing maintainable, scalable code",
                            },
                            {
                                icon: Palette,
                                title: "Modern Design",
                                desc: "Creating beautiful user interfaces",
                            },
                            {
                                icon: Smartphone,
                                title: "Responsive",
                                desc: "Mobile-first approach",
                            },
                            {
                                icon: ExternalLink,
                                title: "Performance",
                                desc: "Optimized for speed",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-xl card-hover"
                            >
                                <item.icon className="w-8 h-8 text-purple-400 mb-4" />
                                <h4 className="font-semibold mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
