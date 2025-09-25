import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Cpu, BookOpenCheck, Bot, ArrowUp, Moon, Sun } from 'lucide-react';

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-indigo-100 to-blue-200 text-gray-800'} transition duration-300 min-h-screen`}>
      {/* Dark Mode Toggle */}
      <div className="absolute top right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white text-indigo-700 p-2 rounded-full shadow hover:scale-105 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center relative">
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712107.png"
          alt="Mentora AI"
          className="w-28 h-28 md:w-32 md:h-32 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Mentora 👩‍🏫
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Your AI-powered academic assistant. Chat with AI, summarize notes, and generate quizzes — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/chat"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
          >
            Start Chatting
          </Link>
        </motion.div>

        {/* Hero Shape Divider */}
        {/* Hero Shape Divider */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
  <svg
    className="relative block w-full h-24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 900 120"
  >
    <path
      d="M0,0V46.29c47.06,22,103.55,29.18,158.42,17.56C230.86,50.91,284,18.24,
        339.14,6.09,411.3-9.45,479.86,3.73,549,20.81c61.63,15.19,119.93,35.25,
        182,39.56,65.77,4.58,130.89-12.87,186-35.76V0Z"
      opacity=".25"
      className="fill-indigo-600"
    ></path>
    <path
      d="M0,0V15.81C47.06,38.09,103.55,45.27,
        158.42,33.65,230.86,23.27,284,3.63,
        339.14,1.69,411.3-1.54,479.86,13.6,
        549,30.68c61.63,14.74,119.93,33.98,
        182,38.3,65.77,4.58,130.89-12.87,
        186-35.76V0Z"
      opacity=".5"
      className="fill-indigo-700"
    ></path>
    <path
      d="M0,0V5.63C47.06,27.91,103.55,35.09,
        158.42,23.47,230.86,13.09,284-6.55,
        339.14-8.49,411.3-11.72,479.86,3.42,
        549,20.5c61.63,14.74,119.93,33.98,
        182,38.3,65.77,4.58,130.89-12.87,
        186-35.76V0Z"
      className="fill-indigo-800"
    ></path>
  </svg>
</div>

      </div>

      {/* Features */}
      <section className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700">Why Mentora?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[{
            icon: <Bot size={32} />,
            title: "AI Chatbot",
            desc: "Ask questions and get instant, intelligent answers."
          }, {
            icon: <BookOpenCheck size={32} />,
            title: "Smart Summarizer",
            desc: "Simplify long notes into short, digestible summaries."
          }, {
            icon: <Cpu size={32} />,
            title: "Quiz Generator",
            desc: "Create MCQs and practice questions instantly."
          }].map((feat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-md bg-indigo-50 dark:bg-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="text-indigo-700 dark:text-indigo-300 mb-2">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{feat.title}</h3>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scroll to Top */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Footer */}
      <footer className={`py-6 text-center ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-indigo-700 text-white'}`}>
        <p className="text-sm">© 2025 Mentora. Built with 💡 & ❤️ by Team Mentora.</p>
      </footer>
    </div>
  );
};

export default HomePage;
