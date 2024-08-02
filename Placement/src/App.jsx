import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import ContactSection from "./components/ContactSection";

export default function App() {
  return(
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <ContactSection/>
    </div>

    </>
  );
}
