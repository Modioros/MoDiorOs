import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 text-white flex flex-col justify-center items-center p-10 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-center"
      >
        Welcome to MoDiorOS
      </motion.h1>

      <p className="text-center max-w-2xl text-lg text-gray-300">
        The eternal operating system for creators, kings, and visionaries. Connect Africa. Vault the future. Translate the universe.
      </p>

      <div className="flex space-x-6">
        <a
          href="/api/vault"
          className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition"
        >
          Enter Vault
        </a>
        <a
          href="/api/commerce?keyword=iphone"
          className="px-6 py-3 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition"
        >
          Shop Global
        </a>
      </div>
    </main>
  );
}
