"use client";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
    const education = [
        {
            degree: "Bacherlor of Computer Science: Software Engineering Stream",
            school: "Carleton University",
            year: "2020 - 2025",
            location: "Ottawa, ON",
            description: "Specialized in Software Engingeering.",
            gpa: "10.0/12",
        },
    ];

    return (
        <section id="education" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
                    Education
                </h2>
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 ${
                                index % 2 === 0
                                    ? "md:pr-8 md:text-right"
                                    : "md:pl-8 md:ml-auto"
                            } md:w-1/2`}
                        >
                            <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full left-6 md:left-auto md:right-0 md:transform md:translate-x-2 top-6"></div>
                            <div className="ml-16 md:ml-0 bg-gray-800 rounded-xl p-6 card-hover">
                                <div className="flex items-start space-x-3 mb-4">
                                    <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            {edu.degree}
                                        </h3>
                                        <h4 className="text-lg text-purple-400">
                                            {edu.school}
                                        </h4>
                                    </div>
                                </div>
                                <div className="text-gray-400 space-y-2 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{edu.year}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-3">
                                    {edu.description}
                                </p>
                                <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    GPA: {edu.gpa}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
