import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
// import Projects from "../sections/Projects";
import Projects from "../sections/Projects";
import TechStack from "../sections/TechStack";
import Navbar from "../ui/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden text-foreground">
      <Navbar />

      <main className="grow">
        <Hero />
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <footer className="relative py-10 border-t border-white/5 bg-black/40 backdrop-blur-md overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-20 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-muted-foreground font-mono text-sm tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">issa.dev</span>
          </p>

          <p className="text-xs font-mono text-muted-foreground/60 flex items-center justify-center gap-1.5">
            Crafted with
            <span className="text-red-500 animate-pulse text-base">♥</span> by
            Issa
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
