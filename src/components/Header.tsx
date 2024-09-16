import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Button from './Button';

// New export for navigation items
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

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="absolute w-full z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-white">volcanic</h1>
          </motion.div>
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
                  <li key={item}>
                    <a
                      href="/"
                      className="text-sm text-gray-50 hover:text-orange-400 cursor-pointer"
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
        {isMenuOpen && (
          <motion.div className="lg:hidden mt-4 bg-gray-200 p-4 rounded-lg">
            <nav>
              <motion.ul
                className="space-y-2 "
                animate="visible"
                exit="hidden"
                variants={navList}
              >
                {navItems.map((item) => (
                  <motion.li key={item}>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 hover:text-gray-800 py-1"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
            <div className="mt-4 flex gap-2">
              {/* <Button variant="outline" className="w-full">
                  LOGIN
                </Button>
                <Button className="w-full">REGISTER</Button> */}
              <Button text="login" type="button" className="bg-white" />
              <Button
                text="register"
                type="button"
                className="bg-primary !text-white"
              />
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
