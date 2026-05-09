import { buttonVariants } from "@/components/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col gap-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-12">
        <div className="inline-block px-4 py-1.5 rounded-full border-2 border-black bg-accent text-accent-foreground font-semibold text-sm mb-4 transform -rotate-1">
          Welcome to my Digital PTF04 Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-primary inline-block transform hover:scale-105 transition-transform cursor-default">Gio Ferreras</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          These are the projects and notebooks made over the course of the <span className="font-bold text-foreground">PTF04 Course</span>, focused on AI and Machine Learning.
        </p>
        <div className="flex gap-4 pt-4">
          <Link href="#projects" className={buttonVariants({ size: "lg", className: "border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all" })}>
            View Projects
          </Link>
          <Link href="https://github.com/iofrmnowhere/" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center gap-2" })}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            Find me on Github
          </Link>
        </div>
      </section>

      {/* Navigation Grid for Projects */}
      <section id="projects" className="space-y-8 pt-8 border-t-4 border-black border-dashed">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold tracking-tight bg-secondary inline-block px-4 py-2 border-2 border-black transform rotate-1">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.slug} className="flex flex-col border-4 border-black rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-card">
              <div className={`h-32 w-full border-b-4 border-black ${project.color} flex items-center justify-center`}>
                {/* Decorative Pattern */}
                <div className="w-full h-full opacity-20" style={{ backgroundImage: "radial-gradient(circle, #000 2px, transparent 2.5px)", backgroundSize: "20px 20px" }}></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-base font-medium">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-semibold border-2 border-black rounded-md bg-muted text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/projects/${project.slug}`} className={buttonVariants({ className: "w-full border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all group" })}>
                  Explore Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
