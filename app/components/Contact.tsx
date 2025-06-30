"use client";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-10 gradient-text">
                    Get In Touch
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side: paragraph */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Let's work together
                        </h3>
                        <p className="text-gray-400">
                            I'm always interested in new opportunities and
                            exciting projects. Whether you have a question or
                            just want to say hi, feel free to reach out!
                        </p>
                    </div>

                    {/* Right side: contact links */}
                    <div className="space-y-4 text-right">
                        <div className="flex justify-end items-center space-x-4">
                            <span className="text-gray-300">
                                willboo34@gmail.com
                            </span>
                            <Mail className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex justify-end items-center space-x-4">
                            <span className="text-gray-300">
                                github.com/WillBousada
                            </span>
                            <Github className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex justify-end items-center space-x-4">
                            <span className="text-gray-300">
                                linkedin.com/in/WillBousada
                            </span>
                            <Linkedin className="w-5 h-5 text-purple-400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
