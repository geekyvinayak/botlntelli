"use client"

import { Scale, BarChart3, MoreHorizontal, Building2, Plus } from 'lucide-react'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const agents = [
  {
    title: "Legal Agent",
    model: "MISTRAL",
    actions: [
      { color: "bg-blue-500" },
      { color: "bg-red-500" }
    ],
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 transition-transform group-hover:scale-110 w-16 h-16"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          d="M7 21h10"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          d="M12 3v18"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
        />
      </motion.svg>
    ),
  },
  {
    title: "Financial Analyst",
    icon: BarChart3,
    model: "GEMINI",
    actions: [
      { color: "bg-amber-500" }
    ],
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chart-column text-blue-600 transition-transform group-hover:scale-110 w-16 h-16"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M3 3v16a2 2 0 0 0 2 2h16"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.2,
          }}
          d="M18 17V9"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.4,
          }}
          d="M13 17V5"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.6,
          }}
          d="M8 17v-3"
        />
      </motion.svg>
    )
  },
  {
    title: "Your Agent",
    icon: MoreHorizontal,
    model: "SELECT LLM",
    actions: [
      { color: "bg-amber-500" },
      { color: "bg-blue-500" },
      { color: "bg-red-500" }
    ],
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 transition-transform group-hover:scale-110 w-16 h-16"
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="19"
          cy="12"
          r="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="5"
          cy="12"
          r="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
    )
  },
  {
    title: "Operations Analyst",
    icon: Building2,
    model: "OPEN AI",
    actions: [
      { color: "bg-blue-500" },
      { color: "bg-red-500" }
    ],
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 transition-transform group-hover:scale-110 w-16 h-16"
        viewBox="0 0 24 24"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M10 6h4"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M10 10h4"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M10 14h4"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          d="M10 18h4"
        />
      </motion.svg>
    )
  },
  {
    title: "Marketing Agent",
    icon: Plus,
    model: "OLLAMA",
    actions: [
      { color: "bg-amber-500" },
      { color: "bg-red-500" }
    ],
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plus text-blue-600 transition-transform group-hover:scale-110 w-16 h-16"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          d="M5 12h14"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          d="M12 5v14"
        />
      </motion.svg>
    )
  }
]

export function AgentCards() {
  return (
    <div className="w-full p-4 md:p-8 rounded-xl">
      <div className="w-full max-w-7xl mx-auto">
        {/* Responsive grid container */}
        <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className={cn(
                "bg-[#1A1A1A] border-zinc-800 relative group hover:border-zinc-700 transition-colors",
                // Make cards responsive width
                "sm:w-[200px] md:w-[220px]",
                // Adjust height for mobile
                "h-[320px] sm:h-[360px]"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50 pointer-events-none" />
              <CardContent className="p-4 space-y-4 flex flex-col h-full">
                {/* Icon Container */}
                <div className={cn(
                  "bg-[#0A0A0A] rounded-lg flex items-center justify-center relative flex-grow",
                  // Adjust spacing for mobile
                  "mb-2 sm:mb-4 md:mb-6"
                )}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50" />
                  {/* Circuit board pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM38.284 0l7.9 7.9-1.415 1.413-9.9-9.9h3.415zM20.686 0l-7.9 7.9 1.415 1.413 9.9-9.9h-3.415zM9.414 0L8 1.414l5.657 5.657 1.414-1.414L9.414 0zm41.172 0L52 1.414l-5.657 5.657-1.414-1.414L50.586 0z' fill='%23434190' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                  />
                  {agent.svg}
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-blue-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className={cn(
                  "font-semibold text-white text-center",
                  // Responsive font sizes
                  "sm:text-sm md:text-base lg:text-lg"
                )}>{agent.title}</h3>

                {/* Model Display */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs sm:text-sm text-zinc-400">{agent.model}</span>
                  <div className="flex gap-1">
                    {agent.actions.map((action, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${action.color}`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}