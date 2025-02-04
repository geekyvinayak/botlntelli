"use client";

import dynamic from "next/dynamic";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Database,
  Workflow,
  Users,
  Brain,
  Zap,
} from "lucide-react";
import {
  Card
} from "@/components/ui/card";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import DoubelLayerButton from "@/components/ui/double-layer-button";
import BubbleCard from "@/components/ui/bubble-card";
import Typewriter from 'typewriter-effect';


// Dynamically import heavy components
const AgentCards = dynamic(
  () => import("@/components/agent-cards").then((mod) => mod.AgentCards),
  {
    loading: () => <LoadingSpinner />,
  }
);
const IntegrationFlow = dynamic(
  () =>
    import("@/components/integration-flow").then((mod) => mod.IntegrationFlow),
  {
    loading: () => <LoadingSpinner />,
  }
);
const TextAnimation = dynamic(
  () => import("@/components/text-animation").then((mod) => mod.TextAnimation),
  {
    loading: () => <LoadingSpinner />,
  }
);

export default function Home() {
  const [agentCardsRef, isAgentCardsVisible] = useIntersectionObserver();
  const [integrationsRef, isIntegrationsVisible] = useIntersectionObserver();
  const [segmentsRef, isSegmentsVisible] = useIntersectionObserver();

  return (
    <>
      <section className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

        {/* Hero Content */}
        <div className="container relative pt-20 pb-16 md:pt-32 md:pb-24 mx-auto my-0">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Enterprise-grade{" "}
                {/* <span className="text-is-gradient do-text-animation">AI Assistant Platform</span> */}
                <Typewriter
                  options={{
                    loop: true,
                    wrapperClassName: "text-is-gradient do-text-animation",
                    // cursorClassName: "text-is-gradient do-text-animation",
                    cursor:'🤖'
                  }}
                  
                  onInit={(typewriter) => {
                    typewriter.typeString('AI Assistant Platform')
                      .callFunction(() => {
                        console.log('String typed out!');
                      })
                      .pauseFor(2500)
                      .deleteAll()
                      .start();
                  }}
                />
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
                Combine RAG (Retrieval-Augmented Generation), stateful
                conversations, and multi-LLM support with powerful workflow
                automation to transform how businesses interact with AI.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
              <DoubelLayerButton
                href="/demo"
                className="hidden md:inline-flex button "
              >
                Book a Demo
              </DoubelLayerButton>
              <DoubelLayerButton
                href="/demo"
                className="hidden md:inline-flex button "
              >
                Explore Features
              </DoubelLayerButton>
            </div>

            {/* Add the TextAnimation component here */}
            <div className="mt-12 w-full max-w-4xl mx-auto">
              <TextAnimation />
            </div>

            {/* Feature Cards Grid */}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                {keyFeatures.map((feature, i) => (
                  <Card
                    key={i}
                    className="flex flex-col items-center text-center "
                  >
                    <BubbleCard featureTitle={feature.title} featureDescription={feature.description}>
                      <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                    </BubbleCard>
                  </Card>
                ))}
              </div>
            </div>

            {/* Agent Cards Section */}
            <div ref={agentCardsRef} className="container relative mt-16 mb-16">
              <div className="text-center space-y-8 mb-12">
                <h2 className="text-4xl font-bold tracking-tighter">
                  Specialized AI Agents for{" "}
                  <span className="text-is-gradient">Every Need</span>
                </h2>
                <div className="flex justify-center gap-4">
                  <DoubelLayerButton
                    href="/demo"
                    className="hidden md:inline-flex button "
                  >
                    Build Your Agent
                  </DoubelLayerButton>
                  <DoubelLayerButton
                    href="/demo"
                    className="hidden md:inline-flex button "
                  >
                    Try Demo
                  </DoubelLayerButton>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                {isAgentCardsVisible && <AgentCards />}
              </div>
            </div>

            {/* Integrations Section */}
            <div ref={integrationsRef} className="container relative mt-16">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold">
                  Seamless{" "}
                  <span className="text-is-gradient">Integrations</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Connect your favorite tools and platforms with BotIntelli for
                  automated workflows and intelligent responses
                </p>
              </div>
              {isIntegrationsVisible && <IntegrationFlow />}
            </div>

            {/* Customer Segments */}
            <section ref={segmentsRef} className="w-full pt-24">
              <h2 className="text-3xl font-bold text-center mb-12">
                Made for Industry Leaders
              </h2>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                  {isSegmentsVisible &&
                    segments.map((segment, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center space-y-3"
                      >
                        <segment.icon className="h-12 w-12 text-blue-600" />
                        <h3 className="text-xl font-semibold">
                          {segment.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {segment.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

const keyFeatures = [
  {
    title: "Advanced RAG Implementation",
    description:
      "Real-time document processing with intelligent context management and vector database integration",
    icon: Brain,
  },
  {
    title: "Multi-LLM Support",
    description:
      "Persistent conversation context across sessions with support for GPT-4, Claude, and more",
    icon: Zap,
  },
  {
    title: "Enterprise Workflow",
    description:
      "Visual workflow designer with trigger-based automation and custom action support",
    icon: Workflow,
  },
];

const segments = [
  {
    title: "Development Teams",
    description:
      "Code generation, review, and technical documentation for software companies",
    icon: Code,
  },
  {
    title: "Knowledge Workers",
    description:
      "Document analysis, knowledge extraction, and synthesis for research organizations",
    icon: Database,
  },
  {
    title: "Business Analysts",
    description:
      "Data analysis, report generation, and insights extraction for financial institutions",
    icon: Users,
  },
];
