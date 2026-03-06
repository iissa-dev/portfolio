import { motion } from "motion/react";
import AspImage from "../assets/images/Asp.netCore.jpg";
import WebApiImage from "../assets/images/Microsoft_.Net_Web_API.png";
import JsImage from "../assets/images/JavaScript-logo (1).png";
import Csharp from "../assets/images/Csharp_Logo.png";
import SqlImage from "../assets/images/microsoft-sql-server.jpg";
import reactImage from "../assets/images/React-icon.svg.png";
import typeScript from "../assets/images/Typescript_logo_2020.svg.png";
import tailwindImage from "../assets/images/tailwind.svg";

const BACKEND = [
  {
    image: WebApiImage,
    label: "REST Web API",
    description:
      "Building RESTful APIs to expose data and business logic for client applications.",
  },
  {
    image: AspImage,
    label: "ASP.NET Core",
    description:
      "Modern high-performance framework for building scalable web applications and APIs.",
  },
  {
    image: SqlImage,
    label: "SQL Server (T-SQL)",
    description:
      "Designing relational databases, writing queries, stored procedures, and optimizing performance.",
  },
  {
    image: Csharp,
    label: "C#",
    description:
      "Object-oriented programming language used to build backend services, APIs, and business logic.",
  },
];

const FRONTEND = [
  {
    image: JsImage,
    label: "JavaScript",
    description:
      "Core language of the web used to create dynamic and interactive user interfaces.",
  },
  {
    image: reactImage,
    label: "React (Vite)",
    description:
      "Component-based library for building fast and modern user interfaces.",
  },
  {
    image: typeScript,
    label: "TypeScript",
    description:
      "Typed superset of JavaScript that improves maintainability and scalability.",
  },
  {
    image: tailwindImage,
    label: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapidly building modern responsive designs.",
  },
];

function TechStack() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-1"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tech <span className="text-primary neon-text">Stack</span>
          </h2>
        </motion.div>
        <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
          Technologies, frameworks, and tools I use to build robust and scalable
          applications.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* BACKEND */}
          <div>
            <h3 className="text-xl font-bold mb-6 neon-text text-primary">
              Backend
            </h3>
            <div className="grid gap-5">
              {BACKEND.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel glass-panel-hover rounded-xl p-5 flex gap-4 items-start min-h-27.5"
                >
                  <img
                    src={tech.image}
                    alt={tech.label}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{tech.label}</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FRONTEND */}
          <div>
            <h3 className="text-xl font-bold mb-6 neon-text-purple text-secondary">
              Frontend
            </h3>
            <div className="grid gap-5">
              {FRONTEND.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel glass-panel-hover rounded-xl p-5 flex gap-4 items-start min-h-27.5"
                >
                  <img
                    src={tech.image}
                    alt={tech.label}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{tech.label}</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
