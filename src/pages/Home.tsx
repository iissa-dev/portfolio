import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import TechStack from "../sections/TechStack";
import Navbar from "../ui/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden text-foreground">
      <Navbar />

      <main className="grow">
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/5 text-center bg-black/40">
        <p className="text-muted-foreground font-mono text-sm">
          © {new Date().getFullYear()} Issa.dev | Built with React & Tailwind
        </p>
      </footer>
    </div>
  );
}

export default Home;
