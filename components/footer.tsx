import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bot } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-wrap lg:flex-row justify-between text-center">

          <div className="flex order-1 w-full lg:w-auto lg:-order-1 mt-5 lg:mt-0 ">
            <div className="flex flex-col gap-4  sm:flex-row sm:items-center sm:justify-between  w-full lg:w-auto">
              <div className="flex flex-col  gap-2  w-full items-center lg:items-start lg:w-auto">
                <Link href="/" className="flex  items-center space-x-2">
                  <Bot className="h-16 w-16 text-[var(--base-color)]" />
                  <span className="text-4xl font-bold text-is-gradient">
                    BotIntelli
                  </span>
                </Link>
                <p className="text-sm text-muted-foreground mx-0">
                  © {new Date().getFullYear()} Literatitech Solution Pvt. Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-left  w-[50%] items-center flex flex-col lg:block lg:w-auto">
            <h4 className="text-sm font-semibold text-is-gradient">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-is-gradient text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-left  w-[50%] items-center flex flex-col lg:block lg:w-auto">
            <h4 className="text-sm font-semibold text-is-gradient">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-left mt-5 lg:mt-0  w-[50%] items-center flex flex-col lg:block lg:w-auto">
            <h4 className="text-sm font-semibold text-is-gradient">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-left mt-5 lg:mt-0  w-[50%] items-center flex flex-col lg:block lg:w-auto">
            <h4 className="text-sm font-semibold text-is-gradient">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

