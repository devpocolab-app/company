import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="text-lg font-semibold text-slate-50">pocolab</span>
            <p className="mt-2 text-sm text-slate-400">
              Building small but useful apps.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              © {new Date().getFullYear()} pocolab. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:dev.pocolab@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 hover:text-slate-50"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
