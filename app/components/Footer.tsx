"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 bg-gray-800 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 mb-4 md:mb-0">
                        © 2025 William Bousada. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
