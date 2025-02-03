"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Slack, Trello, Github, Mail, BarChart, MessageSquare, Bell } from 'lucide-react'

const tools = [
  { name: 'Slack', icon: Slack },
  { name: 'Trello', icon: Trello },
  { name: 'GitHub', icon: Github },
  { name: 'Gmail', icon: Mail },
]

const outputIcons = [BarChart, MessageSquare, Bell]

const sceneTexts = [
  "Connect your favorite tools effortlessly...",
  "...for seamless automated workflows...",
  "...and intelligent responses in real time!",
  "Supercharge your productivity with BotIntelli!"
]

export function IntegrationFlow() {
  const [activeScene, setActiveScene] = useState(0)
  const [activeTool, setActiveTool] = useState(-1)

  useEffect(() => {
    const sceneInterval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % 4)
    }, 5000)

    return () => clearInterval(sceneInterval)
  }, [])

  useEffect(() => {
    if (activeScene === 0) {
      const toolInterval = setInterval(() => {
        setActiveTool((prev) => (prev + 1) % tools.length)
      }, 1000)

      return () => clearInterval(toolInterval)
    } else {
      setActiveTool(-1)
    }
  }, [activeScene])

  return (
    <div className="w-full h-[400px] bg-[#0A0A0A] relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 flex items-center justify-between px-16">
          {/* Scene 1: Tools Integration */}
          <div className="w-1/3 grid grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTool >= index ? 1 : 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-zinc-800 flex items-center justify-center">
                  <tool.icon className="w-8 h-8 text-blue-400" />
                </div>
                <span className="mt-2 text-sm text-gray-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Scene 2: BotIntelli Core */}
          <motion.div
            className="relative"
            animate={{
              scale: activeScene === 1 ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 2, repeat: activeScene === 1 ? Infinity : 0 }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
              <Bot className="w-16 h-16 text-zinc-900" />
            </div>
            <motion.div
              className="absolute -inset-4 rounded-full"
              animate={{
                boxShadow: activeScene === 1 ? [
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 0 20px rgba(59, 130, 246, 0.1)",
                  "0 0 0 40px rgba(59, 130, 246, 0)",
                ] : "none",
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Scene 3: Intelligent Responses */}
          <div className="w-1/3 flex flex-col items-center">
            <div className="w-full h-48 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800">
              <div className="text-sm text-gray-400 mb-2">Key Metrics</div>
              <div className="flex justify-between h-32">
                {[75, 45, 60, 90].map((height, index) => (
                  <motion.div
                    key={index}
                    className="w-1/5 bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500 rounded-t-lg"
                    initial={{ height: 0 }}
                    animate={{ height: activeScene >= 2 ? `${height}%` : "0%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    style={{ alignSelf: 'flex-end' }}
                  />
                ))}
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              {outputIcons.map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-zinc-800 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeScene >= 2 ? 1 : 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Display Area */}
        <div className="h-20 bg-[#1A1A1A]/50 backdrop-blur-sm flex items-center justify-center border-t border-zinc-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScene}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl font-semibold text-center"
            >
              {sceneTexts[activeScene]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Final Scene Overlay */}
      <AnimatePresence>
        {activeScene === 3 && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

