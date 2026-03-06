import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import firstProject from "../assets/images/firstProject.png";
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string | null;
  techStack: string[];
}
const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Maintenance Task Tracker",
    description:
      "Full-stack app with ASP.NET Core and React, featuring a decoupled Service–Repository architecture, EF Core for data, a dynamic analytics dashboard, reusable React hooks, and a unified Result Pattern for consistent API handling.",
    imageUrl: firstProject,
    githubUrl: "https://github.com/iissa-dev/Maintenance-Task-Tracker",
    liveUrl: null,
    techStack: [
      ".NET 10",
      "EF Core",
      "React TS",
      "SQL Server",
      "Service-Repository Pattern",
      "Web API",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-black/20 relative border-y border-white/5"
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
            A selection of my recent work focusing on backend architecture and
            full-stack integration.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl glass-panel overflow-hidden flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay duration-500" />
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-accent flex items-center justify-center">
                    <span className="text-muted-foreground font-mono">
                      No Image
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-lg neon-border p-1 w-5! h-5! rounded-full"
                      />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
