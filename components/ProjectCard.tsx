type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]">
      
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-6 text-gray-400">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href="#"
        className="mt-6 inline-block font-semibold text-white hover:text-cyan-300"
      >
        View Project →
      </a>
    </div>
  );
}