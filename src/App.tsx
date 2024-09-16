import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import WorkForUs from './components/WorkForUs';
import LatestInsight from './components/LatestInsight';
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <div className="container mx-auto py-12 px-4 space-y-12">
          <Testimonials />
          <WorkForUs />
          <LatestInsight />
        </div>

        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold">Latest Jobs</h3>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-gray-600">{i + 1}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(5)].map((_, i) => (
                // <Card key={i} className="p-6 bg-orange-500 text-white">
                //   <h4 className="font-semibold mb-2">
                //     Duis aute irure dolor in reprehenderit
                //   </h4>
                //   <p className="text-sm mb-4">£20000 - £30000 | LONDON</p>
                //   <p className="text-sm mb-4">
                //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                //     do eiusmod tempor incididunt ut labore et dolore magna
                //     aliqua.
                //   </p>
                //   <Button variant="secondary" className="w-full">
                //     APPLY
                //   </Button>
                // </Card>
                <div key={i} className="p-6 bg-orange-500 text-white">
                  <h4 className="font-semibold mb-2">
                    Duis aute irure dolor in reprehenderit
                  </h4>
                  <p className="text-sm mb-4">£20000 - £30000 | LONDON</p>
                  <p className="text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="w-full">APPLY</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
