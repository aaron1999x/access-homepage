import watchBackground from '../assets/background/watch-background.jpg';
import { motion } from 'framer-motion';
import Button from './Button';
import Input from './Input';
import HeroSlider from './sliders/HeroSlider';

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${watchBackground})`,
      }}
    >
      {/* bg-overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl xl:text-7xl font-medium text-white mb-12 text-center max-w-4xl"
        >
          Accusantium doloremque quae ab illo
        </motion.h2>
        <div className="flex flex-col md:flex-row w-full max-w-6xl  md:space-y-0 gap-2 md:gap-3">
          <Input placeholder="keyword" className="flex flex-1" />
          <Input placeholder="location" className="flex flex-1" />
          <Button
            text="Search Jobs"
            type="button"
            className="bg-primary !text-white"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <HeroSlider />
      </div>
    </section>
  );
}
