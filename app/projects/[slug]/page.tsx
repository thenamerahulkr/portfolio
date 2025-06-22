// // import Link from "next/link";
// // import Image from "next/image";
// // import { ArrowLeft, ExternalLink, Github } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// // // Paste the SAME projects array here
// // const projects = [
// //   {
    
// //     id: 1,
// //     title: "quicklist-io",
// //     description:
// //       "A minimalist and responsive task management application built with Next.js, React.js, and Tailwind CSS. The project features seamless task creation, editing, and deletion, along with advanced filtering by status and priority. It includes a robust search functionality and supports both dark and light modes for an enhanced user experience. The clean layout and intuitive design ensure efficient workflow management across devices.",
// //     technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React.js"],
// //     image: "/images/to-do.png?height=600&width=300",
// //     slug: "quicklist-io",
// //     type: "hosted",
// //     featuredImage: "/images/to-do.png?height=800&width=1600",
// //     gallery: [
// //       "/images/to-do.png?height=600&width=800",
// //       "/images/to-do.png?height=600&width=800",
// //     ],
// //     liveUrl: "https://quicklist-io.netlify.app/",
// //     githubUrl: "https://github.com/thenamerahulkr/to-do",
// //     client: "Personal Project",
// //     year: "2025",
// //     role: "Full Stack Developer",
// //     challenge: "Building a fast, accessible, and visually minimal task app with advanced filtering and theming.",
// //     solution: "Used Next.js App Router, Tailwind, and Framer Motion for a beautiful, fast, and accessible UI.",
// //     nextProject: {
// //       title: "Klimate-Dashboard",
// //       slug: "Klimate-Dashboard",
// //     },
// //   },
// //   {
// //     id: 2,
// //     title: "Currency Converter",
// //     description:
// //       "A real-time currency converter application built with React.js and Tailwind CSS. It allows users to convert between multiple currencies with live exchange rates, a clean UI, and instant feedback. The app is fully responsive and optimized for both desktop and mobile devices.",
// //     technologies: ["React.js", "Tailwind CSS", "Exchange Rate API"],
// //     image: "/images/currency.png", // Update this path to your actual image
// //     slug: "currency-converter",
// //     type: "hosted",
// //     featuredImage: "/images/currency.png",
// //     gallery: [
// //       "/images/currency.png?height=600&width=800",
// //       "/images/currency.png?height=600&width=800",
// //     ],
// //     liveUrl: "https://currencytools.netlify.app/",
// //     githubUrl: "https://github.com/thenamerahulkr/currency-converter",
// //     client: "Personal Project",
// //     year: "2023",
// //     role: "Frontend Developer",
// //     challenge: "Implementing accurate, real-time currency conversion with a modern, user-friendly design.",
// //     solution: "Utilized a public exchange rate API for live rates, designed a clean and intuitive UI with Tailwind CSS, and ensured the app is responsive and accessible.",
// //     nextProject: {
// //       title: "quicklist-io",
// //       slug: "quicklist-io",
// //     },
// //   },
// //   {
// //     id: 3,
// //     title: "Klimate-Dashboard",
// //     description:
// //       "A visually rich, real-time weather dashboard built with React.js and Tailwind CSS. Klimate provides current weather, detailed forecasts, and interactive charts for any location. Features include live temperature, humidity, wind speed, sunrise/sunset, and a 5-day forecast, all presented in a modern dark UI with responsive design.",
// //     technologies: ["React.js", "Tailwind CSS", "Chart.js", "Weather API"],
// //     image: "/images/klimate.png", // Use your actual image path
// //     slug: "Klimate-Dashboard",
// //     type: "hosted",
// //     featuredImage: "/images/klimate.png?height=600&width=800", // Or use a larger version
// //     gallery: [
// //       "/images/klimate.png?height=600&width=800",
// //       "/images/klimate.png?height=600&width=800"
// //     ],
// //     liveUrl: "https://klimatespace.vercel.app/", // Replace with your live URL
// //     githubUrl: "https://github.com/thenamerahulkr/klimate", // Replace with your repo
// //     client: "Personal Project",
// //     year: "2025",
// //     role: "Frontend Developer",
// //     challenge: "Designing an intuitive, data-rich weather dashboard with real-time updates and a visually appealing interface.",
// //     solution: "Integrated a public weather API for live data, used Chart.js for interactive graphs, and built a modern, responsive dark-mode UI with Tailwind CSS.",
// //     nextProject: {
// //       title: "Currency Converter",
// //       slug: "currency-converter",
// //     },
// //   },
// //   {
// //     id: 4,
// //     title: "Portfolio Website",
// //     description:
// //       "A modern, responsive developer portfolio built with Next.js, React.js, and Tailwind CSS. Showcases projects, blog articles, and contact information with a clean, accessible design. Features dynamic routing, SEO optimization, dark mode, and interactive UI elements for an engaging user experience.",
// //     technologies: ["Next.js", "React.js", "Tailwind CSS", "Lucide Icons"],
// //     image: "/images/portfolio.png", // Place your portfolio screenshot here
// //     slug: "portfolio-website",
// //     type: "hosted",
// //     featuredImage: "/images/portfolio.png",
// //     gallery: [
// //       "/images/portfolio.png",
// //       "/images/portfolio-about.png",
// //       "/images/portfolio-project.png",
// //     ],
// //     liveUrl: "https://your-portfolio-domain.com", // Replace with your live portfolio URL
// //     githubUrl: "https://github.com/thenamerahulkr/portfolio", // Replace with your repo URL
// //     client: "Personal Project",
// //     year: "2025",
// //     role: "Full Stack Developer",
// //     challenge: "Building a fast, accessible, and visually appealing portfolio that is easy to update and showcases all my work.",
// //     solution: "Used Next.js App Router, Tailwind CSS, and custom components for a modular, maintainable, and beautiful portfolio site.",
// //     nextProject: {
// //       title: "Klimate-Dashboard",
// //       slug: "Klimate-Dashboard",
// //     },
// //   }
// // ];

// // // For static generation (optional, if using App Router)
// // export function generateStaticParams() {
// //   return projects.map((project) => ({
// //     slug: project.slug,
// //   }));
// // }

// // export default function ProjectPage({ params }: { params: { slug: string } }) {
// //   const project = projects.find((p) => p.slug === params.slug);

// //   if (!project) {
// //     return (
// //       <div className="pt-20 text-center">
// //         <h2 className="text-3xl font-bold mb-4">Project not found</h2>
// //         <Link href="/projects" className="text-blue-600 underline">
// //           Back to Projects
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="pt-20">
// //       <article className="container-custom section-spacing">
// //         {/* Back Button */}
// //         <div className="mb-10">
// //           <Button asChild variant="ghost" className="group">
// //             <Link href="/projects" className="flex items-center gap-2">
// //               <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
// //               <span>Back to Projects</span>
// //             </Link>
// //           </Button>
// //         </div>

// //         {/* Project Header */}
// //         <div className="max-w-3xl mx-auto mb-12">
// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>
// //           <p className="text-xl text-zinc-600 mb-8">{project.description}</p>
// //           <div className="flex flex-wrap gap-6">
// //             {project.liveUrl && (
// //               <Button asChild size="lg" className="gap-2">
// //                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                   <span>View Live Site</span>
// //                   <ExternalLink className="h-4 w-4" />
// //                 </a>
// //               </Button>
// //             )}
// //             {project.githubUrl && (
// //               <Button asChild variant="outline" size="lg" className="gap-2">
// //                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                   <Github className="h-4 w-4" />
// //                   <span>View Code</span>
// //                 </a>
// //               </Button>
// //             )}
// //           </div>
// //         </div>

// //         {/* Featured Image */}
// //         <div className="mb-16">
// //           <div className="aspect-video bg-zinc-100 rounded-lg overflow-hidden">
// //             <Image
// //               src={project.featuredImage || "/placeholder.svg"}
// //               alt={project.title}
// //               width={1600}
// //               height={800}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //         </div>

// //         {/* Project Details */}
// //         <div className="grid md:grid-cols-3 gap-12 mb-16">
// //           <div>
// //             <h2 className="text-2xl font-bold mb-6">Project Details</h2>
// //             <div className="space-y-4">
// //               <div>
// //                 <h3 className="text-sm text-zinc-500 uppercase">Client</h3>
// //                 <p className="text-lg">{project.client}</p>
// //               </div>
// //               <div>
// //                 <h3 className="text-sm text-zinc-500 uppercase">Year</h3>
// //                 <p className="text-lg">{project.year}</p>
// //               </div>
// //               <div>
// //                 <h3 className="text-sm text-zinc-500 uppercase">Role</h3>
// //                 <p className="text-lg">{project.role}</p>
// //               </div>
// //               <div>
// //                 <h3 className="text-sm text-zinc-500 uppercase">Technologies</h3>
// //                 <div className="flex flex-wrap gap-2 mt-2">
// //                   {project.technologies.map((tech) => (
// //                     <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm">
// //                       {tech}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="md:col-span-2">
// //             <div className="space-y-8">
// //               <div>
// //                 <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
// //                 <p className="text-lg text-zinc-600">{project.challenge}</p>
// //               </div>
// //               <div>
// //                 <h2 className="text-2xl font-bold mb-4">The Solution</h2>
// //                 <p className="text-lg text-zinc-600">{project.solution}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Project Gallery */}
// //         <div className="mb-16">
// //           <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
// //           <div className="grid md:grid-cols-2 gap-6">
// //             {project.gallery?.map((image, index) => (
// //               <div key={index} className="aspect-video bg-zinc-100 rounded-lg overflow-hidden">
// //                 <Image
// //                   src={image || "/placeholder.svg"}
// //                   alt={`${project.title} - Image ${index + 1}`}
// //                   width={800}
// //                   height={600}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Next Project */}
// //         {project.nextProject && (
// //           <div className="border-t border-zinc-200 pt-16">
// //             <div className="text-center">
// //               <p className="text-zinc-500 mb-4">Next Project</p>
// //               <h2 className="text-3xl font-bold mb-8">{project.nextProject.title}</h2>
// //               <Button asChild size="lg">
// //                 <Link href={`/projects/${project.nextProject.slug}`}>View Project</Link>
// //               </Button>
// //             </div>
// //           </div>
// //         )}
// //       </article>
// //     </div>
// //   );
// // }

// // app/projects/[slug]/page.tsx
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowLeft, ExternalLink, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { supabase } from '@/lib/supabase.';

// export interface Project {
//   id: number;
//   slug: string;
//   title: string;
//   description: string; // This is for the short description/excerpt
//   // For the full content of the project page (challenge, solution, etc.),
//   // it's best to have separate fields or even a single rich text/markdown field.
//   // Based on your original code, let's map these:
//   technologies: string[]; // This should be stored as JSONB in Supabase
//   image: string; // Main image for the project listing
//   featured_image: string; // Renamed from 'featuredImage' to match common DB naming
//   gallery: string[]; // This should be stored as JSONB in Supabase
//   live_url: string | null; // Renamed from 'liveUrl'
//   github_url: string | null; // Renamed from 'githubUrl'
//   client: string;
//   year: string;
//   role: string;
//   challenge: string; // Full text for the challenge section
//   solution: string; // Full text for the solution section
//   next_project_slug: string | null; // Storing only slug in DB for next project
//   next_project_title: string | null; // Storing only title in DB for next project
//   created_at: string; // Supabase auto-generated timestamp
// }

// // Optional: Set revalidation time for Incremental Static Regeneration (ISR)
// // This makes project pages statically generated but revalidated in the background.
// export const revalidate = 60; // Revalidate data every 60 seconds

// // `generateStaticParams` to pre-render pages at build time for SSG
// export async function generateStaticParams() {
//   const { data: projectSlugs, error } = await supabase
//     .from('projects')
//     .select('slug'); // Only fetch slugs

//   if (error) {
//     console.error('Error fetching slugs for static params:', error);
//     return []; // Return empty array to avoid build failures
//   }

//   // Map slugs to the format Next.js expects for static paths
//   return projectSlugs.map(({ slug }) => ({
//     slug: slug,
//   }));
// }

// export default async function ProjectPage({ params }: { params: { slug: string } }) {
//   // const { slug } = params;
//   const { slug } = await params;
//   // const slug = params.slug;
//   // Fetch the single project data from Supabase based on the slug
//   const { data: projectData, error } = await supabase
//     .from('projects')
//     .select('*') // Select all columns for the single project page
//     .eq('slug', slug) // Filter by the slug parameter
//     .single(); // Expect only one row

//   if (error || !projectData) {
//     console.error(`Error fetching project with slug "${slug}":`, error);
//     return (
//       <div className="pt-20 text-center container-custom section-spacing">
//         <h2 className="text-3xl font-bold mb-4">Project not found</h2>
//         <p className="text-zinc-600 mb-8">The project you are looking for does not exist or has been removed.</p>
//         <Link href="/projects">
//           <Button >Back to Projects</Button>
//         </Link>
//       </div>
//     );
//   }

//   // Type assertion for better type safety
//   const project: Project = projectData as Project;

//   // Manually construct nextProject object if slug/title are available from DB
//   const nextProject = project.next_project_slug && project.next_project_title
//     ? { title: project.next_project_title, slug: project.next_project_slug }
//     : null;

//   return (
//     <div className="pt-20">
//       <article className="container-custom section-spacing">
//         {/* Back Button */}
//         <div className="mb-10">
//           <Button asChild variant="ghost" className="group">
//             <Link href="/projects" className="flex items-center gap-2">
//               <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
//               <span>Back to Projects</span>
//             </Link>
//           </Button>
//         </div>

//         {/* Project Header */}
//         <div className="max-w-3xl mx-auto mb-12">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>
//           <p className="text-xl text-zinc-600 mb-8">{project.description}</p>
//           <div className="flex flex-wrap gap-6">
//             {project.live_url && (
//               <Button asChild size="lg" className="gap-2">
//                 <a href={project.live_url} target="_blank" rel="noopener noreferrer">
//                   <span>View Live Site</span>
//                   <ExternalLink className="h-4 w-4" />
//                 </a>
//               </Button>
//             )}
//             {project.github_url && (
//               <Button asChild variant="outline" size="lg" className="gap-2">
//                 <a href={project.github_url} target="_blank" rel="noopener noreferrer">
//                   <Github className="h-4 w-4" />
//                   <span>View Code</span>
//                 </a>
//               </Button>
//             )}
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="mb-16">
//           <div className="aspect-video bg-zinc-100 rounded-lg overflow-hidden">
//             <Image
//               src={project.featured_image || "/placeholder.svg"} // Use featured_image from DB
//               alt={project.title}
//               width={1600}
//               height={800}
//               className="w-full h-full object-cover"
//               priority // Add priority for LCP image
//             />
//           </div>
//         </div>

//         {/* Project Details */}
//         <div className="grid md:grid-cols-3 gap-12 mb-16">
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Project Details</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="text-sm text-zinc-500 uppercase">Client</h3>
//                 <p className="text-lg">{project.client}</p>
//               </div>
//               <div>
//                 <h3 className="text-sm text-zinc-500 uppercase">Year</h3>
//                 <p className="text-lg">{project.year}</p>
//               </div>
//               <div>
//                 <h3 className="text-sm text-zinc-500 uppercase">Role</h3>
//                 <p className="text-lg">{project.role}</p>
//               </div>
//               <div>
//                 <h3 className="text-sm text-zinc-500 uppercase">Technologies</h3>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {/* Ensure technologies is an array from Supabase (JSONB type) */}
//                   {project.technologies?.map((tech) => (
//                     <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
//                 <p className="text-lg text-zinc-600">{project.challenge}</p>
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">The Solution</h2>
//                 <p className="text-lg text-zinc-600">{project.solution}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Project Gallery */}
//         <div className="mb-16">
//           <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Ensure gallery is an array of strings from Supabase (JSONB type) */}
//             {project.gallery?.map((image, index) => (
//               <div key={index} className="aspect-video bg-zinc-100 rounded-lg overflow-hidden">
//                 <Image
//                   src={image || "/placeholder.svg"}
//                   alt={`${project.title} - Image ${index + 1}`}
//                   width={800}
//                   height={600}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Next Project */}
//         {nextProject && ( // Use the dynamically created nextProject object
//           <div className="border-t border-zinc-200 pt-16">
//             <div className="text-center">
//               <p className="text-zinc-500 mb-4">Next Project</p>
//               <h2 className="text-3xl font-bold mb-8">{nextProject.title}</h2>
//               <Button asChild size="lg">
//                 <Link href={`/projects/${nextProject.slug}`}>View Project</Link>
//               </Button>
//             </div>
//           </div>
//         )}
//       </article>
//     </div>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from '@/lib/supabase.';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  featured_image: string;
  gallery: string[];
  live_url: string | null;
  github_url: string | null;
  client: string;
  year: string;
  role: string;
  challenge: string;
  solution: string;
  next_project_slug: string | null;
  next_project_title: string | null;
  created_at: string;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const { data: projectSlugs, error } = await supabase
    .from('projects')
    .select('slug');

  if (error) {
    console.error('Error fetching slugs for static params:', error);
    return [];
  }

  return projectSlugs.map(({ slug }) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data: projectData, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !projectData) {
    console.error(`Error fetching project with slug "${slug}":`, error);
    return (
      <div className="pt-20 text-center container-custom section-spacing">
        <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        <p className="text-muted-foreground mb-8">The project you are looking for does not exist or has been removed.</p>
        <Link href="/projects">
          <Button >Back to Projects</Button>
        </Link>
      </div>
    );
  }

  const project: Project = projectData as Project;

  const nextProject = project.next_project_slug && project.next_project_title
    ? { title: project.next_project_title, slug: project.next_project_slug }
    : null;


  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button - Already has a nice hover effect */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-6">
            {project.live_url && (
              <Button asChild size="lg" className="gap-2">
                <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                  <span>View Live Site</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.github_url && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Featured Image - Adjusted for smaller size AND with hover effect */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div
            className="group aspect-video bg-muted rounded-lg overflow-hidden
                       transition-transform duration-300 ease-in-out
                       hover:scale-[0.98] hover:shadow-lg" // Added hover effects here
          >
            <Image
              src={project.featured_image || "/placeholder.svg"}
              alt={project.title}
              width={1600}
              height={800}
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" // Image also scales slightly
              priority
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Project Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Client</h3>
                <p className="text-lg text-foreground">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Year</h3>
                <p className="text-lg text-foreground">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Role</h3>
                <p className="text-lg text-foreground">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Technologies</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h2>
                <p className="text-lg text-muted-foreground">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">The Solution</h2>
                <p className="text-lg text-muted-foreground">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery?.map((image, index) => (
              <div
                key={index}
                className="group aspect-video bg-muted rounded-lg overflow-hidden
                           transition-transform duration-300 ease-in-out
                           hover:scale-[0.98] hover:shadow-lg" // Hover effects are kept here
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" // Image also scales slightly
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project */}
        {nextProject && (
          <div className="border-t border-border pt-16">
            <div
              className="text-center p-6 rounded-lg" // Hover effects removed from here
            >
              <p className="text-muted-foreground mb-4">Next Project</p>
              <h2 className="text-3xl font-bold mb-8 text-foreground">{nextProject.title}</h2>
              <Button asChild size="lg">
                <Link href={`/projects/${nextProject.slug}`}>View Project</Link>
              </Button>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}