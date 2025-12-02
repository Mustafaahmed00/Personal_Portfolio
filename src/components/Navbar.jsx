import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary backdrop-blur-md bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Mohammad Mustafa Ahmed &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium transition-all duration-300 hover:scale-110`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="cursor-pointer">{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            aria-label='Toggle menu'
            aria-expanded={toggle}
            aria-controls='mobile-menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
            />
          </button>

          <motion.div
            id='mobile-menu'
            initial={false}
            animate={toggle ? { opacity: 1, x: 0, display: "flex" } : { opacity: 0, x: 20, transitionEnd: { display: "none" } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className='p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-xl backdrop-blur-md border border-purple-500/20'
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav, index) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={toggle ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: toggle ? index * 0.1 : 0 }}
                  className={`font-poppins font-medium text-[16px] transition-colors duration-300 w-full ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={`#${nav.id}`} className="cursor-pointer block py-1">{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
