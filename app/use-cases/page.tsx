import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, FileText, BarChart, Workflow, PenTool, Users, TrendingUp, Brain } from 'lucide-react'

export default function UseCasesPage() {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Transforming Businesses with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
          Discover how our AI Assistant Platform addresses key challenges across various industries
        </p>
      </div>

      {/* Use Cases Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <useCase.icon className="h-6 w-6 text-blue-600" />
                <CardTitle>{useCase.title}</CardTitle>
              </div>
              <CardDescription>{useCase.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Challenges:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {useCase.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Our Solution:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {useCase.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Benefits Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Key Benefits Across All Use Cases</h2>
        <div className="flex justify-center">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900 dark:to-violet-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <benefit.icon className="h-5 w-5 text-blue-600" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const useCases = [
  {
    title: "Development Teams",
    description: "Streamline software development processes and enhance productivity",
    icon: Code,
    challenges: [
      "Complex AI integration processes",
      "Time-consuming code reviews",
      "Inefficient technical documentation",
    ],
    solutions: [
      "AI-powered code generation and review",
      "Automated technical documentation",
      "Customizable AI assistants for development tasks",
    ],
  },
  {
    title: "Knowledge Workers",
    description: "Optimize document analysis and knowledge extraction for research and consulting",
    icon: FileText,
    challenges: [
      "Scattered knowledge bases",
      "Time-intensive document analysis",
      "Difficulty in synthesizing information from multiple sources",
    ],
    solutions: [
      "Centralized knowledge management",
      "AI-driven document analysis and summarization",
      "Advanced RAG implementation for contextual information retrieval",
    ],
  },
  {
    title: "Business Analysts",
    description: "Enhance data analysis and reporting capabilities for financial institutions",
    icon: BarChart,
    challenges: [
      "Manual data processing and analysis",
      "Time-consuming report generation",
      "Difficulty in extracting actionable insights",
    ],
    solutions: [
      "AI-assisted data analysis and pattern recognition",
      "Automated report generation with customizable templates",
      "Real-time insights extraction from multiple data sources",
    ],
  },
  {
    title: "Enterprise Operations",
    description: "Optimize business processes and improve team coordination",
    icon: Workflow,
    challenges: [
      "Manual workflow creation and management",
      "Inefficient team coordination",
      "Lack of process optimization tools",
    ],
    solutions: [
      "Visual workflow designer for easy process automation",
      "AI-powered team collaboration features",
      "Real-time monitoring and optimization of business processes",
    ],
  },
  {
    title: "Content Teams",
    description: "Streamline content creation, editing, and management for marketing and publishing",
    icon: PenTool,
    challenges: [
      "Time-consuming content creation process",
      "Inconsistent content quality",
      "Difficulty in managing large volumes of content",
    ],
    solutions: [
      "AI-assisted content generation and ideation",
      "Automated content editing and quality checks",
      "Centralized content management with AI-powered tagging and organization",
    ],
  },
]

const benefits = [
  {
    title: "Streamlined AI Operations",
    description: "Simplify AI deployment and management across your organization.",
    icon: Workflow,
  },
  {
    title: "Unified Knowledge Management",
    description: "Centralize and optimize your enterprise knowledge for easy access and utilization.",
    icon: FileText,
  },
  {
    title: "Automated Workflows",
    description: "Increase efficiency with customizable, AI-powered workflow automation.",
    icon: BarChart,
  },
  {
    title: "Enhanced Team Productivity",
    description: "Boost collaboration and productivity with AI-assisted tools and features.",
    icon: Users,
  },
  {
    title: "Cost-effective Scaling",
    description: "Grow your AI capabilities without proportionally increasing costs.",
    icon: TrendingUp,
  },
  {
    title: "Better Decision Making",
    description: "Leverage AI-driven insights for more informed and timely decisions.",
    icon: Brain,
  },
]

