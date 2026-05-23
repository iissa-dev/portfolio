import { motion } from "motion/react";
// import AspImage from "../assets/images/Asp.netCore.jpg";
import {
  CodeXml,
  SquareDashedBottomCode,
  Database,
  RadioTower,
  PanelsTopLeft,
  FileType,
  VectorSquare,
  FileBracesCorner,
} from "lucide-react";

const TechStack2 = () => {
  const mainIconStyle = "bg-primary/20 rounded-md p-2";
  const mainIconStyleSecondary = "bg-secondary/20 rounded-md p-2";
  const mainCardStyle =
    "rounded-3xl glass-panel hover:border-primary/30 transition-all duration-500 p-4";
  const mainCardStyleSecondary =
    "rounded-3xl glass-panel hover:border-secondary/30 transition-all duration-500 p-4";
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* {Page Header} */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
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
        {/* {Tech Stack Container} */}
        <div className="grid md:grid-cols-1 gap-10 mt-10">
          {/* {Back End} */}
          <div>
            <div className="mb-4 border-l-2 border-primary px-2 p-2 rounded-r-lg">
              <h3 className="text-2xl font-bold ">BACKEND_LAYER</h3>
            </div>
            <div className="grid md:grid-cols-4 grid-rows-2 gap-4">
              <div
                className={`md:col-span-2 md:row-span-2 group rounded-3xl flex flex-col ${mainCardStyle}`}
              >
                <CodeXml size={50} className={`${mainIconStyle} mb-4`} />
                <h3 className="font-bold mb-1">ASP.NET Core</h3>
                <p className="text-muted-foreground mb-4">
                  Modern high-performance framework for building scalable web
                  applications and APIs.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2 text-[12px]">
                    <p className="">EXPERTISE_LEVEL</p>
                    <span className="text-primary">95%</span>
                  </div>
                  <div className="glass-panel w-full h-2 rounded-2xl">
                    <div
                      style={{ width: "95%" }}
                      className="bg-primary h-2 rounded-2xl"
                    ></div>
                  </div>
                </div>
              </div>
              <div className={`md:col-span-2 md:row-span-1 ${mainCardStyle}`}>
                <div className="flex items-center gap-3 font-bold mb-3">
                  <SquareDashedBottomCode size={50} className={mainIconStyle} />
                  <h3 className="font-bold">C# Engin</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Typed precision for complex business logic and enterpies-grade
                  scalability
                </p>
                <div className="flex items-center text-[12px] gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-primary border border-primary/20">
                    OOP
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-primary border border-primary/20">
                    LINQ
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-primary border border-primary/20">
                    ASYNIC
                  </span>
                </div>
              </div>
              <div className={`${mainCardStyle}`}>
                <Database size={50} className={`${mainIconStyle} mb-4`} />
                <h3 className="font-bold mb-1">SQL SERVER</h3>
                <p className="text-muted-foreground">
                  Designing relational databases
                </p>
              </div>
              <div className={`${mainCardStyle}`}>
                <RadioTower size={50} className={`${mainIconStyle} mb-4`} />
                <h3 className="font-bold mb-1">REST API</h3>
                <p className="text-muted-foreground">Building RESTful APIs</p>
              </div>
            </div>
          </div>
          {/* {Font End} */}
          <div>
            <div className="mb-4 border-l-2 border-secondary px-2 p-2 rounded-r-lg">
              <h3 className="text-2xl font-bold ">FRONTEND_LAYER</h3>
            </div>
            <div className="grid md:grid-cols-4 grid-rows-2 gap-4">
              <div
                className={`md:col-span-2 md:row-span-2 group rounded-3xl flex flex-col ${mainCardStyleSecondary}`}
              >
                <PanelsTopLeft
                  size={50}
                  className={`${mainIconStyleSecondary} mb-4`}
                />
                <h3 className="font-bold mb-1">React Ecosystem</h3>
                <p className="text-muted-foreground mb-4">
                  Developing interactive, high-fidelity neural-interfaces.
                  Specializing in component modularity, state synchronization,
                  and reactive UI architectures.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2 text-[12px]">
                    <p className="">EXPERTISE_LEVEL</p>
                    <span className="text-secondary">95%</span>
                  </div>
                  <div className="glass-panel w-full h-2 rounded-2xl">
                    <div
                      style={{ width: "95%" }}
                      className="bg-secondary h-2 rounded-2xl"
                    ></div>
                  </div>
                </div>
              </div>
              <div className={`${mainCardStyleSecondary}`}>
                <VectorSquare
                  size={50}
                  className={`${mainIconStyleSecondary} mb-4`}
                />
                <h3 className="font-bold mb-1">TAILWIND</h3>
                <p className="text-muted-foreground">CSS framework</p>
              </div>
              <div className={`${mainCardStyleSecondary}`}>
                <FileBracesCorner
                  size={50}
                  className={`${mainIconStyleSecondary} mb-4`}
                />
                <h3 className="font-bold mb-1">JavaScript</h3>
                <p className="text-muted-foreground">
                  Core language of the web
                </p>
              </div>
              <div
                className={`md:col-span-2 md:row-span-1 ${mainCardStyleSecondary}`}
              >
                <div className="flex items-center gap-3 font-bold mb-3">
                  <FileType size={50} className={mainIconStyleSecondary} />
                  <h3 className="font-bold">TYPESCRIPT</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Typed superset of JavaScript that improves maintainability and
                  scalability.
                </p>
                <div className="flex items-center text-[12px] gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-secondary border border-secondary/20">
                    TYPE
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-secondary border border-secondary/20">
                    INTERFACES
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-secondary border border-secondary/20">
                    OOP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack2;
