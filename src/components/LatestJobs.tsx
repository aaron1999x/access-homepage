import { motion } from 'framer-motion';
import JobsSlider from './sliders/JobsSlider';
import { fadeInLeft } from '../../utils/framer-variants';

export default function LatestJobs() {
  return (
    <div className="bg-white pt-8 pb-14 lg:pt-16 lg:pb-20 ">
      <motion.h3
        className="text-center  text-xl md:text-xl font-medium"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Latest Jobs
      </motion.h3>
      <div className="mt-8">
        <JobsSlider />
      </div>
    </div>
  );
}
