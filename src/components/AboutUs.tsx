import Button from './Button';
import coffeeBackgroundC from '../assets/background/coffeeBackgroundCompressed.jpg';
import CountUp from 'react-countup';
import { AboutUsStat } from '../../utils/types';
import { motion } from 'framer-motion';
import { fadeInBottom, fadeInLeft } from '../../utils/framer-variants';

export const aboutUsStats: AboutUsStat[] = [
  {
    number: 2000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    suffix: '+',
  },
  {
    number: 90000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    suffix: '+',
  },
  {
    number: 35,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

export default function AboutUs() {
  return (
    <section
      className="bg-gray-300 py-8 lg:py-16  relative"
      style={{
        backgroundImage: `url(${coffeeBackgroundC})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* bg-overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container text-white mx-auto px-4 max-w-6xl relative">
        <div className="space-y-8 md:space-y-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <motion.h3
              className="text-center text-xl md:text-xl font-medium"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About Us
            </motion.h3>
            <motion.p
              className="text-center text-xs md:text-sm max-w-3xl md:max-w-7xl"
              initial="hidden"
              variants={fadeInBottom}
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nemo
              sapiente incidunt adipisci eligendi nisi fugiat nam nobis facere,
              numquam accusantium similique assumenda, itaque vero consequatur
              beatae ipsam! Veniam in, dignissimos, vero maxime voluptatum
              voluptates quas accusantium sequi tempore expedita beatae natus
              fuga asperiores voluptatem labore omnis, minima voluptatibus sed.
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
            {aboutUsStats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col flex-1 gap-2 text-center md:text-left"
              >
                <CountUp
                  end={stat.number}
                  suffix={stat?.suffix}
                  duration={4}
                  enableScrollSpy //counter only stars when in view
                  scrollSpyOnce
                  className="text-3xl md:text-4xl font-medium"
                />

                <p className="text-xs md:text-sm leading-4 max-w-xs">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button
            text="read more"
            type="button"
            className="bg-white !lowercase md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
