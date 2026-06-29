import { Badge } from '@/components/ui/badge'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Python', 'SQL', 'Git', 'REST APIs',
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-header">
        About Me
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            {/* I&apos;m a software developer passionate about building clean,
            efficient, and user-friendly applications. I enjoy solving complex
            problems and turning ideas into reality through code. */}
            I&apos;m a software developer who moves between mobile, backend,
            and infrastructure without losing the thread. Based in Ontario,
            I&apos;ve spent the last 3 years at JANA Corporation building GIS field applications,
            improving web performance, and quietly filling the gaps no one else was covering.
            I&apos;m most at home on problems that don't fit neatly into one discipline.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies,
            contributing to open-source projects, or learning something new.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-header">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
