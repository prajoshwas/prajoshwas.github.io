export default function About() {
  return (
    <section id="about" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>ABOUT</SectionLabel>

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            I build backend systems with a focus on reliability and scalability.
          </h2>

          <div className="space-y-5 text-lg leading-8 text-zinc-400">
            <p>
              I'm a software engineer specializing in backend development,
              particularly Java, Spring Boot, REST APIs, and microservices.
            </p>

            <p>
              My experience includes building applications and services for
              financial systems, working with distributed services, databases,
              cloud technologies, and modern development practices.
            </p>

            <p>
              I enjoy understanding how systems work under the hood and
              designing solutions that remain maintainable as they grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 font-mono text-xs tracking-[0.25em] text-teal-400">
      {children}
    </p>
  );
}
