// app/page.tsx
"use client";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

export default function Home() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}
