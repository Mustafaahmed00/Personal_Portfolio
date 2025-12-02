import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Code, Award, Users } from 'lucide-react';
import { SectionWrapper } from '../hoc';

const StatCard = ({ icon: Icon, value, label, suffix = '+', delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/30
                 hover:border-purple-500/60 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="inline-block p-4 bg-purple-600/20 rounded-full mb-4"
      >
        <Icon className="w-8 h-8 text-purple-400" />
      </motion.div>

      <motion.h3
        className="text-5xl font-bold text-white mb-2"
        key={count}
      >
        {count}{suffix}
      </motion.h3>

      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: Briefcase,
      value: '2',
      label: 'Years Experience',
      suffix: '+',
    },
    {
      icon: Code,
      value: '15',
      label: 'Projects Completed',
      suffix: '+',
    },
    {
      icon: Award,
      value: '10',
      label: 'Technologies Mastered',
      suffix: '+',
    },
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          By The <span className="text-purple-400">Numbers</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Delivering results through dedication and continuous learning
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Stats, 'stats');
