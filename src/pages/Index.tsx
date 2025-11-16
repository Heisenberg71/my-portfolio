import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Publications from "@/components/Publications";
import WorkProjects from "@/components/WorkProjects";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Resume />
      <Publications />
      <WorkProjects />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
