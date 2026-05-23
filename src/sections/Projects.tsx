import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CodeXml,
  FileText,
  ArrowUpRight,
  Terminal,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import dashboard from "../assets/images/dashboard.png";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl: string;
  liveUrl: string | null;
  techStack: string[];
  icon: any;
}

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Maintenance Task Tracker",
    description:
      "A full-stack maintenance tracking suite built with Clean Architecture. Features an isolated Domain & Application layer, EF Core Infrastructure, real-time status updates via SignalR hubs, JWT authentication, and a modular React frontend optimized with React Query and TailwindCSS.",
    imageUrl: dashboard,
    githubUrl: "https://github.com/iissa-dev/Maintenance-Task-Tracker",
    liveUrl: null,
    techStack: [
      ".NET 10",
      "Clean Architecture",
      "EF Core",
      "SQL Server",
      "React TS",
      "React Query",
      "TailwindCSS",
      "SignalR",
      "Web API",
    ],
    icon: Layers,
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "A full-stack libraryMS suite built with Clean Architecture. Features an isolated Domain & Application layer, EF Core Infrastructure, real-time status updates via SignalR hubs, JWT authentication, and a modular React frontend optimized with React Query and TailwindCSS.",
    githubUrl: "https://github.com/iissa-dev/LibraryMS",
    liveUrl: null,
    techStack: [
      ".NET 10",
      "Clean Architecture",
      "EF Core",
      "SQL Server",
      "React TS",
      "React Query",
      "TailwindCSS",
      "SignalR",
      "Web API",
    ],
    icon: Layers,
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(MOCK_PROJECTS[0]);

  const sideProjects = MOCK_PROJECTS.filter((p) => p.id !== activeProject.id);

  return (
    <section
      id="projects"
      className="py-24 bg-black/30 border-t border-white/5 relative border-y"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-primary neon-text">Projects</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm max-w-2xl">
            Click on any side card to preview the architectural deep-dive in the
            main view.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl glass-panel p-6 flex flex-col justify-between hover:border-primary/30 transition-all duration-500 h-full min-h-145"
              >
                <div>
                  {activeProject.imageUrl ? (
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 border border-white/5 bg-[#151b2d]">
                      <img
                        src={activeProject.imageUrl}
                        alt={activeProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#151b2d]/80 via-transparent to-transparent"></div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-accent flex items-center justify-center">
                      <span className="text-muted-foreground font-mono">
                        In Progress
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold font-display text-white">
                      {activeProject.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CodeXml
                        size={18}
                        className="hover:text-primary cursor-pointer"
                      />
                      <FileText
                        size={18}
                        className="hover:text-secondary cursor-pointer"
                      />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-2xl">
                    {activeProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-primary border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-4">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                      View on GitHub
                    </a>
                    <span className="text-white/20">|</span>
                    <span className="text-xs font-mono text-muted-foreground">
                      LinkedIn Reference
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary/60 bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                    Active View
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Project */}
          <div className="flex flex-col gap-6 lg:col-span-1 justify-between">
            {sideProjects.map((project) => {
              const IconComponent = project.icon || Terminal;
              return (
                <motion.div
                  key={project.id}
                  layout
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveProject(project)}
                  className="flex-1 rounded-3xl glass-panel p-6 flex flex-col justify-between hover:border-secondary/50 cursor-pointer transition-all duration-300 group relative overflow-hidden bg-white/1"
                >
                  <div className="absolute right-0 top-0 text-white/2 font-mono text-xs select-none pointer-events-none p-4 text-right hidden sm:block">
                    <code>{"{ action: 'click_to_swap' }"}</code>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-secondary group-hover:text-primary transition-colors">
                        <IconComponent size={22} />
                      </div>
                      <div className="text-[10px] font-mono tracking-wider text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-white/5 group-hover:text-secondary transition-colors">
                        Swap View
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[11px] font-mono px-1.5 py-0.5 text-white/30">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] font-mono tracking-wider uppercase text-muted-foreground group-hover:text-secondary transition-colors">
                      PREVIEW ARCHITECTURE <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
