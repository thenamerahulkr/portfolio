import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Github, Linkedin, Mail, Twitter, Globe, Facebook, BookOpen, Code2, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock workshops data
// const workshops = [
//   {
//     id: 1,
//     title: "Advanced React Patterns",
//     description: "Learn advanced React patterns and techniques to build scalable applications.",
//     date: "April 15, 2025",
//     time: "10:00 AM - 2:00 PM",
//     location: "Online",
//     image: "/placeholder.svg?height=300&width=500",
//     status: "Upcoming",
//     slug: "advanced-react-patterns",
//   },
//   {
//     id: 2,
//     title: "TypeScript for JavaScript Developers",
//     description: "A comprehensive introduction to TypeScript for experienced JavaScript developers.",
//     date: "May 10, 2025",
//     time: "9:00 AM - 12:00 PM",
//     location: "Tech Hub, San Francisco",
//     image: "/placeholder.svg?height=300&width=500",
//     status: "Upcoming",
//     slug: "typescript-for-javascript-developers",
//   },
//   {
//     id: 3,
//     title: "Building with Next.js",
//     description: "Explore the features of Next.js and learn how to build performant web applications.",
//     date: "March 5, 2025",
//     time: "1:00 PM - 5:00 PM",
//     location: "Online",
//     image: "/placeholder.svg?height=300&width=500",
//     status: "Past",
//     slug: "building-with-nextjs",
//   },
// ]

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="heading-xl mb-4">Rahul Kr</h1>
              <h2 className="heading-md text-muted-foreground">Full Stack Developer</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              I create beautiful, functional websites and applications with a focus on typography and user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/profile.png?height=300&width=300"
                alt="rahul kr"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              About
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">01</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="body-lg mb-6">
              "I'm passionate about learning and improving myself daily, with expertise in React, the basics of Next.js, and Node.js, focusing on building responsive and accessible web applications."
            </p>
            <p className="body-lg mb-6">
              When I'm not coding, you can find me hiking, reading, or experimenting with new technologies. I believe in
              clean, minimal design that puts the focus on content and user experience.
            </p>
            {/* <p className="body-lg mb-10">
              I also regularly conduct{" "}
              <Link href="/workshops" className="font-medium underline underline-offset-4">
                workshops and training sessions
              </Link>{" "}
              for developers looking to level up their skills in modern web technologies.
            </p> */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read My Blog</Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg">
                <Link href="/workshops">View Workshops</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Featured Projects
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
          </h2>
          <Link href="/projects" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Projects
          </Link>
        </div>

        <div className="grid gap-24">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                    0{project}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                    Project {project}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    A detailed description of this project, including the problem it solves, the technologies used, and
                    the challenges overcome during development.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/projects/project-${project}`}>View Project</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src={`/placeholder.svg?height=270&width=480`}
                      alt={`Project ${project}`}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops Section */}
      {/* <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Workshops
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">03</span>
          </h2>
          <Link href="/workshops" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Workshops
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={workshop.status === "Upcoming" ? "default" : "secondary"}>{workshop.status}</Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{workshop.title}</CardTitle>
                <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{workshop.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/workshops/${workshop.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Skills Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Skills
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">04</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-y-8 gap-x-16">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "Linux", "GitHub", "Express.js", "JavaScript", "C++"].map(
                (skill, index) => (
                  <div key={skill} className="border-b border-border pb-2 group">
                    <div className="flex items-baseline">
                      <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">{skill}</span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Recent Articles
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">05</span>
          </h2>
          <Link href="/blog" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Articles
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <Link
              key={post}
              href={`/blog/post-${post}`}
              className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Blog Post ${post}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March {post}, 2025</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Typography in Web Design: Best Practice
                </h3>
                <p className="text-muted-foreground">
                  Learn how to use typography effectively to create beautiful and readable web experiences.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-custom section-spacing">
        <h2 className="heading-lg mb-16 relative text-center">
          Get In Touch
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 left-1/2 -translate-x-1/2 opacity-80">
            06
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl leading-relaxed mb-10">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-6">
              <a
                href="mailto:thenamerahulkr@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Rahul%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">Mail</span>
              </a>
              <a href="https://www.linkedin.com/in/thenamerahulkr" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin</span>
              </a>
              <a href="https://github.com/thenamerahulkr" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">github</span>
              </a>
              <a href="https://twitter.com/thenamerahulkr" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">twitter</span>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/918404844101" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">WhatsApp</span>
              </a>
              {/* Telegram */}
              <a href="https://t.me/thenamerahulkr" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Send className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">Telegram</span>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/thenamerahulkr" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">facebook</span>
              </a>
              {/* Medium */}
              <a href="https://medium.com/@thenamerahulkr" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <BookOpen className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">Medium</span>
              </a>
              {/* DEV */}
              <a href="https://dev.to/thenamerahulkr" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Code2 className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">DEV</span>
              </a>
            </div>
          </div>
          <div>
            {/* You can add a contact form or map here if you like */}
          </div>
        </div>
      </section>
    </div>
  )
}
