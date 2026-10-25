import {
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";

import profileImage from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute right-[-120px] top-24 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        {/* Left */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for opportunities
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            Software Engineer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.045em] text-heading sm:text-6xl lg:text-7xl">
            Building reliable
            <span className="text-primary"> full-stack </span>
            applications.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            I'm Abdul Rafay Siddiqui, a backend-focused full-stack developer
            building secure web applications with Node.js, Express, MongoDB,
            React, automated testing, and modern API architecture.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-heading px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary"
            >
              View my work
              <ArrowRight size={18} />
            </a>

            <a
              href="/Abdul-Rafay-Siddiqui-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-heading transition-all hover:-translate-y-0.5 hover:border-black/30"
            >
              Download CV
              <Download size={17} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Karachi, Pakistan
            </div>

            <a
              href="https://github.com/AbdulRafay77"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-heading"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abdulrafayse"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-heading"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl border border-primary/20" />

          <div className="absolute -bottom-5 -right-5 h-36 w-36 rounded-full bg-primary/10" />

          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
            <img
              src={profileImage}
              alt="Abdul Rafay Siddiqui"
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-top"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-dark/90 p-4 text-white shadow-xl backdrop-blur-xl">
              <p className="font-semibold">Backend-focused development</p>

              <p className="mt-1 text-sm text-white/65">
                APIs · Authentication · Security · Testing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;