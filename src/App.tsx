import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import WorkForUs from './components/WorkForUs';
import LatestInsight from './components/LatestInsight';
import LatestJobs from './components/LatestJobs';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <Header />
      <main>
        <Hero />

        <AboutUs />
        <LatestJobs />

        <div className="container mx-auto py-8 lg:py-16 px-4 space-y-12">
          <Testimonials />
          <WorkForUs />
          <LatestInsight />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
