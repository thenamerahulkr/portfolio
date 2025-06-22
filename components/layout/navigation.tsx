// "use client"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X } from "lucide-react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import { ThemeToggle } from "@/components/theme/theme-toggle"
// export function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const pathname = usePathname()

//   const routes = [
//     { name: "Home", path: "/" },
//     { name: "Projects", path: "/projects" },
//     { name: "Blogs", path: "/blog" },
//     { name: "Contact", path: "/#contact" },
//     { name: "Education", path: "/#education" },
//   ]

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
//       <div className="container-custom flex items-center justify-between h-20">
//         <Link href="/" className="font-playfair text-2xl font-bold tracking-tight">
//           Rahul<span className="text-muted-foreground">Kumar</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {routes.map((route) => (
//             <Link
//               key={route.path}
//               href={route.path}
//               className={cn(
//                 "link-underline text-lg transition-colors",
//                 pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
//               )}
//             >
//               {route.name}
//             </Link>
//           ))}
//           <ThemeToggle />
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center gap-2 md:hidden">
//           <ThemeToggle />
//           <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden fixed inset-0 top-20 bg-background z-40 p-6">
//           <nav className="flex flex-col space-y-6 text-center">
//             {routes.map((route) => (
//               <Link
//                 key={route.path}
//                 href={route.path}
//                 className={cn(
//                   "text-2xl py-2 transition-colors",
//                   pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
//                 )}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {route.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }/

// "use client"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X } from "lucide-react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import { ThemeToggle } from "@/components/theme/theme-toggle"

// export function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const pathname = usePathname()

//   const routes = [
//     { name: "Home", path: "/" },
//     { name: "Projects", path: "/projects" },
//     { name: "Blogs", path: "/blog" },
//     { name: "Contact", path: "/#contact" },
//     { name: "Education", path: "/#education" },
//   ]

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
//         <div className="container-custom flex items-center justify-between h-20">
//           <Link href="/" className="font-playfair text-2xl font-bold tracking-tight">
//             Rahul<span className="text-muted-foreground">Kumar</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {routes.map((route) => (
//               <Link
//                 key={route.path}
//                 href={route.path}
//                 className={cn(
//                   "link-underline text-lg transition-colors",
//                   pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
//                 )}
//               >
//                 {route.name}
//               </Link>
//             ))}
//             <ThemeToggle />
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center gap-2 md:hidden">
//             <ThemeToggle />
//             <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Navigation - MODIFIED FOR OPACITY */}
//       {isMenuOpen && (
//         <div className="md:hidden fixed inset-0 z-40 bg-background p-6" style={{ paddingTop: '5rem' }}>
//           {/* Added bg-opacity-100 to ensure full opacity */}
//           <nav className="flex flex-col space-y-6 text-center">
//             {routes.map((route) => (
//               <Link
//                 key={route.path}
//                 href={route.path}
//                 className={cn(
//                   "text-2xl py-2 transition-colors",
//                   pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
//                 )}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {route.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </>
//   )
// }

// Navigation.tsx

"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/#contact" },
    { name: "Education", path: "/#education" },
  ]

  return (
    <>
      {/* Header - This has the backdrop-blur-sm for all views (including desktop) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container-custom flex items-center justify-between h-20">
          <Link href="/" className="font-playfair text-2xl font-bold tracking-tight">
            Rahul<span className="text-muted-foreground">Kumar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "link-underline text-lg transition-colors",
                  pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {route.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button (visible on mobile, triggers menu) */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Only rendered when isMenuOpen is true (mobile view).
          This is where the 'glass effect' is explicitly applied for the full-screen overlay. */}
      {isMenuOpen && (
        <div
          // Added bg-background/80 and backdrop-blur-md for the glass effect on the mobile menu
          className="md:hidden fixed inset-0 z-40 p-6 bg-background/80 backdrop-blur-md"
          style={{ paddingTop: '5rem' }} // Compensates for the fixed header's height (h-20 = 5rem)
        >
          <nav className="flex flex-col space-y-6 text-center">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-2xl py-2 transition-colors",
                  pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}