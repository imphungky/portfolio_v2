import { Button } from '@/components/ui/button'
import config from '@/config'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-pixel text-sm text-header">
          {config.siteName}
        </a>
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" className="h-10 px-4 text-base" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Button className="h-10 px-4 text-base" asChild>
            <a href={config.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
