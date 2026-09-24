import { FiArrowDown, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 py-32 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <p className="mb-5 font-mono text-sm tracking-wide text-teal-400">
            BACKEND SOFTWARE ENGINEER
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building systems that scale beyond the{" "}
            <span className="text-zinc-500">happy path.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Software engineer focused on backend development, microservices, and
            cloud-based applications using Java and Spring Boot.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-3 text-sm font-semibold text-teal-950 transition hover:bg-teal-300">
              View Projects
              <FiArrowDown size={16} />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/5">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition hover:-translate-y-0.5 hover:text-white">
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/joshua-mark-sugatan-652882156/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition hover:-translate-y-0.5 hover:text-white">
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:prajoshwas@gmail.com"
              aria-label="Email"
              className="text-zinc-500 transition hover:-translate-y-0.5 hover:text-white">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:items-center">
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-full bg-teal-400/10 blur-3xl" />

            {/* Profile image */}
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <img
                src={`${import.meta.env.BASE_URL}profpic.jpg`}
                alt="Joshua Mark Sugatan"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Available for remote opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
