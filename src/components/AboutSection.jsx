import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () =>{

    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Freelancer
                        </h3>
                        <p className="text-muted-foreground">
                            With hands-on experience in full-stack web development, I specialize in building clean, responsive, and user-friendly applications using the MERN stack. I’m passionate about writing efficient code, solving real-world problems, and delivering high-quality digital experiences.
                        </p>
                        <p className="text-muted-foreground">
Passionate about developing innovative and simple solutions to complex problems, and I truly enjoy working on projects that solve real-world challenges. Always eager to learn new skills and technologies to stay ahead in the ever-evolving web landscape.

                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 .justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a href="https://drive.google.com/file/d/1g5DkKFnxYzJWgaRfWn2HE2LyMizUeWcD/view?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                            </a>
                        </div>
                    </div>

<div className="grid grid-cols-1 gap-6">
  {/* Web Development */}
    <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
        <Code className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
        <h4 className="font-semibold text-lg">Web Development</h4>
        <p className="text-muted-foreground">
            Creating responsive, accessible, and high-performance websites and web applications using modern frameworks.
        </p>
        </div>
    </div> 
    </div>

  {/* Freelancing Projects */}
    <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
        <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
        <h4 className="font-semibold text-lg">Freelancing Projects</h4>
        <p className="text-muted-foreground">
            Building a variety of client-focused projects including landing pages, e-commerce stores, custom web apps, and business websites.
        </p>
        </div>
    </div>
    </div>

  {/* Digital Solutions Development */}
    <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
        <User className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
        <h4 className="font-semibold text-lg">Digital Solutions Development</h4>
        <p className="text-muted-foreground">
            Delivering complete digital solutions including custom systems, automation tools, e-commerce platforms, and integration services.
        </p>
        </div>
    </div>
    </div>
</div>

                </div>
            </div>

        </section>

    )
}