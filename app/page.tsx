import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const projects = [
    {
      title: "Website for Nipon Tools",
      description:
        "Design and implementation of institutional landing page with links to PDF catalogs. Publication in hosting, responsive, optimized for SEO.",
      tech: ["HTML", "Javascript", "Firebase", "ReactJS"],
      image: "/placeholder.svg?height=300&width=500",
      link: "https://github.com",
      live: "https://nipontools.com.ar/",
    },
    {
      title: "YoSmokeo App",
      description: "Yo Smokeo is a web app for CS2 players to learn and practice smoke lineups. It features clear visuals, an intuitive UI, and map-based navigation to improve tactical gameplay.",
      tech: ["ReactJS", "Tailwind CSS", "Javascript", "Vercel"],
      image: "/placeholder.svg?height=300&width=500",
      link: "https://github.com/xgooddev/yosmokeo",
      live: "https://yosmokeo.pro",
    },
    {
      title: "Palaces Seeds interactive catalog",
      description: "Palace Seeds Catalog is a visual web app showcasing cannabis genetics through interactive animated cards. Built with React and Tailwind, it highlights UI design and front-end interaction.",
      tech: ["React", "Tailwind", "Javascript"],
      image: "/placeholder.svg?height=300&width=500",
      link: "https://github.com/xgooddev/palaces-catalog",
      live: "https://palaces-catalogo.vercel.app/",
    },
    {
      title: "CS2 Skin Market Tracker",
      description: "AI-powered content creation platform with custom templates and multi-language support.",
      tech: ["Next.js", "React JS", "Shadcn", "Framer Motion"],
      image: "/placeholder.svg?height=300&width=500",
      link: "https://github.com",
      live: "https://example.com",
    },
  ]

  const experience = [
    {
      company: "Freelance work.",
      role: "Freelance works and personal projects",
      period: "2024 - Present",
      description:
      "Developed various projects mobile and webincluding a habit tracking app, a task management dashboard, and an AI content generator. Focused on clean code, responsive design, and user experience.",},
    {
      company: "Marquez & Asociados",
      role: "IT Support",
      period: "2022 - 2023",
      description:
        "Provided IT support for a law firm, managing hardware and software issues. Improved system uptime by 30% through proactive maintenance.",
    },
    {
      company: "Freelance work.",
      role: "IT Support",
      period: "2021 - 2022",
      description:
        "Provided IT support for various clients, resolving hardware and software issues. Developed custom scripts to automate routine tasks, improving efficiency by 20%.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Gonzalo Espindola
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#projects" className="text-zinc-400 hover:text-green-400 transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-zinc-400 hover:text-green-400 transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-zinc-400 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Frontend & <span className="text-green-400">Mobile</span> Developer
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
              Hi, I'm Gonzalo Espindola. I build elegant & efficient digital experiences, from websites to mobile apps. 
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center text-zinc-400">
                <MapPin className="w-4 h-4 mr-2" />
                Cordoba, AR
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Available for work</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild className="bg-green-400 text-black hover:bg-green-300">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild className="border-zinc-700 text-white hover:bg-zinc-900 bg-transparent">
                <Link href="#projects">View work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-zinc-400 text-lg">
              A collection of projects that showcase my expertise in frontend and mobile development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-green-400/50 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link
                      href={project.link}
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                    <Link
                      href={project.live}
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-zinc-400 text-lg">My professional journey in software development.</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-green-400 pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-green-400 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-zinc-400 mb-3">{exp.company}</h4>
                  <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-zinc-400 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-green-400 text-black hover:bg-green-300">
                <Link href="goodtripdev@gmail.com" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  goodtripdev@gmail.com
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-900 bg-transparent"
              >
                <Link href="https://www.linkedin.com/in/gonzaloespindola/" className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-900 bg-transparent"
              >
                <Link href="https://github.com/xgooddev" className="flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-zinc-400 mb-4 md:mb-0">© 2025 Gonzalo Espindola. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <Link href="https://github.com/xgooddev" className="text-zinc-400 hover:text-green-400 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/gonzaloespindola/" className="text-zinc-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:goodtripdev@gmail.com" className="text-zinc-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
