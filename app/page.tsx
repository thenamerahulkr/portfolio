import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter, Facebook, BookOpen, Code2, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from '@/lib/supabase.';
import ContactForm from "@/components/ContactForm"; 
import { EducationSection } from '@/components/EducationSection';

// Make the component an async function to fetch data
export const metadata = {
  title: "Portfolio | thenamerahulkr",
  description: "Full Stack Developer | React | Next.js | Supabase",
  icons: {
    icon: "/mine.ico", 
  },
};
export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default async function HomePage() {
  // Fetch featured projects
  const { data: projects, error: projectsError } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: true }) // Order by creation date, newest first
    .limit(4); // Get only the top 4 for the homepage

  if (projectsError) {
    console.error('Error fetching projects:', projectsError);
  }

  // Fetch recent blog posts
  const { data: blogPosts, error: blogPostsError } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false }) // Order by creation date, newest first
    .limit(3); // Get only the top 3 for the homepage

  if (blogPostsError) {
    console.error('Error fetching blog posts:', blogPostsError);
  }

  // Ensure data is an array, even if null or undefined from Supabase
  const featuredProjects = projects || [];
  const recentBlogPosts = blogPosts || [];


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
          <div
            className="group relative rounded-2xl overflow-hidden
             transition-all duration-300 ease-in-out
             hover:scale-[0.98] hover:shadow-lg hover:border hover:border-primary/50
             hover:bg-background/50 hover:dark:bg-secondary/10"
            >
           <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
           <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>

          <div className="relative z-10 aspect-square bg-muted border border-border">
          <Image
          src="/images/profile.png?height=300&width=300"
          alt="rahul kr"
          width={200}
          height={200}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
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
            When I’m not coding, I enjoy reading, learning about emerging technologies, or experimenting with new tools and frameworks. I believe in clean, minimal design that keeps the focus on content and user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read My Blog</Link>
              </Button>
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
          {featuredProjects.slice(0, 4).map((project, idx) => (
            <div key={project.id} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/projects/${project.slug}`}>View Project</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
          {recentBlogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <EducationSection />
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
              Whether you have a question, want to discuss a project, or just say hello, I'd love to hear from you.
            </p>
            <div className="flex flex-col gap-6">
              <a href="https://www.linkedin.com/in/thenamerahulkr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin</span>
              </a>
              <a href="https://github.com/thenamerahulkr/thenamerahulkr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">github</span>
              </a>
              <a href="https://twitter.com/thenamerahulkr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">twitter</span>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/918404844101" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">WhatsApp</span>
              </a>
              {/* Telegram */}
              <a href="https://t.me/thenamerahulkr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Send className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">Telegram</span>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/thenamerahulkr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">facebook</span>
              </a>
              {/* Medium */}
              <a href="https://medium.com/@thenamerahulkr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <BookOpen className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">Medium</span>
              </a>
              {/* DEV */}
              <a href="https://dev.to/thenamerahulkr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Code2 className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">DEV</span>
              </a>
            </div>
          </div>
          <div>
            <ContactForm /> {/* Render the new ContactForm component here */}
          </div>
        </div>
      </section>
    </div>
  )
}