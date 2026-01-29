"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 -ml-6">
          <Image
            src="/pocolab_logo.png"
            alt="pocolab"
            width={140}
            height={35}
            priority
            className="h-10-auto"
          />
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="#products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="#vision"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Vision
          </Link>
        </nav>
      </div>
    </header>
  )
}
