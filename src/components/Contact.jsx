import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!form.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!form.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message' });
      return false;
    }
    if (form.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Message must be at least 10 characters long' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Get current timestamp
    const now = new Date().toLocaleString();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          time: now,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus({ 
            type: 'success', 
            message: 'Thank you! I will get back to you as soon as possible.' 
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus({ 
            type: 'error', 
            message: 'Something went wrong. Please try again or contact me directly.' 
          });
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Status Message */}
        {status.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${
              status.type === 'success' 
                ? 'bg-green-900/30 border border-green-500/50 text-green-300' 
                : 'bg-red-900/30 border border-red-500/50 text-red-300'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span className="text-sm">{status.message}</span>
          </motion.div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 flex items-center gap-2'>
              <User className="w-4 h-4" />
              Your Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-purple-500 transition-colors font-medium'
              disabled={loading}
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 flex items-center gap-2'>
              <Mail className="w-4 h-4" />
              Your Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-purple-500 transition-colors font-medium'
              disabled={loading}
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 flex items-center gap-2'>
              <MessageSquare className="w-4 h-4" />
              Your Message
            </span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me about your project, opportunity, or just say hello!'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-purple-500 transition-colors font-medium resize-none'
              disabled={loading}
            />
          </label>

          <motion.button
            type='submit'
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <Send className="w-5 h-5" />
            )}
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-3">Or reach out directly:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:mohammad.m@jobstechmails.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                mohammad.m@jobstechmails.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <User className="w-4 h-4" />
              <span>Mohammad Mustafa Ahmed</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");