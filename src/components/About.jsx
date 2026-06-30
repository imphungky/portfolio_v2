import { Badge } from '@/components/ui/badge'
import config from '@/config'

const { paragraphs, skills } = config.about

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-center text-lg text-header">
        About Me
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 text-muted-foreground leading-relaxed last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-pixel text-xs text-header">Skills</h3>
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
