import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 font-mono text-xs tracking-[0.25em] text-teal-400">
          WORK EXPERIENCE
        </p>

        <div className="space-y-12">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="grid gap-6 lg:grid-cols-[220px_1fr]">
              <div>
                <p className="font-mono text-sm text-zinc-500">{job.period}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {job.role}
                </h3>

                <p className="mt-1 text-teal-400">{job.company}</p>

                <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                  {job.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm text-zinc-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
