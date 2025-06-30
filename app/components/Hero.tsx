"use client";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Hey, I'm <span className="gradient-text">William</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Full Stack Developer
                </p>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    An ethusiatic programmer that is passionate about full stack
                    web development and is looking to further my technical skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="px-8 py-3 border border-gray-600 rounded-full hover:border-purple-400 hover:text-purple-400 transition-all"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={32} className="text-gray-400" />
            </div>
        </section>
    );
}
