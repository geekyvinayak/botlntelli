"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useFormStatus } from "react-dom"
import { sendEmail } from "../actions/send-email"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Users, GitGraphIcon as Graph, Zap, Link2, Brain, Target, UserCheck, Bot, MessageSquare, Book, Workflow } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  jobTitle: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  companySize: z.string({
    required_error: "Please select your company size.",
  }),
  message: z.string().optional(),
  source: z.string().optional(),
})

export default function PricingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: "",
      message: "",
      source: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })
    formData.append("formType", "pricing")

    const result = await sendEmail(formData)

    if (result.success) {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible with pricing information.",
      })
      form.reset()
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to send message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container py-16 space-y-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Features and Capabilities */}
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Enterprise-Grade{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
              Flexible pricing plans designed to scale with your business needs
            </p>
          </div>

          {/* Core Features */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Core Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {coreFeatures.map((feature, i) => (
                <Card key={i} className="bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {feature.capabilities.map((capability, j) => (
                        <li key={j}>{capability}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Enterprise Features */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Included with all Enterprise Plans</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {enterpriseFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:border-l lg:pl-12">
          <section className="max-w-2xl mx-auto">
            <div className="sticky top-24">
              <Card className="border-2">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Contact Sales</CardTitle>
                  <CardDescription>
                    Learn more about our enterprise solutions and pricing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input placeholder="Company Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input placeholder="Product Manager" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="companySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Size</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select company size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="11-50">11-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                                <SelectItem value="201-500">201-500 employees</SelectItem>
                                <SelectItem value="501-1000">501-1000 employees</SelectItem>
                                <SelectItem value="1000+">1000+ employees</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your needs..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Please provide as much detail as possible so we can best assist you.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="source"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How did you hear about us? (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Google, Twitter, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <SubmitButton />
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button 
      type="submit" 
      className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
      disabled={pending}
    >
      {pending ? "Sending..." : "Contact Sales"}
    </Button>
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
]

const enterpriseFeatures = [
  {
    title: "Customer-specific ML models for analyzing feedback",
    description: "Get tailored insights with custom-trained machine learning models",
  },
  {
    title: "Dedicated Data Auditors",
    description: "Expert support for implementation and ongoing model updates",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption",
  },
  {
    title: "Priority Support",
    description: "24/7 dedicated support with guaranteed response times",
  },
]

