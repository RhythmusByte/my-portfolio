import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Data Analysis",
    description:
      "Transforming raw data into actionable insights using Python, SQL, and modern analytics tools.",
  },
  {
    icon: Rocket,
    title: "Machine Learning",
    description:
      "Building and optimizing predictive models to solve real-world problems efficiently.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with teams to integrate data-driven solutions into impactful projects.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring cutting-edge AI techniques and staying ahead with emerging technologies.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Transforming data into impact,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one insight at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Akhil Mahesh — a passionate data scientist and AI enthusiast
                dedicated to making sense of complex data and turning it into
                actionable solutions. I thrive on solving real-world problems
                with analytical rigor and creativity.
              </p>
              <p>
                My toolkit includes Python, machine learning frameworks,
                and visualization libraries. I focus on building scalable,
                efficient, and interpretable models that drive impact across
                businesses and projects.
              </p>
              <p>
                Beyond coding, I enjoy exploring new AI research, contributing
                to open-source projects, and sharing knowledge with the
                data science community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to leverage data and AI to create meaningful
                solutions — insights that empower decisions and drive
                innovation."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
