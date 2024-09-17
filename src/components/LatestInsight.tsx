import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { InsightCard } from '../../utils/types';
import card1 from '../assets/card-1.jpg';
import card2 from '../assets/card-2.jpg';
import card3 from '../assets/card-3.jpg';
import card4 from '../assets/card-4.jpg';
import {
  staggerItems,
  fadeInLeft,
  staggerVariants,
} from '../../utils/framer-variants';

const cardData: InsightCard[] = [
  {
    title: 'Fast Server',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    image: card1,
  },
  {
    title: 'Fresh Lemonade',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    image: card2,
  },
  {
    title: 'Workspace Setup',
    description: 'Creating an inspiring environment for productivity',
    image: card3,
  },
  {
    title: 'Photography Essentials',
    description: 'Capturing moments with the right equipment',
    image: card4,
  },
];

export default function LatestInsight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="flex-col flex gap-8" ref={ref}>
      <motion.h3
        className="text-xl font-medium flex justify-center text-slate-700"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Latest Insights
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        variants={staggerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'} //use inview to solve animation not showing until scrolling to very end for mobile due to height of content
      >
        {cardData.map((item, index) => (
          <motion.div
            key={index}
            className="relative h-[300px] overflow-hidden group"
            variants={staggerItems}
          >
            <img
              src={item.image}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-400 to-transparent md:to-gray-50/50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h4 className="text-white text-xl font-medium mb-2">
                {item.title}
              </h4>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
