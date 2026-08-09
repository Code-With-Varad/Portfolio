export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">

        <p>
          © 2026 Varad Gaikwad. All rights reserved.
        </p>

        <p>
          Built with Next.js • React • Tailwind CSS
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}