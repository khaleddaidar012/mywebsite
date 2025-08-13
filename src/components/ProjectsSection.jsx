import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [    
        {
        id: 2,
        title: "Hero Section with AI Content Generator",
        description: "Hero section challenge solution for an interview process",
        image: "/2.PNG",
        tags: ["React", "TailwindCSS", "ChatGPT"],
        demoUrl: "#",
        githubUrl: "https://github.com/khaleddaidar012/Hero_section_Challenge"
    },   {
        id: 3,
        title: "Task Manager",
        description: "A simple app to add, edit, and delete tasks easily",
        image: "/3.PNG",
        tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://khaleddaidar012.github.io/Shop_coffe/",
        githubUrl: "https://github.com/khaleddaidar012/Task_manger"
    },
    {
        id: 1,
        title: "Coffee Shop Website",
        description: "Responsive coffee shop website design",
        image: "/1.PNG",
        tags: ["React",,"CSS"],
        demoUrl: "https://khaleddaidar012.github.io/Shop_coffe/",
        githubUrl: "https://github.com/khaleddaidar012/Shop_coffe"
    },

    {
        id: 4,
        title: "JWT Authentication Basic Implementation",
        description: "A basic implementation of JWT authentication for secure user login and protected routes",
        image: "/4.PNG",
        tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://khaleddaidar012.github.io/Shop_coffe/",
        githubUrl: "https://github.com/khaleddaidar012/Shop_coffe"
    },

    {
        id: 5,
        title: "Car Sales Website",
        description: "A responsive website for browsing, comparing, and purchasing cars online",
        image: "/5.PNG",
        tags: ["React" ,"CSS" ],
        demoUrl: "#",
        githubUrl: "#"
    },
];

export const ProjectionSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="ground bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/khaleddaidar012"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
