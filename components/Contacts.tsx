export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-white">
        Let's Connect
      </h2>

      <p className="mt-4 max-w-xl text-center text-gray-400">
        I'm open to software development opportunities, internships,
        and interesting projects.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        {/* Email */}
        <a
          href="mailto:varadgaikwad455@gmail.com"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
        >
          Email Me
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Code-With-Varad"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/varad-gaikwad-4641a8272"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}