"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "contact",
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + height
                    ) {
                        setActiveSection(section);
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <nav className="w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800 fixed top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold gradient-text">
                        William Bousada
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {sections.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize transition-colors hover:text-purple-400 ${
                                    activeSection === item
                                        ? "text-purple-400"
                                        : "text-gray-300"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        {sections.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left py-2 capitalize text-gray-300 hover:text-purple-400"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
