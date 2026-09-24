import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs tracking-[0.25em] text-teal-400">
          LET'S CONNECT
        </p>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let's build something useful.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-500">
          I'm interested in remote software engineering opportunities, backend
          engineering, and interesting technical projects.
        </p>

        <div className="mt-9 flex justify-center gap-4">
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-3 text-sm font-semibold text-teal-950 transition hover:bg-teal-300">
            <FiMail size={17} />
            Email Me
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 transition hover:text-white">
            <FaGithub size={21} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 transition hover:text-white">
            <FaLinkedinIn size={21} />
          </a>
        </div>
      </div>
    </section>
  );
}
