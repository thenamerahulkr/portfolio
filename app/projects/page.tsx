// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// // Define your projects array here
// export const projects = [
//   {
//     id: 1,
//     title: "quicklist-io",
//     description:
//       "A minimalist and responsive task management application built with Next.js, React.js, and Tailwind CSS. The project features seamless task creation, editing, and deletion, along with advanced filtering by status and priority. It includes a robust search functionality and supports both dark and light modes for an enhanced user experience. The clean layout and intuitive design ensure efficient workflow management across devices.",
//     technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React.js"],
//     image: "/images/to-do.png?height=600&width=300",
//     slug: "quicklist-io",
//     type: "hosted",
//     featuredImage: "/images/to-do.png?height=800&width=1600",
//     gallery: [
//       "/images/to-do.png?height=600&width=800",
//       "/images/to-do.png?height=600&width=800",
//     ],
//     liveUrl: "https://quicklist-io.example.com",
//     githubUrl: "https://github.com/yourusername/quicklist-io",
//     client: "Personal Project",
//     year: "2025",
//     role: "Full Stack Developer",
//     challenge: "Building a fast, accessible, and visually minimal task app with advanced filtering and theming.",
//     solution: "Used Next.js App Router, Tailwind, and Framer Motion for a beautiful, fast, and accessible UI.",
//     nextProject: {
//       title: "Klimate-Dashboard",
//       slug: "Klimate-Dashboard",
//     },
//   },
//   {
//     id: 2,
//     title: "Currency Converter",
//     description:
//       "A real-time currency converter application built with React.js and Tailwind CSS. It allows users to convert between multiple currencies with live exchange rates, a clean UI, and instant feedback. The app is fully responsive and optimized for both desktop and mobile devices.",
//     technologies: ["React.js", "Tailwind CSS", "Exchange Rate API"],
//     image: "/images/currency.png", // Update this path to your actual image
//     slug: "currency-converter",
//     type: "hosted",
//     featuredImage: "/images/currency.png",
//     gallery: [
//       "/images/currency.png?height=600&width=800",
//       "/images/currency.png?height=600&width=800",
//     ],
//     liveUrl: "https://currencytools.netlify.app/",
//     githubUrl: "https://github.com/thenamerahulkr/currency-converter",
//     client: "Personal Project",
//     year: "2023",
//     role: "Frontend Developer",
//     challenge: "Implementing accurate, real-time currency conversion with a modern, user-friendly design.",
//     solution: "Utilized a public exchange rate API for live rates, designed a clean and intuitive UI with Tailwind CSS, and ensured the app is responsive and accessible.",
//     nextProject: {
//       title: "quicklist-io",
//       slug: "quicklist-io",
//     },
//   },
//   {
//     id: 3,
//     title: "Klimate-Dashboard",
//     description:
//       "A visually rich, real-time weather dashboard built with React.js and Tailwind CSS. Klimate provides current weather, detailed forecasts, and interactive charts for any location. Features include live temperature, humidity, wind speed, sunrise/sunset, and a 5-day forecast, all presented in a modern dark UI with responsive design.",
//     technologies: ["React.js", "Tailwind CSS", "Chart.js", "Weather API"],
//     image: "/images/klimate.png", // Use your actual image path
//     slug: "Klimate-Dashboard",
//     type: "hosted",
//     featuredImage: "/images/klimate.png?height=600&width=800", // Or use a larger version
//     gallery: [
//       "/images/klimate.png?height=600&width=800",
//       "/images/klimate.png?height=600&width=800",
//     ],
//     liveUrl: "https://klimatespace.vercel.app/", // Replace with your live URL
//     githubUrl: "https://github.com/thenamerahulkr/klimate", // Replace with your repo
//     client: "Personal Project",
//     year: "2025",
//     role: "Frontend Developer",
//     challenge: "Designing an intuitive, data-rich weather dashboard with real-time updates and a visually appealing interface.",
//     solution: "Integrated a public weather API for live data, used Chart.js for interactive graphs, and built a modern, responsive dark-mode UI with Tailwind CSS.",
//     nextProject: {
//       title: "Currency Converter",
//       slug: "currency-converter",
//     },
//   },
//   {
//     id: 4,
//     title: "Portfolio Website",
//     description:
//       "A modern, responsive developer portfolio built with Next.js, React.js, and Tailwind CSS. Showcases projects, blog articles, and contact information with a clean, accessible design. Features dynamic routing, SEO optimization, dark mode, and interactive UI elements for an engaging user experience.",
//     technologies: ["Next.js", "React.js", "Tailwind CSS", "Lucide Icons"],
//     image: "/images/portfolio.png", // Place your portfolio screenshot here
//     slug: "portfolio-website",
//     type: "hosted",
//     featuredImage: "/images/portfolio.png",
//     gallery: [
//       "/images/portfolio.png",
//       "/images/portfolio-about.png",
//       "/images/portfolio-project.png",
//     ],
//     liveUrl: "https://your-portfolio-domain.com", // Replace with your live portfolio URL
//     githubUrl: "https://github.com/thenamerahulkr/portfolio", // Replace with your repo URL
//     client: "Personal Project",
//     year: "2025",
//     role: "Full Stack Developer",
//     challenge: "Building a fast, accessible, and visually appealing portfolio that is easy to update and showcases all my work.",
//     solution: "Used Next.js App Router, Tailwind CSS, and custom components for a modular, maintainable, and beautiful portfolio site.",
//     nextProject: {
//       title: "Klimate-Dashboard",
//       slug: "Klimate-Dashboard",
//     },
//   }


// ];

// export default function ProjectsPage() {
//   return (
//     <div className="pt-20">
//       <section className="container-custom section-spacing">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h1 className="heading-xl mb-6">Projects</h1>
//           <p className="body-lg text-muted-foreground">
//             A showcase of my work, featuring web applications, design projects, and experiments.
//           </p>
//         </div>

//         <div className="mb-24">
//           <h2 className="heading-lg mb-10 relative">
//             Web Projects
//             <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
//           </h2>

//           <div className="grid gap-16 md:gap-24">
//             {projects.map((project, index) => (
//               <div key={project.id} className="group">
//                 <div
//                   className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
//                 >
//                   <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
//                     <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
//                       {(index + 1).toString().padStart(2, "0")}
//                     </span>
//                     <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
//                       {project.title}
//                     </h2>
//                     <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
//                     <div className="flex flex-wrap gap-2 mb-8">
//                       {project.technologies.map((tech) => (
//                         <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <Button
//                       asChild
//                       variant="outline"
//                       size="lg"
//                       className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
//                     >
//                       <Link href={`/projects/${project.slug}`}>View Project</Link>
//                     </Button>
//                   </div>
//                   <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
//                     <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
//                       <Image
//                         src={project.image || "/placeholder.svg"}
//                         alt={project.title}
//                         width={800}
//                         height={600}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
import { Project } from "./[slug]/page";

export const revalidate = 60;

export default async function ProjectsPage() { 
  const { data: projects, error } = await supabase
    .from('projects')
    .select('id, slug, title, description, technologies, image') // Select specific fields
    .order('id', { ascending: true }); // Order them by ID, or by 'created_at' if you prefer newest first

  if (error) {
    console.error('Error fetching projects for listing:', error);
    return (
      <div className="pt-20">
        <section className="container-custom section-spacing text-center">
          <h2 className="text-3xl font-bold mb-4">Error Loading Projects</h2>
          <p className="body-lg text-muted-foreground mb-8">
            There was an issue fetching the projects. Please try again later.
          </p>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </section>
      </div>
    );
  }

  // Type assertion for better type safety
  const typedProjects: Project[] = projects as Project[];

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="body-lg text-muted-foreground">
            A showcase of my work, featuring web applications, design projects, and experiments.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Web Projects
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-16 md:gap-24">
            {/* Conditional rendering if no projects are found */}
            {typedProjects.length === 0 ? (
              <div className="text-center text-muted-foreground text-xl">No projects found.</div>
            ) : (
              // Map through the fetched projects
              typedProjects.map((project, index) => (
                <div key={project.id} className="group">
                  <div
                    className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                      <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                        {/* Ensures the number is always two digits (e.g., 01, 02) */}
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                        {project.title}
                      </h2>
                      <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {/* Ensure 'technologies' is stored as a JSONB array in Supabase */}
                        {project.technologies?.map((tech) => (
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
                    <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                        <Image
                          src={project.image || "/placeholder.svg"} // Use 'image' field from Supabase
                          alt={project.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
