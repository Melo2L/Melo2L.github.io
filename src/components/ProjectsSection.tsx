interface ProjectsSectionProps {
  content: {
    recentProjects: string;
    projectsList: Array<{
      title: string;
      description: string;
      tech: string[];
      link?: string;
    }>;
  };
}

const ProjectsSection = ({ content }: ProjectsSectionProps) => {
  const projects = content.projectsList;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          {content.recentProjects}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const isClickable = Boolean(project.link);

            return (
              <div
                key={`${project.title}-${index}`}
                className={[
                  "bg-gray-800 rounded-xl p-6 transition-all duration-300 border border-gray-700",
                  "hover:bg-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-green-400/10",
                  isClickable ? "cursor-pointer" : "cursor-default",
                ].join(" ")}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => {
                  if (project.link) {
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  }
                }}
                role={isClickable ? "link" : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (isClickable && (e.key === "Enter" || e.key === " ")) {
                    window.open(project.link!, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-green-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900 text-green-400 rounded-full text-sm font-medium border border-green-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;