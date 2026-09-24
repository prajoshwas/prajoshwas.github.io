import { technologies } from "../data";

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 font-mono text-xs tracking-[0.25em] text-teal-400">
          TECHNOLOGY
        </p>

        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-300 transition hover:border-teal-400/30 hover:text-white">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
