"use client"

import { useState, useEffect } from "react"
import { Button } from "../app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../app/components/ui/card"
import { Input } from "../app/components/ui/input"
import { Textarea } from "../app/components/ui/textarea"
import { Badge } from "../app/components/ui/badge"
import {
  Github,
  Linkedin,
  Code2,
  Trophy,
  Mail,
  ExternalLink,
  Menu,
  X,
  Moon,
  Sun,
  Download,
  FileText,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark)
    setIsDarkMode(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "academic", "skills", "projects", "achievements", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }


  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "academic", label: "Academic" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST APIs"] },
    { category: "Tools", items: ["Git", "VS Code", "Docker", "Figma", "Postman"] },
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"] },
  ]

  const academics = {
    education: [
      {
        degree: "Bachelor of Technology in Electronics and Communication Engineering",
        institution: "Indian Institute of Information Technology, Kota",
        duration: "2023-2027",
        gpa: "8.1/10",
        description: "Focus on Algorithms, Data Structures, and Web Development",
      },
      {
        degree: "High School - Science Stream",
        institution: "Kanha Makhan Public School",
        duration: "2021-2023",
        gpa: "95%",
        description: "Physics, Chemistry, Mathematics, Computer Science",
      },
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
      "System Design",
      "Computer Architecture and Organisation"
    ],
    research: [
      {
        title: "Research Intern",
        role: "Research on Diffusion characteristics in bounded domains",
        duration: "May 2025 - July 2025",
        description:
          "Designed and implemented Python-based simulations for random walks in 1D, 2D, and 3D bounded domains",
      },
    ],
  }

  const projects = [
    {
      title: "8085 Microprocessor Simulator",
      description: "Developed a Java-based 8085 simulator executing 20+ ISA instructions with modular and scalable design.",
      tech: ["Java", "OOPs"],
      github: "https://github.com/Bhoomika-1312/8085_Simulator",
    },

    {
      title: "Blogging application",
      description: " Built a full-stack blogging platform with JWT authentication, secure password hashing, and role-based access for authors/admins.",
      tech: ["MongoDB", "Express.js", "Node.js", "EJS", "REST APIs", "Jwt"],
      github: "https://github.com/Bhoomika-1312/Blogs",
    },
    {
      title: "Employee management system",
      description:
        "Built a dual-role Admin + Employee system with context-based authentication and dynamic dashboards.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/Bhoomika-1312/EMsystem",
      demo: "https://e-msystem-jlnz.vercel.app/",
    },
    {
      title: "Artice club's Website",
      description:
        "A web-based platform that enables an art club to showcase artworks and manage events, trips, and creative activities.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/Bhoomika-1312/artive_final",
      demo: "https://artive-final.vercel.app/",
    },
    {
      title: "Password Generator",
      description: "A React-based tool for creating strong and reliable passwords.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/Bhoomika-1312/Password",
      demo: "https://joyful-granita-273ff3.netlify.app/",
    },
    {
      title: "Random Jokes Generator",
      description: "A simple way to add moments of humor.",
      tech: ["Html", "Vanilla css", "Java Script"],
      github: "https://github.com/Bhoomika-1312/Random-Jokes.git",
      demo: "https://random-jokes-n6qh-es3uoptfn-bhoomika-1312s-projects.vercel.app/",
    },
  ]

  const achievements = [
    {
      title: "Competitive Programming",
      items: ["LeetCode: 650+ problems solved", "Codeforces: pupil (1200+ rating)", "CodeChef: 3-star coder(1600+)"],
    },
    {
      title: "Hackathons",
      items: ["Winner - HackTheNorth 2024", "Runner-up - MLH Local Hack Day", "Top 10 - Smart India Hackathon"],
    },
    {
      title: "Certifications",
      items: [
        "AWS Certified Developer Associate",
        "Meta Front-End Developer Professional",
        "Google Cloud Digital Leader",
      ],
    },
    {
      title: "Recognition & Awards",
      items: ["Best Final Year Project Award", "Technical Excellence Award", "Open Source Contributor of the Year"],
    },
  ]


  const roles = ["Web Developer", "Coder", "Tech Enthusiast", "Problem Solver"]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${activeSection === item.id ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  )}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-primary"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-primary"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-muted rounded-md ${activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
      >
        {/* Hero Background */}
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-background/80 dark:bg-background/60 z-10" />
          <img
            src="/images/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20" />
        </div>

        {/* Abstract shapes for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Hi, I'm <span className="gradient-text">Bhoomika Bhatia</span>
              </h1>
              <div className="text-2xl sm:text-3xl font-semibold h-12 animate-fade-in">
                <span className="text-primary animate-pulse">{roles[currentRole]}</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Passionate about building elegant solutions to complex problems. I turn ideas into reality through clean
                code and innovative design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-linear-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/60 hover:scale-105"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-full blur-3xl opacity-50 animate-glow"></div>
                <img
                  src="/professional-developer-portrait.png"
                  alt="Profile"
                  className="relative rounded-full w-80 h-80 object-cover border-4 border-primary shadow-2xl shadow-primary/50 ring-4 ring-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-100 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm bg-card/50">
              <CardContent className="p-8 space-y-4 text-lg leading-relaxed">
                <p className="text-foreground/90">
                  I'm a passionate web developer with a strong foundation in both frontend and backend technologies. My
                  journey in tech began with a curiosity to understand how things work, which quickly evolved into a
                  love for creating intuitive and efficient web applications.
                </p>
                <p className="text-foreground/90">
                  I thrive on solving complex problems and learning new technologies. Whether it's optimizing algorithms
                  for competitive programming or building full-stack applications, I approach every challenge with
                  enthusiasm and dedication.
                </p>
                <p className="text-foreground/90">
                  When I'm not coding, you'll find me exploring new frameworks, contributing to open source projects, or
                  participating in hackathons to push the boundaries of what I can create.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="academic" className="bg-orange-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Academic <span className="gradient-text">Background</span>
          </h2>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              Education
            </h3>
            <div className="space-y-6">
              {academics.education.map((edu, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 border-l-4 border-l-primary"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <Badge
                        variant="secondary"
                        className="w-fit bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/30"
                      >
                        {edu.duration}
                      </Badge>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm font-semibold text-success">GPA: {edu.gpa}</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-accent to-primary rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              Relevant Coursework
            </h3>
            <Card className="border-accent/20 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {academics.coursework.map((course, index) => (
                    <Badge
                      key={course}
                      variant="outline"
                      className="text-sm py-1.5 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:border-primary transition-all duration-300 hover:scale-105"
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-chart-4 to-chart-2 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              Research Experience
            </h3>
            <div className="space-y-6">
              {academics.research.map((research, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:shadow-chart-4/10 transition-all duration-500 hover:-translate-y-1 border-l-4 border-l-chart-4"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl">{research.title}</CardTitle>
                      <Badge
                        variant="secondary"
                        className="w-fit bg-gradient-to-r from-chart-4/10 to-chart-2/10 text-chart-4 border-chart-4/30"
                      >
                        {research.duration}
                      </Badge>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {research.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-foreground/80">{research.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={skillGroup.category}
                className="glass-effect border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2 group-hover:text-primary transition-colors">
                    <div
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="glass-effect border-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background">
        <div className="absolute inset-0 bg-pattern opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-effect overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group border-primary/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img
                    src="/images/project-placeholder.png"
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <CardHeader className="relative z-20 -mt-12">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-background/50 backdrop-blur-xs border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="bg-background/50 border-primary/20">+{project.tech.length - 4}</Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:text-primary hover:bg-primary/10"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-warning/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Achievements & <span className="gradient-text">Milestones</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="hover:shadow-2xl hover:shadow-warning/10 transition-all duration-500 hover:-translate-y-1 border-l-4"
                style={{
                  borderLeftColor: index % 2 === 0 ? "var(--warning)" : "var(--success)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        background:
                          index % 2 === 0
                            ? "linear-gradient(135deg, var(--warning), var(--primary))"
                            : "linear-gradient(135deg, var(--success), var(--accent))",
                      }}
                    >
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm leading-relaxed hover:text-primary transition-colors duration-200"
                      >
                        <span
                          className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: index % 2 === 0 ? "var(--warning)" : "var(--success)",
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Social Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Connect With Me</h2>
          <div className="grid gap-6">
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">GitHub</h3>
                  <p className="text-muted-foreground">Check out my open source contributions and projects</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">LinkedIn</h3>
                  <p className="text-muted-foreground">Connect with me for professional opportunities</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">LeetCode</h3>
                  <p className="text-muted-foreground">Solve coding challenges and improve your skills</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Codeforces</h3>
                  <p className="text-muted-foreground">
                    Compete in coding contests and enhance your problem-solving skills
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>

          <Card className=" border-none shadow-xl bg-linear-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="p-12">
              <div className="flex flex-col items-center gap-6">
                <div className="p-6 rounded-full bg-accent/10">
                  <FileText className="h-16 w-16 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Professional Resume</h3>
                  <p className="text-muted-foreground">
                    Comprehensive overview of my technical skills, projects, and achievements
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <a href="/resume.pdf" download className="flex items-center gap-2">
                      <Download className="h-5 w-5" />
                      Download Resume (PDF)
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5" />
                      View Resume
                    </a>
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-border w-full">
                  <p className="text-sm text-muted-foreground mb-4">Also available on:</p>
                  <div className="flex justify-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-100 relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border text-center space-y-2">
                <p className="text-sm text-muted-foreground">Or reach me directly at:</p>
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center justify-center gap-2 text-accent-foreground hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  your.email@example.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Your Name. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
