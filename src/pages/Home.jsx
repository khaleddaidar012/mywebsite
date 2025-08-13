import React from 'react'
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
//import { HeroSection } from '../../../../beautiful-react-tailwind-portfolio-main/src/components/HeroSection';

import { HeroSection } from "../components/HeroSection";

import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";

import { ProjectionSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className = "min-h-screen bg-background text-foregroud overflow-x-hidden">
    <ThemeToggle />
    <StarBackground />
    <Navbar />
    {/* Main Content */}
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectionSection />
      <ContactSection />
      <Footer />

    </main>
    
    
    </div>
  )
}

export default Home