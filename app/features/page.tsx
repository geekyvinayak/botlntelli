import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, MessageSquare, Book, Workflow, Users, Code2, FileText, Network, Layout, Cpu, Database, Puzzle, Shield, Zap, Settings } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Powerful Features for{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Enterprise AI
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
          Discover our comprehensive suite of features designed to transform how your business interacts with AI
        </p>
      </div>

      {/* Core Features */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Core Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feature, i) => (
            <Card key={i} className="border-2">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {feature.capabilities.map((capability, j) => (
                    <li key={j}>{capability}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Capabilities */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Technical Capabilities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {technicalCapabilities.map((capability, i) => (
            <Card key={i} className="border-2">
              <CardHeader>
                <capability.icon className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-lg">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {capability.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Differentiators */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Key Differentiators</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((diff, i) => (
            <Card key={i} className="border-2">
              <CardHeader>
                <diff.icon className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>{diff.title}</CardTitle>
                <CardDescription>{diff.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {diff.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

const coreFeatures = [
  {
    title: "AI Assistants & Agents",
    description: "Create and manage custom AI assistants for your specific needs",
    icon: Bot,
    capabilities: [
      "Create and manage custom AI assistants",
      "Support for different types of agents",
      "Specific tools and capabilities per agent",
      "Test agents before creation"
    ]
  },
  {
    title: "Chat Interface",
    description: "Engage in real-time conversations with AI assistants",
    icon: MessageSquare,
    capabilities: [
      "Real-time chat with AI assistants",
      "Multiple chat sessions management",
      "Chat history tracking",
      "Support for various interaction types"
    ]
  },
  {
    title: "Knowledge Base",
    description: "Comprehensive document management and integration",
    icon: Book,
    capabilities: [
      "Document management system",
      "File upload and processing",
      "Knowledge base integration with agents",
      "Document verification and syncing"
    ]
  },
  {
    title: "Workflows",
    description: "Design and automate complex business processes",
    icon: Workflow,
    capabilities: [
      "Visual workflow designer",
      "Connect different agents and tools",
      "Custom automation capabilities",
      "Multiple node type support"
    ]
  },
  {
    title: "User Management",
    description: "Complete control over user access and permissions",
    icon: Users,
    capabilities: [
      "User authentication",
      "Usage tracking",
      "Plan management",
      "Team collaboration features"
    ]
  }
]

const technicalCapabilities = [
  {
    title: "Agent System",
    icon: Cpu,
    features: [
      "Model selection (GPT-4, etc.)",
      "Custom instructions and tools",
      "Different agent categories",
      "Performance monitoring"
    ]
  },
  {
    title: "Document Processing",
    icon: FileText,
    features: [
      "Multiple file type support",
      "Document chunking and indexing",
      "Vector database integration",
      "Document synchronization"
    ]
  },
  {
    title: "Integration Features",
    icon: Puzzle,
    features: [
      "Chrome plugin support",
      "API endpoints",
      "MongoDB persistence",
      "Async processing"
    ]
  },
  {
    title: "User Interface",
    icon: Layout,
    features: [
      "Modern, responsive design",
      "Sidebar navigation",
      "Dashboard view",
      "Real-time updates"
    ]
  }
]

const differentiators = [
  {
    title: "Advanced RAG Implementation",
    description: "State-of-the-art document processing and knowledge integration",
    icon: Database,
    features: [
      "Real-time document processing",
      "Intelligent context management",
      "Vector database integration",
      "Automated document synchronization"
    ]
  },
  {
    title: "Stateful & Multi-LLM Support",
    description: "Persistent conversations across multiple AI models",
    icon: Network,
    features: [
      "Persistent conversation context",
      "Multiple LLM support",
      "Model switching capabilities",
      "Memory management"
    ]
  },
  {
    title: "Enterprise Workflow Automation",
    description: "Powerful automation tools for business processes",
    icon: Settings,
    features: [
      "Visual workflow designer",
      "Trigger-based automation",
      "Custom action support",
      "Real-time monitoring"
    ]
  }
]

