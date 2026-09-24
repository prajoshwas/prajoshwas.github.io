import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 font-mono text-xs tracking-[0.25em] text-teal-400">
          FEATURED PROJECTS
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex min-h-82.5 flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-white/[0.04]">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {project.type}
                </span>

                <FiArrowUpRight
                  size={19}
                  className="text-zinc-600 transition group-hover:text-teal-600 cursor-pointer hover:size-8"
                  onClick={() => window.open(project.link, "_blank")}
                />
              </div>

              <h3 className="mt-10 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-500">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-zinc-500">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
