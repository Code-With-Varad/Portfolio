import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      <h2 className="text-center text-4xl font-bold text-white">
        My Projects
      </h2>

      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">

        <ProjectCard
          title="Mini LeetCode"
          description="A coding practice platform with authentication and problem solving."
          technologies={["Next.js", "MongoDB"]}
        />

        <ProjectCard
          title="ATM System"
          description="A Java and MySQL based banking application using JDBC."
          technologies={["Java", "MySQL", "JDBC"]}
        />

        <ProjectCard
          title="Women Safety System"
          description="A Python and Machine Learning based system for intelligent detection."
          technologies={["Python", "Machine Learning"]}
        />

      </div>
    </section>
  );
}