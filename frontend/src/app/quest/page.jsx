"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function QuestCompletePage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#2E36A4]">
      <div className="p-4">
        <div className="flex flex-col items-center justify-center h-[80vh]">
          
          {/* Checkmark */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center mb-4 mx-auto shadow-xl">
              <div className="text-[#5D4FE1] text-6xl">✓</div>
            </div>
            <motion.h2
              className="text-white text-3xl font-bold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Nice Work
            </motion.h2>
          </motion.div>

          {/* Stars */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex">
              {/* Two gold stars */}
              {[0, 1].map((_, i) => (
                <svg key={i} width="40" height="40" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
              {/* One gray star */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="#E0E0E0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Points Text */}
          <motion.p
            className="text-white text-center text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            You Earned <span className="font-bold">80 pts</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="w-full max-w-xs space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link href="/quest" className="block">
              <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium py-4 rounded-xl text-lg shadow-lg shadow-orange-500/30 transition-all">
                Next Stage
              </button>
            </Link>

            <Link href="/quest/detail" className="block">
              <button className="w-full bg-transparent border border-white text-white hover:bg-white/10 font-medium py-4 rounded-xl text-lg transition-all">
                Play Again
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
