import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects on the way,
            <span className="font-serif italic font-normal text-white">
              {" "}actively working on it.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I'm building exciting projects in Data Science and Machine Learning. Stay tuned for updates!
          </p>
        </div>

        {/* Placeholder for future projects */}
        {/*
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group glass rounded-2xl overflow-hidden animate-fade-in">
            <div className="relative overflow-hidden aspect-video">
              <img
                src="/projects/project1.png"
                alt="Project Title"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Project Title</h3>
              <p className="text-muted-foreground text-sm">
                Short description of the project highlighting its purpose and tech used.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                  Tech Tag
                </span>
              </div>
            </div>
          </div>
        </div>
        */}

        {/* CTA for future projects */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton disabled>
            Stay Tuned
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
