import { Button } from '@/components/ui/button'
import config from '@/config'

const { greeting, name, tagline } = config.hero

export default function Hero() {
  return (
    <section className="hero-retro flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-6 font-pixel text-[10px] uppercase tracking-widest text-header">
        ▸ {greeting}
      </p>
      <h1 className="mb-6 max-w-full break-words font-pixel text-lg leading-relaxed text-foreground text-glow sm:text-2xl md:text-4xl">
        {name}
      </h1>
      <p className="mb-12 max-w-xl text-xl text-muted-foreground">
        {tagline}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" className="h-12 px-6 font-pixel text-xs" asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button size="lg" variant="outline" className="retro-cursor h-12 px-6 font-pixel text-xs" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}
