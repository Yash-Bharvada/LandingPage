import VideoBackground from '../components/VideoBackground';
import TitleReveal from '../components/TitleReveal';
import GetStartedCTA from '../components/GetStartedCTA';
import ProblemStatement from '../components/ProblemStatement';
import SolutionOverview from '../components/SolutionOverview';
import KeyFeatures from '../components/KeyFeatures';
import DemoPreview from '../components/DemoPreview';
import TechStack from '../components/TechStack';
import ImpactUseCases from '../components/ImpactUseCases';
import AboutTeam from '../components/AboutTeam';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto scroll-smooth">
      {/* Background video that runs continuously */}
      <VideoBackground />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-4">
          <div className="mb-8">
            <TitleReveal />
          </div>
          <GetStartedCTA />
        </div>
      </section>
      
      {/* Main Content Sections */}
      <main className="z-20 relative bg-gradient-to-b from-transparent via-white/80 to-white">
        <ProblemStatement />
        <SolutionOverview />
        <KeyFeatures />
        <DemoPreview />
        <TechStack />
        <ImpactUseCases />
        <AboutTeam />
        <Footer />
      </main>
    </div>
  );
}

export default App;
