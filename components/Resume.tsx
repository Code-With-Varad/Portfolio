export default function Resume() {
  return (
    <section
      id="resume"
      className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-white">
        My Resume
      </h2>

      <p className="mt-4 max-w-xl text-center text-gray-400">
        Want to know more about my skills, experience, and projects?
        Check out my resume.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
      >
        View Resume →
      </a>
    </section>
  );
}