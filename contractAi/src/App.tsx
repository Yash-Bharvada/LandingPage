import InfiniteStream from '../components/InfiniteStream';
import TitleReveal from '../components/TitleReveal';
import GetStartedCTA from '../components/GetStartedCTA';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import DemoSection from '../components/DemoSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto scroll-smooth">
      {/* Background video animation that runs continuously */}
      <InfiniteStream />
      
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
      <main className="z-20 relative bg-gradient-to-b from-transparent via-black/70 to-black">
        <FeatureSection />
        <DemoSection />
        <TestimonialSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
