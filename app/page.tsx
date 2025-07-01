// app/page.tsx
"use client";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeIn";
import Starfield from "./components/Starfield";

export default function Home() {
    return (
        <div id="home" className="relative bg-gray-900 text-white min-h-screen">
            <Starfield />
            <Navbar />
            <Hero />
            <FadeInSection>
                <About />
            </FadeInSection>
            <FadeInSection delay={0.1}>
                <Education />
            </FadeInSection>
            <FadeInSection delay={0.2}>
                <Skills />
            </FadeInSection>
            <FadeInSection delay={0.3}>
                <Projects />
            </FadeInSection>
            <FadeInSection delay={0.4}>
                <Contact />
            </FadeInSection>
            <Footer />
            <BackToTop />
        </div>
    );
}
