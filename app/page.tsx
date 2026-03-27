import Image from "next/image";

export default function Home() {
  const technicalSkills = [
    { name: "Java", level: 80 },
    { name: "Spring Boot", level: 74 },
    { name: "SQL Server", level: 88 },
    { name: "Angular", level: 72 },
    { name: "Python", level: 78 },
    { name: ".NET / C#", level: 68 },
  ];

  const professionalSkills = [
    { name: "Communication", level: 90 },
    { name: "Team Work", level: 88 },
    { name: "Problem Solving", level: 86 },
    { name: "Adaptability", level: 84 },
  ];

  const projects = [
    {
      title: "Sistema de Cobro Electrónico de Peaje",
      description:
          "Solución web orientada a automatizar procesos de peaje con RFID, OCR y pagos digitales.",
      stack: ["Java", "SQL Server", "Web", "Integrations"],
    },
    {
      title: "Automatización de Procesos Contables",
      description:
          "Generación de estructuras XML, validaciones y trazabilidad de procesos contables con reglas de negocio.",
      stack: [".NET", "XML", "SQL", "SAP"],
    },
    {
      title: "Análisis y Automatización de Datos",
      description:
          "Desarrollo de soluciones con Python y SQL para análisis, validación y automatización de procesos empresariales.",
      stack: ["Python", "Pandas", "SQL", "Automation"],
    },
  ];

  return (
      <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-[-120px] top-[80px] h-[260px] w-[260px] rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-[-100px] left-[35%] h-[280px] w-[280px] rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[390px_1fr]">
          <aside className="border-r border-white/10 bg-black/30 p-6 backdrop-blur-xl lg:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div className="text-4xl font-extrabold tracking-tight text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">
                TJ
              </div>
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300">
                Online
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="relative h-[360px] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1624]">
                <Image
                    src="/profile.jpeg"
                    alt="Tomas Jara"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-400/10 to-transparent" />
              </div>

              <div className="mt-8">
                <h1 className="text-5xl font-extrabold leading-tight">
                  Tomas Jara
                </h1>

                <p className="mt-3 text-xl font-medium text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                  Java Junior Developer
                </p>

                <p className="mt-6 text-[15px] leading-8 text-white/72">
                  Desarrollador orientado a soluciones empresariales, backend,
                  integraciones y análisis de datos, con interés en crecer en
                  tecnologías Java y construir productos web modernos.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                      href="#projects"
                      className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_22px_rgba(34,211,238,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(34,211,238,0.55)]"
                  >
                    Ver proyectos
                  </a>

                  <a
                      href="#contact"
                      className="rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <section className="px-5 py-6 lg:px-10 lg:py-10">
            <div className="mx-auto max-w-6xl space-y-8">
              <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Resume
                </p>

                <h2 className="mt-4 max-w-5xl text-4xl font-extrabold leading-tight lg:text-6xl">
                  Bienvenido a mi{" "}
                  <span className="text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">
                  CV Landing Page
                </span>
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                  Un espacio donde presento mi perfil profesional, experiencia,
                  stack tecnológico y proyectos en un formato web moderno, visual
                  y con identidad futurista.
                </p>
              </section>

              <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]">
                  <h3 className="text-3xl font-bold">Sobre mí</h3>
                  <p className="mt-5 text-[16px] leading-8 text-white/72">
                    Soy profesional de Ingeniería de Sistemas con experiencia en
                    soporte y desarrollo de soluciones empresariales. He trabajado
                    con SQL Server, Java, Angular, .NET y Python en procesos de
                    automatización, integración de sistemas y mejora operativa.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]">
                  <h3 className="text-3xl font-bold">Experiencia</h3>

                  <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold">
                          Asistente de Aplicaciones
                        </h4>
                        <p className="mt-1 text-cyan-400">PEX Tecnología</p>
                      </div>

                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Actual
                    </span>
                    </div>

                    <p className="mt-4 leading-7 text-white/72">
                      Desarrollo y soporte de soluciones empresariales,
                      optimización de consultas SQL Server, automatización de
                      procesos e integraciones con sistemas internos y externos.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <h3 className="text-3xl font-bold">Technical Skills</h3>

                    <div className="mt-8 space-y-6">
                      {technicalSkills.map((skill) => (
                          <div key={skill.name}>
                            <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-white">
                            {skill.name}
                          </span>
                              <span className="text-white/70">{skill.level}%</span>
                            </div>

                            <div className="h-2.5 w-full rounded-full bg-white/12">
                              <div
                                  className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.75)]"
                                  style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">Professional Skills</h3>

                    <div className="mt-8 grid grid-cols-2 gap-8">
                      {professionalSkills.map((skill, index) => {
                        const radius = 48;
                        const stroke = 8;
                        const normalizedRadius = radius - stroke / 2;
                        const circumference = normalizedRadius * 2 * Math.PI;
                        const strokeDashoffset =
                            circumference - (skill.level / 100) * circumference;
                        const gradientId = `gradient-${index}`;

                        return (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center justify-center"
                            >
                              <div className="relative">
                                <svg
                                    height={radius * 2}
                                    width={radius * 2}
                                    className="rotate-[-90deg] drop-shadow-[0_0_12px_rgba(34,211,238,0.28)]"
                                >
                                  <defs>
                                    <linearGradient id={gradientId}>
                                      <stop offset="0%" stopColor="#22d3ee" />
                                      <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                  </defs>

                                  <circle
                                      stroke="rgba(255,255,255,0.14)"
                                      fill="transparent"
                                      strokeWidth={stroke}
                                      r={normalizedRadius}
                                      cx={radius}
                                      cy={radius}
                                  />
                                  <circle
                                      stroke={`url(#${gradientId})`}
                                      fill="transparent"
                                      strokeWidth={stroke}
                                      strokeLinecap="round"
                                      strokeDasharray={`${circumference} ${circumference}`}
                                      style={{ strokeDashoffset }}
                                      r={normalizedRadius}
                                      cx={radius}
                                      cy={radius}
                                  />
                                </svg>

                                <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-bold">
                                {skill.level}%
                              </span>
                                </div>
                              </div>

                              <p className="mt-4 text-center text-sm text-white/80">
                                {skill.name}
                              </p>
                            </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>

              <section
                  id="projects"
                  className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">Proyectos</h3>
                    <p className="mt-2 text-white/65">
                      Algunas soluciones y líneas de trabajo destacadas.
                    </p>
                  </div>

                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                    Selected Work
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {projects.map((project) => (
                      <article
                          key={project.title}
                          className="group rounded-[1.5rem] border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                      >
                        <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

                        <h4 className="text-2xl font-semibold leading-8 transition group-hover:text-cyan-300">
                          {project.title}
                        </h4>

                        <p className="mt-4 leading-7 text-white/72">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                              <span
                                  key={item}
                                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                              >
                          {item}
                        </span>
                          ))}
                        </div>
                      </article>
                  ))}
                </div>
              </section>

              <section
                  id="contact"
                  className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold">Contacto</h3>

                <p className="mt-4 max-w-2xl leading-7 text-white/72">
                  Disponible para oportunidades como desarrollador junior,
                  proyectos tecnológicos y networking profesional.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                      href="mailto:amtoarja@gmail.com"
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    Email
                  </a>

                  <a
                      href="https://linkedin.com/in/tomas-daniel-jara-lopez-489b68212"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    LinkedIn
                  </a>

                  <a
                      href="https://github.com/JECK-dev"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
  );
}