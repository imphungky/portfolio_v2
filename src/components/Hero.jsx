import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Hi, I&apos;m
      </p>
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-header md:text-7xl">
        Michael Phung
      </h1>
      <p className="mb-12 max-w-xl text-xl text-muted-foreground">
        I build the app. Then I ship it. Then I fix the pipeline.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" className="h-12 px-6 text-base" asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-6 text-base" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}
