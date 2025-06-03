import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Your local blog posts
export const blogPosts = [
  {
    id: 1,
    title: "Mastering JavaScript's Array Powerhouses: forEach, map, filter, reduce, spread, and rest",
    excerpt: "A concise guide to JavaScript's essential array methods—learn how to iterate, transform, filter, aggregate, and expand arrays like a pro.",
    date: "Nov 23, 2024",
    category: "JavaScript",
    image: "/images/medium1.png", // Save the attached image in your public/images folder
    slug: "js-array-powerhouses-foreach-map-filter-reduce",
  },
  {
    id: 2,
    title: "What is the React useEffect cleanup function, and how it works?",
    excerpt: "Detailed explanation about React’s useEffect cleanup function: what it is, when it runs, and why it’s vital for preventing memory leaks and bugs.",
    date: "Feb 6, 2025",
    category: "React",
    image: "/images/medium2.png", // Use the attached image, save it in /public/images/
    slug: "react-useeffect-cleanup-function",
  },
  {
  id: 3,
  slug: "monolithic-vs-microservices-which-one-to-choose",
  title: "Monolithic Architecture vs. Microservices: Which One to Choose?",
  date: "Feb 5, 2025",
  author: "Rahul Kumar",
  category: "Architecture",
  image: "/images/medium3.png", // Save the attached image in /public/images/
  excerpt: "In the world of software development, Monolithic Architecture and Microservices are two widely used approaches for designing applications. This article explores both architectures, their advantages and disadvantages, and when to use them."
  },
  {
    id: 4,
    slug: "authentication-and-authorization",
    title: "Authentication and authorization",
    date: "Dec 1, 2024",
    category: "Security",
    image: "/images/medium4.png", // Save the attached image in /public/images/
    excerpt:
      "Authentication and authorization are two fundamental concepts in web application security. This guide explores best practices, libraries, and strategies for Node.js projects.",
  },
  {
    id: 5,
    slug: "fetch-vs-axios-http-requests-in-javascript",
    title: "Fetch vs. Axios HTTP Requests In JavaScript",
    date: "Nov 28, 2024",
    category: "JavaScript",
    image: "/images/dev5.png", // Save the attached image in /public/images/
    excerpt:
      "A practical comparison of Fetch and Axios for making HTTP requests in JavaScript. Learn the differences, pros, and cons of each approach with code examples.",
  },
  {
    id: 6,
    slug: "expressjs-applications-with-middleware",
    title: "Express.js Applications with Middleware",
    date: "Nov 23, 2024",
    author: "Rahul Kumar",
    category: "Node.js",
    image: "/images/dev6.png", // Save your image in /public/images/
    excerpt:
      "A practical guide to using middleware in Express.js applications. Learn what middleware is, how it works, and how to build scalable Node.js APIs with it.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Blog</h1>
          <p className="body-lg text-zinc-600">
            Thoughts, insights, and perspectives on design, development, and the digital landscape.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {blogPosts[0].category} • {blogPosts[0].date}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-zinc-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-zinc-600 mb-6">{blogPosts[0].excerpt}</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-zinc-900 group-hover:text-white transition-colors"
                >
                  Read Article
                </Button>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-zinc-100 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-600 transition-colors">{post.title}</h3>
                <p className="text-zinc-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
