import { motion } from "framer-motion";
import './App.css'

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Chandan 👋
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-center mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate developer crafting stunning web experiences with React, Tailwind & modern tech.
      </motion.p>
      <motion.a
        href="#"
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition transform"
        whileHover={{ scale: 1.1 }}
      >
        View My Work
      </motion.a>
    </main>
  );
}
