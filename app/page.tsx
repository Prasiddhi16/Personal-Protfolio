import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Journey } from "../components/Journey";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      
      {/* Later: Journey, Contact */}
    </main>
  );
}
