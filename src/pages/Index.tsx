
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <Statistics />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
