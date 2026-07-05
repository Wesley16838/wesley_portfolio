import Hero from "@/components/sections/Hero";
import SystemTicker from "@/components/SystemTicker";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import SelectedWork from "@/components/sections/SelectedWork";
import WorkingNotes from "@/components/sections/WorkingNotes";
import Experience from "@/components/sections/Experience";
import TechnicalStack from "@/components/sections/TechnicalStack";
import EarlyExperiments from "@/components/sections/EarlyExperiments";
import About from "@/components/sections/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* ivory opening spread */}
      <div className="zone-light zone-grain">
        <Hero />
      </div>

      {/* charcoal gallery — opens with the system ticker seam */}
      <div className="zone-dark zone-grain">
        <SystemTicker />
        <ImpactMetrics />
        <SelectedWork />
        <WorkingNotes />
        <Experience />
        <TechnicalStack />
        <EarlyExperiments />
      </div>

      {/* ivory closing spread */}
      <div className="zone-light zone-grain">
        <About />
        <Footer />
      </div>
    </main>
  );
}
