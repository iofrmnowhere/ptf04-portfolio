import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/button";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-12">
      <div className="pt-4">
        <Link href="/#projects" className={buttonVariants({ variant: "outline", className: "border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all" })}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </div>

      <header className="space-y-6">
        <div className={`w-full h-48 border-4 border-black rounded-2xl ${project.color} flex items-center justify-center overflow-hidden relative`}>
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)" }}></div>
           <h1 className="text-5xl md:text-6xl font-extrabold text-foreground z-10 bg-background/80 px-6 py-2 border-4 border-black transform -rotate-2">{project.title}</h1>
        </div>
        <p className="text-xl font-medium text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 font-bold border-2 border-black rounded-lg bg-accent text-accent-foreground transform rotate-1">
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <section className="bg-card border-4 border-black p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-primary border-2 border-black rounded-full inline-block"></span>
              Project Overview
            </h2>
            <p className="text-lg leading-relaxed">{project.overview}</p>
          </section>

          <section className="bg-card border-4 border-black p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-secondary border-2 border-black rounded-sm inline-block"></span>
              Code Walkthrough
            </h2>
            <div className="bg-muted text-muted-foreground p-4 rounded-lg border-2 border-black overflow-x-auto font-mono text-sm">
              <pre><code>{project.codeSnippet}</code></pre>
            </div>
          </section>

          <section className="bg-card border-4 border-black p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-accent border-2 border-black rounded-full inline-block"></span>
              Challenges & Solutions
            </h2>
            <p className="text-lg leading-relaxed">{project.challenges}</p>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-card border-4 border-black p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 bg-black rounded-full shrink-0"></span>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-card border-4 border-black p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-bold mb-4">Learning Reflection</h2>
            <p className="text-base leading-relaxed italic border-l-4 border-primary pl-4">{project.reflection}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
