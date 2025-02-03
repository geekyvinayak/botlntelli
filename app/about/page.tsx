import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl">
          About{" "}
          <span className="text-is-gradient">
            Us
          </span>
        </h1>
        <p className="text-lg text-muted-foreground">
          At <strong>Botintelli</strong>, we believe in a world where artificial intelligence is no longer confined to the hands of a few but is accessible to all. As a product of <strong>LiteratiTech Solutions Pvt. Ltd.</strong>, we are driven by a shared passion for blending intellectual depth with cutting-edge technology to build tools that empower individuals, businesses, and communities to unlock the true potential of AI.
        </p>
      </div>

      {/* Who We Are Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Who We Are</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Botintelli is not just a product; it's a vision. It represents our commitment to democratizing AI by transforming it from a complex, intimidating field into an approachable and user-friendly technology that anyone can use. Our team comprises innovators, technologists, and thinkers who are united by the mission to enable every human being to harness the full capacity of AI for their unique needs.
          </p>
          <p>
            Rooted in the spirit of <strong>LiteratiTech</strong>, we bring a thoughtful and cultured approach to solving real-world problems through technology. We aim to break down the barriers between technology and people by simplifying AI and making it a tool for everyday problem-solving, creativity, and exploration.
          </p>
        </CardContent>
      </Card>

      {/* Meet Our Co-Founder Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Meet Our Co-Founder</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/53421842_2582982261730926_2267699069650468864_n.jpeg"
                alt="Prabhanshu Pandey"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg">
              <strong>Prabhanshu Pandey</strong>, Co-Founder of Botintelli, brings over 12 years of rich experience in IT product management and cloud technology. With a strong background in developing impactful user experiences and leading cross-functional teams, Prabhanshu has successfully driven large-scale product initiatives across industries. His expertise in AI, cloud platforms, and product strategy shapes Botintelli's mission to make AI accessible to all. Passionate about product innovation, he is committed to fostering a collaborative ecosystem that bridges technology and human potential.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Vision & Mission Section */}
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To empower humanity by making advanced AI accessible, intuitive, and adaptable to everyone's unique needs—transforming individuals from passive users into active creators of intelligent solutions.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our mission is to democratize AI by breaking down barriers to entry, simplifying complex technologies, and providing a platform that enables every individual, regardless of their technical background, to harness the full potential of AI in their personal and professional lives. We strive to foster a culture of continuous learning, collaboration, and innovation to build solutions that make AI an integral, empowering force in everyday problem-solving.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Values Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Our Core Values</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Empowerment through Knowledge</h3>
            <p className="text-muted-foreground">
              We believe in equipping people with the right tools and understanding to leverage AI confidently and creatively, fostering self-reliance and informed decision-making.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Accessibility and Inclusion</h3>
            <p className="text-muted-foreground">
              AI should be for everyone. We are committed to ensuring our platform is easy to use, accessible to all, and inclusive of diverse user needs, regardless of technical expertise or background.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Continuous Innovation</h3>
            <p className="text-muted-foreground">
              Staying at the cutting edge of AI and technology is at the heart of what we do. We embrace a mindset of exploration and improvement to consistently deliver the most relevant and advanced solutions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Integrity and Responsibility</h3>
            <p className="text-muted-foreground">
              We prioritize ethical AI development, ensuring transparency, fairness, and accountability in our products and practices. Our solutions are designed to respect user privacy and promote trust.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Collaboration and Community</h3>
            <p className="text-muted-foreground">
              We recognize the power of collective intelligence. By fostering a vibrant community of users, partners, and thinkers, we aim to build a collaborative ecosystem where ideas can flourish and solutions are co-created.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Simplicity with Depth</h3>
            <p className="text-muted-foreground">
              We believe that simplicity in design doesn't mean sacrificing power. Our goal is to deliver solutions that are easy to use while offering deep capabilities for advanced applications.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Our Approach Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Our Approach</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We understand that the true power of AI lies not just in what it can do, but in how easily it can be applied to real-world scenarios. That's why Botintelli focuses on:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>User-Centric Design:</strong> Building intuitive interfaces that simplify AI interaction for everyone.</li>
            <li><strong>Scalable Solutions:</strong> Creating a platform that can grow with the needs of individuals and organizations alike.</li>
            <li><strong>Comprehensive Support:</strong> Offering learning resources, tutorials, and community engagement to ensure users get the most out of our platform.</li>
          </ul>
          <p>
            Whether you're a curious individual, a small business owner, or an enterprise looking to harness AI, Botintelli is your partner in making AI a reality for you.
          </p>
        </CardContent>
      </Card>

      {/* Join Us Section */}
      <Card className="border-2 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900 dark:to-violet-900">
        <CardHeader>
          <CardTitle className="text-2xl text-is-gradient">Join Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We're not just building a product; we're building a movement. Join us in our mission to democratize AI and make it a force for positive change. Together, we can create a future where AI empowers everyone to achieve more, think bigger, and solve problems faster.
          </p>
          <p className="text-lg font-semibold">
            Welcome to <span className="text-is-gradient">Botintelli</span>. Welcome to the future of accessible AI.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

