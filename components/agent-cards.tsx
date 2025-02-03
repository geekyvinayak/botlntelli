"use client"

import { Scale, BarChart3, MoreHorizontal, Building2, Plus } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const agents = [
  {
    title: "Legal Agent",
    icon: Scale,
    model: "MISTRAL",
    actions: [
      { color: "bg-blue-500" },
      { color: "bg-red-500" }
    ]
  },
  {
    title: "Financial Analyst",
    icon: BarChart3,
    model: "GEMINI",
    actions: [
      { color: "bg-amber-500" }
    ]
  },
  {
    title: "Your Agent",
    icon: MoreHorizontal,
    model: "SELECT LLM",
    actions: [
      { color: "bg-amber-500" },
      { color: "bg-blue-500" },
      { color: "bg-red-500" }
    ]
  },
  {
    title: "Operations Analyst",
    icon: Building2,
    model: "OPEN AI",
    actions: [
      { color: "bg-blue-500" },
      { color: "bg-red-500" }
    ]
  },
  {
    title: "Marketing Agent",
    icon: Plus,
    model: "OLLAMA",
    actions: [
      { color: "bg-amber-500" },
      { color: "bg-red-500" }
    ]
  }
]

export function AgentCards() {
  return (
    <div className="w-full p-8 rounded-xl">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-4 px-4">
          {agents.map((agent, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-[#1A1A1A] border-zinc-800 relative group hover:border-zinc-700 transition-colors flex-shrink-0",
                // Apply different heights and widths based on position
                index === 0 || index === 4 ? "w-[180px] h-[280px]" : "",
                index === 1 || index === 3 ? "w-[200px] h-[320px]" : "",
                index === 2 ? "w-[220px] h-[360px]" : ""
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50 pointer-events-none" />
              <CardContent className="p-4 space-y-4 flex flex-col h-full">
                {/* Icon Container */}
                <div className={cn(
                  "bg-[#0A0A0A] rounded-lg flex items-center justify-center relative flex-grow",
                  // Adjust icon container height based on card position
                  index === 0 || index === 4 ? "mb-2" : "",
                  index === 1 || index === 3 ? "mb-4" : "",
                  index === 2 ? "mb-6" : ""
                )}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50" />
                  {/* Circuit board pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM38.284 0l7.9 7.9-1.415 1.413-9.9-9.9h3.415zM20.686 0l-7.9 7.9 1.415 1.413 9.9-9.9h-3.415zM9.414 0L8 1.414l5.657 5.657 1.414-1.414L9.414 0zm41.172 0L52 1.414l-5.657 5.657-1.414-1.414L50.586 0z' fill='%23434190' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <agent.icon className={cn(
                    "text-blue-600 transition-transform group-hover:scale-110",
                    // Adjust icon size based on card position
                    index === 0 || index === 4 ? "w-8 h-8" : "",
                    index === 1 || index === 3 ? "w-10 h-10" : "",
                    index === 2 ? "w-12 h-12" : ""
                  )} />
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-blue-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className={cn(
                  "font-semibold text-white text-center",
                  // Adjust text size based on card position
                  index === 0 || index === 4 ? "text-base" : "",
                  index === 1 || index === 3 ? "text-lg" : "",
                  index === 2 ? "text-xl" : ""
                )}>{agent.title}</h3>

                {/* Model Display */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-zinc-400">{agent.model}</span>
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

