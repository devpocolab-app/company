import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Droplets, MessageSquare } from "lucide-react"

const products = [
  {
    name: "vocaflip",
    description: "Vocabulary learning app designed for middle school students. Learn new words through interactive flashcards and spaced repetition.",
    platform: "Android",
    icon: BookOpen,
    status: "Available",
    href: "/vocaflip",
  },
  {
    name: "aquatap",
    description: "Track your daily water intake with simple and intuitive logging. Stay hydrated and build healthy habits.",
    platform: "Android",
    icon: Droplets,
    status: "Coming Soon",
  },
  {
    name: "miriopic",
    description: "AI-powered OPIC mock test service. Practice speaking tests and receive instant feedback to improve your scores.",
    platform: "Web",
    icon: MessageSquare,
    status: "Available",
  },
]

export function Products() {
  return (
    <section id="products" className="border-t border-border bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-sm font-medium text-muted-foreground">Products</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            What we build
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const CardWrapper = product.href ? Link : "div"
            const cardProps = product.href ? { href: product.href } : {}

            return (
              <CardWrapper key={product.name} {...cardProps}>
                <Card className="group relative overflow-hidden border-border bg-card transition-all hover:border-foreground/20 hover:shadow-sm h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                        <product.icon className="h-5 w-5 text-foreground" />
                      </div>
                      <Badge
                        variant={product.status === "Coming Soon" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-lg font-semibold text-foreground">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {product.platform}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
