import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 md:py-32 lg:py-40">
      {/* subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
            Small but useful apps
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl text-pretty">
            pocolab is a product studio focused on building practical applications
            that make everyday life a little easier.
          </p>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-xl bg-gray-700 px-7 hover:bg-gray-800"
            >
              <Link href="#products">
                View Products
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
