import { Button } from '@/components/ui/button'

const contactLinks = [
  { label: 'Email', href: 'mailto:your@email.com', icon: '✉' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle', icon: '🔗' },
  { label: 'GitHub', href: 'https://github.com/yourhandle', icon: '⌥' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="mb-6 text-lg leading-relaxed text-header">
        Get in Touch
      </h2>
      <p className="mb-12 text-muted-foreground">
        I&apos;m currently open to new opportunities. Feel free to reach out!
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {contactLinks.map((link) => (
          <Button key={link.label} variant="outline" size="lg" asChild>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="mr-2">{link.icon}</span>
              {link.label}
            </a>
          </Button>
        ))}
      </div>
    </section>
  )
}
