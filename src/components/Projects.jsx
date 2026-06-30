import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import config from '@/config'

const { projects } = config

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
        {links.live && 
        <Button size="sm" asChild>
          <a href={links.live} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Button>
        }
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
      <h2 className="mb-12 text-center text-lg text-header">
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
