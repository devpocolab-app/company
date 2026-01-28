import { Sparkles, Heart } from "lucide-react"

const directions = [
  {
    icon: Sparkles,
    title: "AI-Powered Solutions",
    description: "We're focused on building applications that leverage artificial intelligence to create more intuitive and helpful user experiences.",
  },
  {
    icon: Heart,
    title: "Services for Everyone",
    description: "Our future direction includes developing thoughtful services for elderly people living alone, helping them stay connected and supported.",
  },
]

export function Vision() {
  return (
    <section id="vision" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-sm font-medium text-muted-foreground">Direction</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Where we're heading
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {directions.map((direction) => (
            <div key={direction.title} className="group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                <direction.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {direction.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {direction.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
