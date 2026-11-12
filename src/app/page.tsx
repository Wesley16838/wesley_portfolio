import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import EarlyExperiments from "@/components/sections/EarlyExperiments";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Photos from "@/components/sections/Photos";
import SelectedWork from "@/components/sections/SelectedWork";
import TechnicalStack from "@/components/sections/TechnicalStack";
import WorkingNotes from "@/components/sections/WorkingNotes";

export default function Home() {
  return (
    <>
      <main
        id="main"
        className="mx-auto max-w-6xl px-4 pb-20 pt-6 md:px-6 md:pb-28 md:pt-10"
      >
        <Hero />
        <SelectedWork />
        <WorkingNotes />
        <Experience />
        <TechnicalStack />
        <Photos />
        <About />
        <EarlyExperiments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
