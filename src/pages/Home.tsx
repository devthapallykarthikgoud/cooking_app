import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ChefCTA from '../components/ChefCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <ChefCTA />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}