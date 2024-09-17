import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Button from './Button';
import {
  headerStaggerVariants,
  headerItemVariants,
  shortFadeInBottom,
  fadeInFromTop,
} from '../../utils/framer-variants';

export const navItems = [
  'JOBS',
  'ABOUT',
  'CANDIDATES',
  'CLIENTS',
  'JOIN US',
  'CONTACT US',
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="absolute w-full z-40"
      initial="hidden"
      animate="visible"
      variants={fadeInFromTop}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <div className="container mx-auto px-4 ">
        <div className=" md:h-[80px] h-[60px] flex justify-between items-center">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold text-white">
              volcanic
            </h1>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-md"
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
          </div>
          <nav className="hidden lg:block">
            <div className="flex items-center justify-between gap-8">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li
                    key={item}
                    className="relative h-[80px] flex items-center"
                  >
                    <a
                      href="/"
                      className="text-sm text-gray-50 hover:text-orange-400 cursor-pointer underline-on-hover"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="hidden md:flex ">
                <Button text="login" type="button" className="bg-white" />
                <Button
                  text="register"
                  type="button"
                  className="bg-primary !text-white"
                />
              </div>
            </div>
          </nav>
        </div>
        {isMenuOpen && ( //for mobile menu
          <motion.div
            className="lg:hidden mt-2 bg-gray-200 p-4 rounded-lg duration-300 ease-in-out"
            initial="closed"
            animate="open"
            exit="closed"
            variants={headerStaggerVariants}
          >
            <motion.nav>
              <motion.ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li key={item} variants={headerItemVariants}>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 hover:text-gray-800 py-1"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
            <motion.div
              className="mt-4 flex gap-2"
              initial="hidden"
              variants={shortFadeInBottom}
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Button text="login" type="button" className="bg-white" />
              <Button
                text="register"
                type="button"
                className="bg-primary !text-white"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
