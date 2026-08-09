export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-24">

      <h2 className="text-center text-4xl font-bold text-white">
        My Skills
      </h2>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
          <h3 className="text-xl font-bold text-cyan-300">
            Languages
          </h3>

          <p className="mt-3 text-gray-300">
            Java • JavaScript • C++ • SQL
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
          <h3 className="text-xl font-bold text-cyan-300">
            Backend
          </h3>

          <p className="mt-3 text-gray-300">
            Spring Boot • Node.js • REST API
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
          <h3 className="text-xl font-bold text-cyan-300">
            Frontend
          </h3>

          <p className="mt-3 text-gray-300">
            React • Next.js • Tailwind CSS
          </p>
        </div>

       <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
          <h3 className="text-xl font-bold text-cyan-300">
            Database
          </h3>

          <p className="mt-3 text-gray-300">
            MySQL • MongoDB
          </p>
        </div>

      </div>
    </section>
  );
}