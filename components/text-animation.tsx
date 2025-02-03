"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = [
  'Create How to or Q&A assistants on the Fly',
  'Create Digital Employees (Agent)',
  'Create Collaboration of Digital Employees (Workflows)',
  'Build, Ship, Monitor, and Evaluate Agents and Workflows',
  'Empower Automation with Intelligence'
]

export function TextAnimation() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3500) // 3.5 seconds for each phrase

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-[200px] bg-[#0A0A0A] relative overflow-hidden rounded-xl">
      {/* Starry background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-transparent animate-gradient-xy" />

      {/* Text animation */}
      <div className="relative h-full flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhrase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`text-center text-2xl md:text-3xl lg:text-4xl font-bold text-is-gradient ${currentPhrase === phrases.length - 1 ? 'animate-pulse' : ''
              }`}
            style={{
              textShadow: '0 0 10px rgba(104, 109, 224, 0.5), 0 0 20px rgba(104, 109, 224, 0.3)',
            }}
          >
            {phrases[currentPhrase]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

