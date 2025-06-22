// import Link from "next/link";
// import Image from "next/image";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const blogPosts = [
//   {
//     id: 1,
//     slug: "js-array-powerhouses-foreach-map-filter-reduce",
//     title: "Mastering JavaScript's Array Powerhouses: forEach, map, filter, reduce, spread, and rest",
//     date: "Nov 23, 2024",
//     author: "Rahul Kumar",
//     category: "JavaScript",
//     image: "/images/medium1.png",
//     excerpt:
//       "A concise guide to JavaScript's essential array methods—learn how to iterate, transform, filter, aggregate, and expand arrays like a pro. This comprehensive tutorial covers forEach, map, filter, reduce, and the powerful spread and rest operators with practical examples.",
//     mediumUrl: "https://medium.com/@thenamerahulkr/mastering-javascripts-array-powerhouses-foreach-map-filter-reduce-spread-and-rest-7f3f0d19e309", // <-- Add your Medium URL here
//     content: `
//       <p class="text-xl leading-relaxed mb-6">JavaScript arrays are incredibly powerful, especially when you master methods like <strong>forEach</strong>, <strong>map</strong>, <strong>filter</strong>, <strong>reduce</strong>, and the <strong>spread</strong> and <strong>rest</strong> operators. In this article, we'll break down what each does and provide practical examples.</p>
//       <h2 class="text-3xl font-bold mt-12 mb-6">forEach</h2>
//       <p class="text-lg leading-relaxed mb-6">Use <code>forEach</code> to iterate over each item in an array:</p>
//       <pre><code>const arr = [1,2,3];
// arr.forEach(item =&gt; console.log(item));</code></pre>
//       <h2 class="text-3xl font-bold mt-12 mb-6">map</h2>
//       <p class="text-lg leading-relaxed mb-6">Use <code>map</code> to transform each item and return a new array:</p>
//       <pre><code>const doubled = arr.map(item =&gt; item * 2);</code></pre>
//       <h2 class="text-3xl font-bold mt-12 mb-6">filter</h2>
//       <p class="text-lg leading-relaxed mb-6">Use <code>filter</code> to keep only items that match a condition:</p>
//       <pre><code>const evens = arr.filter(item =&gt; item % 2 === 0);</code></pre>
//       <h2 class="text-3xl font-bold mt-12 mb-6">reduce</h2>
//       <p class="text-lg leading-relaxed mb-6">Use <code>reduce</code> to aggregate array values:</p>
//       <pre><code>const sum = arr.reduce((acc, item) =&gt; acc + item, 0);</code></pre>
//       <h2 class="text-3xl font-bold mt-12 mb-6">Spread &amp; Rest</h2>
//       <p class="text-lg leading-relaxed mb-6">The <strong>spread operator</strong> (<code>...</code>) expands arrays:</p>
//       <pre><code>const arr2 = [...arr, 4, 5];</code></pre>
//       <p class="text-lg leading-relaxed mb-6">The <strong>rest operator</strong> (<code>...</code>) collects function arguments:</p>
//       <pre><code>function sumAll(...nums) {
//   return nums.reduce((a, b) =&gt; a + b, 0);
// }</code></pre>
//       <p class="text-lg leading-relaxed mb-6">Master these and you'll handle arrays like a pro!</p>
//     `,
//     relatedPosts: [
//       {
//         id: 2,
//         title: "What is the React useEffect cleanup function, and how it works?",
//         slug: "react-useeffect-cleanup-function",
//         image: "/images/medium2.png?height=200&width=300",
//       },
//       {
//         id: 3,
//         title: "Monolithic Architecture vs. Microservices: Which One to Choose?",
//         slug: "monolithic-vs-microservices-which-one-to-choose",
//         image: "/images/medium3.png?height=200&width=300",
//       }
//     ],
//   },
//   {
//     id: 2,
//     slug: "react-useeffect-cleanup-function",
//     title: "What is the React useEffect cleanup function, and how it works?",
//     date: "Feb 6, 2025",
//     author: "Rahul Kumar",
//     category: "React",
//     image: "/images/medium2.png", // Place your screenshot in /public/images/
//     excerpt: "Detailed explanation about React’s useEffect cleanup function: what it is, when it runs, and why it’s vital for preventing memory leaks and bugs.",
//     mediumUrl: "https://medium.com/@thenamerahulkr/what-is-the-react-useeffect-cleanup-function-and-how-it-works-bc50ab7c8a77", // <-- Add your Medium URL here
//     content: `
//     <p class="text-xl leading-relaxed mb-6"><em>Detailed explanation about React’s <code>useEffect</code> cleanup function works.</em></p>
//     <h2 class="text-3xl font-bold mt-12 mb-6">What is the useEffect cleanup function?</h2>
//     <p class="text-lg leading-relaxed mb-6">
//       The <code>useEffect</code> cleanup function in React is a function you return from inside your <code>useEffect</code> hook. It’s called automatically when your component unmounts, or just before the effect runs again, to clean up any ongoing side effects like intervals, subscriptions, or network requests.
//     </p>
//     <pre><code>useEffect(() =&gt; {
//   // Your effect code (side effect)
//   return () =&gt; {
//     // Cleanup code runs before unmount or before next effect
//   };
// }, [dependencies]);</code></pre>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Why do you need a cleanup function?</h2>
//     <p class="text-lg leading-relaxed mb-6">
//       Without cleanup, lingering side effects (like timers, event listeners, or fetches) can cause memory leaks, bugs, or errors if they try to update state after your component has unmounted.
//     </p>
//     <h2 class="text-3xl font-bold mt-12 mb-6">When does the cleanup function run?</h2>
//     <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//       <li>When the component unmounts.</li>
//       <li>Before the effect runs again (if dependencies change).</li>
//     </ul>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Common use cases</h2>
//     <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//       <li>Clearing <code>setInterval</code> or <code>setTimeout</code></li>
//       <li>Aborting fetch requests with <code>AbortController</code></li>
//       <li>Removing event listeners</li>
//       <li>Unsubscribing from WebSocket or data streams</li>
//     </ul>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Example: Cleaning up an interval</h2>
//     <pre><code>useEffect(() =&gt; {
//   const intervalId = setInterval(() =&gt; {
//     // Do something every second
//   }, 1000);
//   return () =&gt; clearInterval(intervalId); // Cleanup
// }, []);</code></pre>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Example: Cleaning up a fetch request</h2>
//     <pre><code>useEffect(() =&gt; {
//   const controller = new AbortController();
//   fetch(url, { signal: controller.signal })
//     .then(...)
//     .catch(...)
//   return () =&gt; controller.abort(); // Cleanup
// }, [url]);</code></pre>
//     <blockquote class="border-l-4 border-zinc-900 pl-6 italic my-8 text-xl">
//       “Cleanup functions in <code>useEffect</code> help keep your React apps bug-free and performant by preventing unwanted side effects.”
//     </blockquote>
//     <p class="text-lg leading-relaxed mb-6">
//       Learn to use cleanup functions whenever you set up side effects in your components!
//     </p>
//   `,
//     relatedPosts: [
//       {
//         id: 1,
//         title: "Mastering JavaScript's Array Powerhouses: forEach, map, filter, reduce, spread, and rest",
//         slug: "js-array-powerhouses-foreach-map-filter-reduce",
//         image: "/images/medium1.png",
//       },
//       {
//         id: 3,
//         title: "Monolithic Architecture vs. Microservices: Which One to Choose?",
//         slug: "monolithic-vs-microservices-which-one-to-choose",
//         image: "/images/medium3.png?height=200&width=300",
//       }
//     ],
//   },
//   {
//     id: 3,
//     slug: "monolithic-vs-microservices-which-one-to-choose",
//     title: "Monolithic Architecture vs. Microservices: Which One to Choose?",
//     date: "Feb 5, 2025",
//     author: "Rahul Kumar",
//     category: "Architecture",
//     image: "/images/medium3.png", // Save the attached image in /public/images/
//     excerpt: "In the world of software development, Monolithic Architecture and Microservices are two widely used approaches for designing applications. This article explores both architectures, their advantages and disadvantages, and when to use them.",
//     mediumUrl: "https://medium.com/@thenamerahulkr/monolithic-architecture-vs-microservices-which-one-to-choose-75d13a4aa348", // <-- Add your Medium URL here
//     content: `
//       <p class="text-xl leading-relaxed mb-6">
//         In the world of software development, choosing the right architecture is crucial. The two most popular approaches are Monolithic Architecture and Microservices.
//       </p>
//       <h2 class="text-3xl font-bold mt-12 mb-6">Monolithic Architecture</h2>
//       <p class="text-lg leading-relaxed mb-6">
//         A monolithic application is built as a single, unified unit. All features and functions are tightly coupled and run as a single service.
//       </p>
//       <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//         <li><strong>Advantages:</strong> Simple to develop, test, and deploy. Less overhead for small teams.</li>
//         <li><strong>Disadvantages:</strong> Difficult to scale, maintain, and update as the codebase grows.</li>
//       </ul>
//       <h2 class="text-3xl font-bold mt-12 mb-6">Microservices Architecture</h2>
//       <p class="text-lg leading-relaxed mb-6">
//         Microservices break an application into smaller, independent services that communicate over APIs. Each service is responsible for a specific business capability.
//       </p>
//       <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//         <li><strong>Advantages:</strong> Easier to scale, deploy, and maintain. Teams can work independently on different services.</li>
//         <li><strong>Disadvantages:</strong> More complex infrastructure, requires robust DevOps and monitoring.</li>
//       </ul>
//       <h2 class="text-3xl font-bold mt-12 mb-6">Which One to Choose?</h2>
//       <p class="text-lg leading-relaxed mb-6">
//         Choose monolithic for small projects or MVPs where speed and simplicity matter. Choose microservices for large, complex systems that need to scale and evolve independently.
//       </p>
//       <blockquote class="border-l-4 border-zinc-900 pl-6 italic my-8 text-xl">
//         "There is no one-size-fits-all. The right architecture depends on your team's needs, project size, and future plans."
//       </blockquote>
//       <p class="text-lg leading-relaxed mb-6">
//         Evaluate your requirements, team expertise, and long-term vision before making a decision.
//       </p>
//     `,
//     relatedPosts: [
//       {
//         id: 2,
//         title: "What is the React useEffect cleanup function, and how it works?",
//         slug: "react-useeffect-cleanup-function",
//         image: "/images/medium2.png?height=200&width=300",
//       },
//       {
//         id: 1,
//         title: "Mastering JavaScript's Array Powerhouses: forEach, map, filter, reduce, spread, and rest",
//         slug: "js-array-powerhouses-foreach-map-filter-reduce",
//         image: "/images/medium1.png",
//       }
//     ],
//   },
//   {
//     id: 4,
//     slug: "authentication-and-authorization",
//     title: "Authentication and authorization",
//     date: "Dec 1, 2024",
//     author: "Rahul Kumar",
//     category: "Security",
//     image: "/images/medium4.png", // Save the attached image in /public/images/
//     excerpt: "Authentication and authorization are two fundamental concepts in web application security. This guide explores best practices, libraries, and strategies for Node.js projects.",
//     mediumUrl: "https://medium.com/@thenamerahulkr/authentication-and-authorization-are-two-fundamental-concepts-in-web-application-security-8271b80f83d9",
//     content: `
//     <p class="text-xl leading-relaxed mb-6">
//       Authentication and authorization are two fundamental concepts in web application security. They ensure that users have the right level of access to resources while protecting sensitive data. In this guide, we’ll explore how to implement authentication and authorization in Node.js applications, covering best practices, popular libraries, and strategies for securing your Node.js projects.
//     </p>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Authentication vs. Authorization</h2>
//     <p class="text-lg leading-relaxed mb-6">
//       <strong>Authentication</strong> verifies who a user is, while <strong>authorization</strong> determines what resources a user can access. Both are essential for robust security.
//     </p>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Best Practices</h2>
//     <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//       <li>Use established libraries like Passport.js for authentication.</li>
//       <li>Implement JWT (JSON Web Token) for stateless authentication.</li>
//       <li>Keep sensitive secrets (like JWT keys) secure and out of your codebase.</li>
//       <li>Apply role-based access control for fine-grained authorization.</li>
//     </ul>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Popular Libraries</h2>
//     <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//       <li><code>passport</code> for authentication strategies.</li>
//       <li><code>jsonwebtoken</code> for working with JWTs.</li>
//       <li><code>express-session</code> for session management.</li>
//     </ul>
//     <blockquote class="border-l-4 border-zinc-900 pl-6 italic my-8 text-xl">
//       "Never roll your own authentication—use trusted libraries and always follow security best practices."
//     </blockquote>
//     <p class="text-lg leading-relaxed mb-6">
//       By following these guidelines, you can protect your Node.js applications from common security threats and ensure safe user access.
//     </p>
//   `,
//     relatedPosts: [
//       {
//         id: 3,
//         title: "Monolithic Architecture vs. Microservices: Which One to Choose?",
//         slug: "monolithic-vs-microservices-which-one-to-choose",
//         image: "/images/medium3.png?height=200&width=300",
//       },
//       {
//         id: 2,
//         title: "What is the React useEffect cleanup function, and how it works?",
//         slug: "react-useeffect-cleanup-function",
//         image: "/images/medium2.png?height=200&width=300",
//       }
//     ],
//   },
//   {
//     id: 5,
//     slug: "fetch-vs-axios-http-requests-in-javascript",
//     title: "Fetch vs. Axios HTTP Requests In JavaScript",
//     date: "Nov 28, 2024",
//     author: "Rahul Kumar",
//     category: "JavaScript",
//     image: "/images/dev5.png", // Save the attached image in /public/images/
//     excerpt:
//       "A practical comparison of Fetch and Axios for making HTTP requests in JavaScript. Learn the differences, pros, and cons of each approach with code examples.",
//     mediumUrl: "https://dev.to/thenamerahulkr/fetch-vs-axios-http-requests-in-javascript-11dl", // <-- Add your Medium URL here
//     content: `
//     <p class="text-xl leading-relaxed mb-6">
//       Fetch is a newer way to send HTTP requests. Before Fetch, XMLHttpRequest was a very popular way to send requests. In fact, it was the only way to send HTTP requests in the early days of JavaScript. XMLHttpRequest does not support promises and mostly relies on callbacks if we have nested requests, which could be too repetitive and hard to read. That’s when Fetch entered.
//     </p>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Fetch:</h2>
//     <p class="text-lg leading-relaxed mb-6">
//       Fetch supports promises. It is way cleaner and readable than XMLHttpRequest requests, at least in my experience. Here is an example of fetch request:
//     </p>
//     <pre><code>fetch('URL') // instead of URL use whichever URL you want to send a request
//   .then((response) =&gt; {
//     if (!response.ok)
//       throw new Error(\`Status Code Error: \${response.status}\`);
//     return response.json(); // parse json
//   })
//   .then((data) =&gt; {
//     // assuming data is list of students or any object
//     console.log(data);
//   })
//   .catch((err) =&gt; {
//     console.log(err);
//   });</code></pre>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Axios:</h2>
//     <p class="text-lg leading-relaxed mb-6">
//       Axios is a promise-based HTTP client for the browser and Node.js. It provides a higher-level API for making HTTP requests and comes with many features out of the box, like automatic JSON data transformation, request/response interception, and more.
//     </p>
//     <pre><code>axios.get('URL')
//   .then((response) =&gt; {
//     console.log(response.data);
//   })
//   .catch((error) =&gt; {
//     console.log(error);
//   });</code></pre>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Comparison</h2>
//     <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//       <li><b>Fetch:</b> Native, promise-based, needs manual error handling, no built-in request cancellation.</li>
//       <li><b>Axios:</b> Feature-rich, supports older browsers, automatic JSON transform, request cancellation, interceptors.</li>
//     </ul>
//     <blockquote class="border-l-4 border-zinc-900 pl-6 italic my-8 text-xl">
//       "Choose Fetch for modern, lightweight needs. Choose Axios if you want more features and browser support."
//     </blockquote>
//     <p class="text-lg leading-relaxed mb-6">
//       Both are great tools—pick the one that fits your project’s requirements!
//     </p>
//   `,
//     relatedPosts: [
//       {
//         id: 2,
//         title: "What is the React useEffect cleanup function, and how it works?",
//         slug: "react-useeffect-cleanup-function",
//         image: "/images/medium2.png?height=200&width=300",
//       },
//       {
//         id: 4,
//         title: "Authentication and authorization",
//         slug: "authentication-and-authorization",
//         image: "/images/medium4.png?height=200&width=300",
//       }
//     ],
//   },
//   {
//     id: 6,
//     slug: "expressjs-applications-with-middleware",
//     title: "Express.js Applications with Middleware",
//     date: "Nov 23, 2024",
//     author: "Rahul Kumar",
//     category: "Node.js",
//     image: "/images/dev6.png", // Save the attached image in /public/images/
//     excerpt:
//       "A practical guide to using middleware in Express.js applications. Learn what middleware is, how it works, and how to build scalable Node.js APIs with it.",
//     mediumUrl: "https://dev.to/thenamerahulkr/expressjs-applications-with-middleware-4oio", // <-- Add your Medium URL here
//     content: `
//     <p class="text-xl leading-relaxed mb-6">
//       Middleware is a core concept in Express.js that allows you to add additional functionality to your Node.js applications. In this article, we’ll explore what middleware is, how it works, and how you can use it to build robust APIs.
//     </p>
//     <h2 class="text-3xl font-bold mt-12 mb-6">What is Middleware?</h2>
//     <p class="text-lg leading-relaxed mb-6">
//       Middleware functions are functions that have access to the request object (<code>req</code>), the response object (<code>res</code>), and the next middleware function in the application’s request-response cycle. Middleware can execute code, modify the request/response, end the request-response cycle, or call the next middleware in the stack.
//     </p>
//     <pre><code>app.use((req, res, next) =&gt; {
//   console.log(\`Request URL: \${req.url}\`);
//   next();
// });</code></pre>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Types of Middleware</h2>
//     <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//       <li><strong>Application-level middleware</strong></li>
//       <li><strong>Router-level middleware</strong></li>
//       <li><strong>Error-handling middleware</strong></li>
//       <li><strong>Built-in middleware</strong></li>
//       <li><strong>Third-party middleware</strong></li>
//     </ul>
//     <h2 class="text-3xl font-bold mt-12 mb-6">Why Use Middleware?</h2>
//     <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//       <li>Logging and debugging</li>
//       <li>Authentication and authorization</li>
//       <li>Parsing request bodies</li>
//       <li>Error handling</li>
//       <li>Serving static files</li>
//     </ul>
//     <blockquote class="border-l-4 border-zinc-900 pl-6 italic my-8 text-xl">
//       "Middleware makes your Express.js apps modular, reusable, and maintainable."
//     </blockquote>
//     <p class="text-lg leading-relaxed mb-6">
//       Mastering middleware is essential for building scalable and maintainable Node.js applications with Express.js.
//     </p>
//   `,
//     relatedPosts: [
//       {
//         id: 4,
//         title: "Authentication and authorization",
//         slug: "authentication-and-authorization",
//         image: "/images/medium4.png?height=200&width=300",
//       },
//       {
//         id: 3,
//         title: "Monolithic Architecture vs. Microservices: Which One to Choose?",
//         slug: "monolithic-vs-microservices-which-one-to-choose",
//         image: "/images/medium3.png?height=200&width=300",
//       }
//     ],
//   }
//   // ...add more posts as needed
// ];

// const getBlogPost = (slug: string) =>
//   blogPosts.find((post) => post.slug === slug);

// export function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//   const post = getBlogPost(params.slug);

//   if (!post) {
//     return (
//       <div className="pt-20">
//         <div className="container-custom section-spacing text-center">
//           <h2 className="text-3xl font-bold mb-4">Post not found</h2>
//           <p className="text-zinc-600 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
//           <Button asChild>
//             <Link href="/blog">Back to Blog</Link>
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="pt-20">
//       <article className="container-custom section-spacing">
//         {/* Back Button */}
//         <div className="mb-10">
//           <Button asChild variant="ghost" className="group">
//             <Link href="/blog" className="flex items-center gap-2">
//               <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
//               <span>Back to Blog</span>
//             </Link>
//           </Button>
//         </div>

//         {/* Post Header */}
//         <div className="max-w-3xl mx-auto mb-10">
//           <div className="text-sm font-medium text-zinc-500 mb-4">
//             {post.category} • {post.date}
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
//               <Image
//                 src="/images/profile.png?height=40&width=40"
//                 alt={post.author}
//                 width={40}
//                 height={40}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <span className="text-zinc-600">By {post.author}</span>
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="max-w-4xl mx-auto mb-12">
//           <div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden">
//             <Image
//               src={post.image || "/placeholder.svg"}
//               alt={post.title}
//               width={1200}
//               height={600}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Post Content */}
//         <div className="max-w-3xl mx-auto">
//           <div
//             className="prose prose-lg prose-zinc max-w-none mb-8"
//             dangerouslySetInnerHTML={{ __html: post.content || post.excerpt || "" }}
//           />
//           {/* Medium Redirect Button */}
//           {post.mediumUrl && (
//             <div className="flex gap-4 mb-8">
//               <Button asChild size="lg" className="gap-2">
//                 <a
//                   href={post.mediumUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Read this article on Medium or Dev
//                 </a>
//               </Button>
//             </div>
//           )}
//         </div>

//         {/* Author Bio */}
//         <div className="max-w-3xl mx-auto mt-16 p-8 bg-black-100 rounded-lg">
//           <div className="flex items-center gap-6">
//             <div className="w-20 h-20 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
//               <Image
//                 src="/images/profile.png?height=80&width=80"
//                 alt={post.author}
//                 width={80}
//                 height={80}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
//               <p className="text-black-600">
//                 Full Stack Developer with a passion for technology, JavaScript, and sharing knowledge on web development and computer science.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Related Posts */}
//         {post.relatedPosts && post.relatedPosts.length > 0 && (
//           <div className="max-w-3xl mx-auto mt-16">
//             <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               {post.relatedPosts.map((relatedPost) => (
//                 <Link
//                   key={relatedPost.id}
//                   href={`/blog/${relatedPost.slug}`}
//                   className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
//                 >
//                   <div className="aspect-video bg-zinc-100 overflow-hidden">
//                     <Image
//                       src={relatedPost.image || "/placeholder.svg"}
//                       alt={relatedPost.title}
//                       width={300}
//                       height={200}
//                       className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold group-hover:text-zinc-600 transition-colors">
//                       {relatedPost.title}
//                     </h3>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </article>
//     </div>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from '@/lib/supabase.'; // Assuming your Supabase client is here

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string; 
  author: string;
  category: string;
  image: string | null;
  excerpt: string | null;
  medium_url: string | null;
  content: string | null;
  relatedposts: { id: number; title: string; slug: string; image: string; }[] | null;
}

// Function to fetch a single blog post from Supabase
const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single(); 

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
  return data as BlogPost;
};

export async function generateStaticParams() {
  const { data: blogPosts, error } = await supabase
    .from('blogs')
    .select('slug'); // Only fetch slugs for static paths

  if (error) {
    console.error('Error fetching blog slugs for static params:', error);
    return [];
  }

  const slugs = blogPosts || [];

  return slugs.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    return (
      <div className="pt-20">
        <div className="container-custom section-spacing text-center">
          <h2 className="text-3xl font-bold mb-4">Post not found</h2>
          <p className="text-zinc-600 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="text-sm font-medium text-zinc-500 mb-4">
            {post.category} • {post.date}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
              <Image
                src="/images/profile.png?height=40&width=40" // Ensure this path is correct for your profile image
                alt={post.author}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-zinc-600">By {post.author}</span>
          </div>
        </div>

        {/* Featured Image - MODIFIED HERE */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden group"> {/* Added 'group' class here */}
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              // Added transition and group-hover classes here
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
            />
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg prose-zinc max-w-none mb-8 dark:prose-invert" // Added dark mode support for prose
            dangerouslySetInnerHTML={{ __html: post.content || post.excerpt || "" }}
          />
          {/* Medium Redirect Button */}
          {post.medium_url && ( // Changed from post.mediumUrl to post.medium_url based on your schema
            <div className="flex gap-4 mb-8">
              <Button asChild size="lg" className="gap-2">
                <a
                  href={post.medium_url} // Changed from post.mediumUrl to post.medium_url
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read this article on Medium or Dev
                </a>
              </Button>
            </div>
          )}
        </div>

         {/* Author Bio - MODIFIED HERE */}
         <div className="max-w-3xl mx-auto mt-16 p-8 dark:bg-background rounded-lg"> {/* Changed dark:bg-zinc-800 to dark:bg-background */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-zinc-100 overflow-hidden flex-shrink-0">
              <Image
                src="/images/profile.png?height=80&width=80"
                alt={post.author}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
              <p className="text-zinc-800 dark:text-zinc-400">
                Full Stack Developer with a passion for technology, JavaScript, and sharing knowledge on web development and computer science.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {post.relatedposts && post.relatedposts.length > 0 && ( // Changed from post.relatedPosts to post.relatedposts based on your schema
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {post.relatedposts.map((relatedPost) => ( // Changed from post.relatedPosts to post.relatedposts
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow" // Using card and border from theme
                >
                  <div className="aspect-video bg-muted overflow-hidden"> {/* Using muted from theme */}
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors"> {/* Using primary from theme */}
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}


