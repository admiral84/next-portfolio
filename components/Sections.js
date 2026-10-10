import {
ArrowRight,
Download,
ExternalLink,
Github,
Linkedin,
Mail,
GraduationCap,
Award,
BookOpen,
} from "lucide-react";


import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import ProjectImageCarousel from "./ProjectImageCarousel";
import { site, nav } from "@/lib/site";
import {
skills,
projects,
experience,
education,
certifications,
} from "@/lib/data";

const CURRENT_YEAR = "2026";

const Title = ({ children, sub }) => (

  <div className="mb-10 max-w-2xl">
    <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
      {children}
    </h2>


{sub && <p className="mt-3 text-muted">{sub}</p>}


  </div>
);

export function Hero() {
return ( <section
   id="top"
   className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr]"
 > <div> <p className="mb-4 font-medium text-accent">
Tunisia · Open to remote and freelance work </p>


    <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
      {site.name}
    </h1>

    <p className="mt-4 font-display text-lg text-muted sm:text-xl">
      {site.headline}
    </p>

    <p className="mt-6 max-w-xl text-lg">
      I have taught computer science for over 17 years. Today I build web
      and mobile products, starting with a school attendance platform,
      using Next.js, React Native and Supabase.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <a href="#projects" className="btn btn-p">
        View My Projects
        <ArrowRight size={16} />
      </a>

      <a href="#contact" className="btn btn-s">
        Contact Me
      </a>

      <a href="/cv/cv_nas_.pdf" download className="btn btn-s">
        <Download size={16} />
        Download CV
      </a>
    </div>
  </div>

  <div
    className="rounded-2xl border border-line bg-surface shadow-xl"
    aria-hidden="true"
  >
    <div className="flex gap-2 border-b border-line px-4 py-3">
      <i className="h-3 w-3 rounded-full bg-line" />
      <i className="h-3 w-3 rounded-full bg-line" />
      <i className="h-3 w-3 rounded-full bg-line" />
    </div>

    <pre className="overflow-x-auto p-5 text-sm leading-7">
      <code>{`const developer = {


name: "Nasreddine",
teaching: "since 2008",
building: "École Attendance",
stack: ["Next.js", "React Native", "Supabase"],
learning: ["DevOps", "Linux", "CI/CD", "AI"],
openTo: ["freelance", "remote"],
};`}</code> </pre> </div> </section>
);
}

export function About() {
return ( <section id="about" className="section"> <div className="mx-auto max-w-6xl px-5"> <Reveal> <Title>About me</Title>


      <div className="grid gap-8 text-lg lg:grid-cols-2">
        <p>
          Since September 2008 I have taught computer science in secondary
          education in Tunisia. Explaining programming and algorithmic
          thinking to hundreds of students taught me to break complex
          problems into clear steps and to communicate them simply.
        </p>

        <p>
          Alongside teaching, I build software. My Professional Master's
          degree in Web Development gave me the foundation, and École
          Attendance, a SaaS product for schools, is where I apply it. I
          want to build useful digital products, earn recurring income
          from them, and grow into DevOps, cloud and AI engineering while
          working with international teams and clients.
        </p>
      </div>
    </Reveal>
  </div>
</section>


);
}

export function Skills() {
return ( <section id="skills" className="section"> <div className="mx-auto max-w-6xl px-5"> <Title sub="What I use today. Technologies I am still learning are listed separately below.">
Skills </Title>


    <div className="grid gap-6 sm:grid-cols-2">
      {skills.map((g, i) => {
        const Icon = g.icon;

        return (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                <Icon size={22} className="text-accent" />
                {g.title}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>


);
}

export function Projects() {
return ( <section id="projects" className="section"> <div className="mx-auto max-w-6xl px-5"> <Title sub="One product in development and two concepts. Each card states its real status.">
Featured projects </Title>


    <div className="space-y-8">
      {projects.map((p) => (
        <Reveal key={p.name}>
          <article className="grid gap-6 rounded-2xl border border-line bg-surface p-6 lg:grid-cols-[1fr_2fr] lg:p-8">
            <div>
              <p className="text-sm text-muted">{p.category}</p>

              <h3 className="mt-1 font-display text-2xl font-bold">
                {p.name}
              </h3>

              <span className="mt-3 inline-block rounded-full border border-accent px-3 py-1 text-sm font-medium text-accent">
                {p.status}
              </span>

              {p.name === projects[0]?.name ? (
  <ProjectImageCarousel />
) : (
  <div className="mt-6 flex aspect-video items-center justify-center rounded-xl border border-dashed border-line text-sm text-muted">
    Screenshot coming soon
  </div>
)}
            </div>

            <div>
              <p>{p.summary}</p>

              {p.problem && (
                <p className="mt-3 text-muted">{p.problem}</p>
              )}

              <ul className="mt-4 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="text-muted">
                    – {f}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-5 font-semibold text-accent">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    Live demo
                    <ExternalLink size={15} />
                  </a>
                )}

                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    <Github size={15} />
                    Source code
                  </a>
                )}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>


);
}

export function Experience() {
return ( <section id="experience" className="section"> <div className="mx-auto max-w-6xl px-5"> <Title>Professional experience</Title>


    <Reveal>
      <ol className="border-l-2 border-line pl-6">
        <li className="relative">
          <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-accent" />

          <h3 className="font-display text-xl font-bold">
            {experience.role}
          </h3>

          <p className="text-muted">
            {experience.place} · {experience.period}
          </p>

          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5">
            {experience.points.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </li>
      </ol>
    </Reveal>
  </div>
</section>


);
}

export function Education() {
return ( <section id="education" className="section"> <div className="mx-auto max-w-6xl px-5"> <Title>Education & certifications</Title>


    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-line bg-surface p-6">
        <h3 className="flex items-center gap-2 font-display text-xl font-bold">
          <GraduationCap className="text-accent" />
          Education
        </h3>

        {education.map((e) => (
          <p key={e.title} className="mt-4">
            <b>{e.title}</b>
            <br />
            <span className="text-muted">{e.detail}</span>
          </p>
        ))}
      </div>

      <div className="rounded-2xl border border-line bg-surface p-6">
        <h3 className="flex items-center gap-2 font-display text-xl font-bold">
          <Award className="text-accent" />
          Certifications
        </h3>

        {certifications.length === 0 ? (
          <p className="mt-4 text-muted">
            Verified certifications in DevOps, cloud, Linux and AI will
            appear here as I earn them.
          </p>
        ) : (
          certifications.map((c) => (
            <p key={c.title} className="mt-4">
              <b>{c.title}</b>
              <br />

              <span className="text-muted">
                {c.issuer}, {c.year}
              </span>

              {c.url && (
                <>
                  {" · "}
                  <a
                    className="text-accent underline"
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify
                  </a>
                </>
              )}
            </p>
          ))
        )}
      </div>
    </div>
  </div>
</section>


);
}

export function Learning() {
const certifiedCourses = [
{
title: "HTML and CSS in Depth",
provider: "Meta",
category: "Front-end & Web Fundamentals",
url: "https://coursera.org/share/94d2dc2ee8fd4a60106699b7ae88e053",
},
{
title: "Introduction to Front-End Development",
provider: "Meta",
category: "Front-end & Web Fundamentals",
url: "https://coursera.org/share/7d741e7f6d7064191cbed8693534d8de",
},
{
title: "Programming with JavaScript",
provider: "Meta",
category: "Front-end & Web Fundamentals",
url: "https://coursera.org/share/fe811f1151413148a0b093e6ae209f1b",
},
{
title: "HTML, CSS, and Javascript for Web Developers",
provider: "Johns Hopkins University",
category: "Front-end & Web Fundamentals",
url: "https://coursera.org/share/9525c1ee08ac18abdf95e1ad1a2e6add",
},
{
title: "React Basics",
provider: "Meta",
category: "React",
url: "https://coursera.org/share/c9e2e06c8cc6abc18dea7585c31fb806",
},
{
title: "Front-End Web Development with React",
provider: "The Hong Kong University of Science and Technology",
category: "React",
url: "https://coursera.org/share/fd7bffbd22a9962af416acfb4f6dd74d",
},
{
title: "Version Control",
provider: "Meta",
category: "Tools & Workflow",
url: "https://coursera.org/share/e5c8bb0a95f14cebb57714cb6f2678cd",
},
{
title: "Introduction to Generative AI",
provider: "Google Cloud",
category: "AI",
url: "https://coursera.org/share/0918864945474d24bda67a7d60db4135",
},
];

const pendingCourse = {
title: "Design Foundations of User Experience (UX) Design",
provider: "Google",
category: "UX Design",
};

return ( <section id="learning" className="section"> <div className="mx-auto max-w-6xl px-5"> <Title sub="Nine Coursera courses completed at 100%, covering front-end development, React, development workflow, UX and generative AI.">
Learning & Certifications </Title>


    <div>
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-full bg-accent/10 p-2">
          <Award size={20} className="text-accent" />
        </div>

        <div>
          <h3 className="font-display text-xl font-bold">
            Completed &amp; Certified
          </h3>

          <p className="text-sm text-muted">
            8 Coursera courses with certificates available
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifiedCourses.map((course) => (
          <article
            key={course.title}
            className="rounded-2xl border border-line bg-surface p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="rounded-lg bg-accent/10 p-2">
                <BookOpen size={18} className="text-accent" />
              </div>

              <span className="rounded-full border border-accent px-2.5 py-1 text-xs font-medium text-accent">
                100% complete
              </span>
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
              {course.category}
            </p>

            <h4 className="mt-1 font-display text-lg font-bold">
              {course.title}
            </h4>

            <p className="mt-2 text-sm text-muted">
              {course.provider}
            </p>

            {course.url && (
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Verify certificate
                <ExternalLink size={15} />
              </a>
            )}
          </article>
        ))}
      </div>
    </div>

    <div className="mt-10">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-full bg-accent/10 p-2">
          <BookOpen size={20} className="text-accent" />
        </div>

        <div>
          <h3 className="font-display text-xl font-bold">
            Certificate pending
          </h3>

          <p className="text-sm text-muted">
            Course completed, certificate awaiting identity verification
          </p>
        </div>
      </div>

      <article className="max-w-2xl rounded-2xl border border-dashed border-accent bg-surface p-5">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-2">
            <BookOpen size={20} className="text-accent" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {pendingCourse.category}
            </p>

            <h4 className="mt-1 font-display text-lg font-bold">
              {pendingCourse.title}
            </h4>

            <p className="mt-2 text-sm text-muted">
              {pendingCourse.provider}
            </p>

            <p className="mt-3 text-sm text-muted">
              Course completed at 100%. The Coursera certificate is
              currently pending identity verification.
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>


);
}

export function Contact() {
return ( <section id="contact" className="section"> <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2"> <div> <Title sub="Available for freelance projects and remote roles. Tell me what you are building.">
Let's work together </Title>


      <ul className="space-y-3 font-medium">
        <li>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <Mail size={18} />
            {site.email}
          </a>
        </li>

        <li>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <Github size={18} />
            GitHub
          </a>
        </li>
      </ul>
    </div>

    <ContactForm email={site.email} />
  </div>
</section>


);
}

export function Footer() {
return ( <footer className="border-t border-line py-8 text-sm text-muted"> <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between"> <p>
© {CURRENT_YEAR} {site.name} </p>


    <nav aria-label="Footer" className="flex flex-wrap gap-4">
      {nav.map(([label, href]) => (
        <a key={href} href={href} className="hover:text-ink">
          {label}
        </a>
      ))}
    </nav>

    <div className="flex gap-4">
      <a
        href={site.github}
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={20} />
      </a>

      <a
        href={site.linkedin}
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={20} />
      </a>

      <a href={`mailto:${site.email}`} aria-label="Email">
        <Mail size={20} />
      </a>
    </div>
  </div>
</footer>


);
}
