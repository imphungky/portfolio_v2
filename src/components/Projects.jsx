import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'PostureAI',
    description: 'Facial recognition powered by AI. Built to keep your posture in check.',
    tags: ['React', 'Node.js'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Project Two',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['Python', 'FastAPI', 'Docker'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Project Three',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['TypeScript', 'Next.js', 'Tailwind'],
    links: { live: '#', github: '#' },
  },
]

function ProjectCard({ title, description, tags, links }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-header">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex gap-2">
        <Button size="sm" asChild>
          <a href={links.live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-header">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
