import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>
              <Link href="/blog/agentic-rag-future-of-knowledge-augmented-ai" className="hover:underline">
                Agentic RAG: The Future of Knowledge-Augmented AI
              </Link>
            </CardTitle>
            <CardDescription>
              Explore the next frontier in AI-driven workflows and automation with Agentic RAG, combining autonomous agents with Retrieval-Augmented Generation techniques.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              By Prabhanshu Pandey | Jan 04, 2025
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild>
              <Link href="/blog/agentic-rag-future-of-knowledge-augmented-ai">Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

