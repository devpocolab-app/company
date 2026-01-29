import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const metadata: Metadata = {
    title: "vocaflip | pocolab",
    description: "단어 암기를 이해 중심 학습으로 바꾸기 위한 오프라인 단어 학습 앱 Vocaflip 케이스 스터디.",
    openGraph: {
        title: "vocaflip | pocolab",
        description: "단어 암기를 이해 중심 학습으로 바꾸기 위한 오프라인 단어 학습 앱 vocaflip 케이스 스터디.",
        images: [
            {
                url: "/vocaflip/opengraph-image",
                width: 1200,
                height: 630,
                alt: "vocaflip",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "vocaflip | pocolab",
        description: "단어 암기를 이해 중심 학습으로 바꾸기 위한 오프라인 단어 학습 앱 vocaflip 케이스 스터디.",
        images: ["/vocaflip/opengraph-image"],
    },
}

export default function VocaflipPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
                {/* Hero */}
                <section>
                    <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        Case Study
                    </span>
                    <h1 className="mt-4 flex items-center gap-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                        <Link href="/">
                            <Image
                                src="/vocaflip/vocaflip_logo.png"
                                alt="vocaflip"
                                width={64}
                                height={64}
                                priority
                                className="h-16 w-16 rounded-xl bg-white object-contain p-1 transition-opacity hover:opacity-80"
                            />
                        </Link>
                        vocaflip
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        단어 암기를
                        <br className="hidden sm:inline" />
                        이해 중심 학습으로 바꾸기 위한 시도
                    </p>
                </section>

                {/* Meta */}
                <section className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    <div className="rounded-xl border border-border bg-card px-4 py-3">
                        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Platform
                        </div>
                        <div className="mt-1 text-sm font-semibold text-foreground">Android</div>
                    </div>
                    <div className="rounded-xl border border-border bg-card px-4 py-3">
                        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Status
                        </div>
                        <div className="mt-1 text-sm font-semibold text-foreground">Google Play 출시</div>
                    </div>
                    <div className="rounded-xl border border-border bg-card px-4 py-3">
                        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Type
                        </div>
                        <div className="mt-1 text-sm font-semibold text-foreground">오프라인 학습 앱</div>
                    </div>
                    <div className="rounded-xl border border-border bg-card px-4 py-3">
                        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Role
                        </div>
                        <div className="mt-1 text-sm font-semibold text-foreground">기획 · UX · 개발 · 배포</div>
                    </div>
                </section>

                {/* Overview */}
                <section className="mt-16 space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Overview</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                        Vocaflip은 중학생 단어 학습 과정에서 반복 암기 위주의 학습이 오래 유지되지 않는 문제에서 출발한 프로젝트입니다.
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground">
                        단어를 외우는 행위보다, 의미와 사용 맥락을 함께 기억하게 만드는 학습 흐름에 집중했습니다.
                    </p>
                </section>

                {/* Problem */}
                <section className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Problem</h2>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            단어, 뜻, 예문이 분리된 학습 구조
                        </li>
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            학습 흐름이 자주 끊기는 경험
                        </li>
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            로그인·광고 등 학습 외 요소의 개입
                        </li>
                    </ul>
                </section>

                {/* Approach */}
                <section className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Approach</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="flex flex-col rounded-xl border border-border bg-card p-4">
                            <strong className="text-sm font-semibold text-foreground">플립 구조</strong>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                단어 → 뜻 → 예문을 한 흐름에서 넘기며 확인하도록 설계했습니다.
                            </p>
                        </div>
                        <div className="flex flex-col rounded-xl border border-border bg-card p-4">
                            <strong className="text-sm font-semibold text-foreground">복습 동선 단순화</strong>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                퀴즈와 단어장을 다시 학습으로 자연스럽게 연결했습니다.
                            </p>
                        </div>
                        <div className="flex flex-col rounded-xl border border-border bg-card p-4">
                            <strong className="text-sm font-semibold text-foreground">방해 요소 제거</strong>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                로그인·광고를 제거하고, 오프라인 사용이 가능하도록 설계했습니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Screenshots */}
                <section className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Screenshots</h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        플립 흐름과 복습 동선이 실제 화면에서 어떻게 이어지는지 확인할 수 있습니다.
                    </p>

                    <div className="mt-8 space-y-10">
                        <div>
                            <h3 className="text-sm font-semibold text-foreground">영단어</h3>
                            {/* Mobile: carousel (one image at a time), Desktop: grid */}
                            <div className="mt-4 md:hidden">
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {[
                                            { src: "/vocaflip/ss_eng_1.jpg", alt: "Vocaflip screenshot (English) 1" },
                                            { src: "/vocaflip/ss_eng_2.jpg", alt: "Vocaflip screenshot (English) 2" },
                                            { src: "/vocaflip/ss_eng_3.jpg", alt: "Vocaflip screenshot (English) 3" },
                                        ].map((item) => (
                                            <CarouselItem key={item.src}>
                                                <div className="w-[280px] h-[400px] relative mx-auto">
                                                    <AspectRatio ratio={9 / 16}>
                                                        <Image
                                                            src={item.src}
                                                            alt={item.alt}
                                                            fill
                                                            className="object-contain rounded-lg"
                                                        />
                                                    </AspectRatio>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-2" />
                                    <CarouselNext className="right-2" />
                                </Carousel>
                            </div>
                            {/* Desktop: grid */}
                            <div className="mt-4 hidden grid-cols-3 gap-4 md:grid">
                                {[
                                    { src: "/vocaflip/ss_eng_1.jpg", alt: "Vocaflip screenshot (English) 1" },
                                    { src: "/vocaflip/ss_eng_2.jpg", alt: "Vocaflip screenshot (English) 2" },
                                    { src: "/vocaflip/ss_eng_3.jpg", alt: "Vocaflip screenshot (English) 3" },
                                ].map((item) => (
                                    <div
                                        key={item.src}
                                        className="overflow-hidden rounded-xl border border-border bg-card"
                                    >
                                        <AspectRatio ratio={9 / 16}>
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 50vw, 33vw"
                                            />
                                        </AspectRatio>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-foreground">한자</h3>
                            {/* Mobile: carousel (one image at a time), Desktop: grid */}
                            <div className="mt-4 md:hidden">
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {[
                                            { src: "/vocaflip/ss_han_1.jpg", alt: "Vocaflip screenshot (Korean) 1" },
                                            { src: "/vocaflip/ss_han_2.jpg", alt: "Vocaflip screenshot (Korean) 2" },
                                            // NOTE: file name in /public/vocaflip is ss_han3.jpg (no underscore)
                                            { src: "/vocaflip/ss_han3.jpg", alt: "Vocaflip screenshot (Korean) 3" },
                                        ].map((item) => (
                                            <CarouselItem key={item.src}>
                                                <div className="w-[280px] h-[400px] relative mx-auto">
                                                    <AspectRatio ratio={9 / 16}>
                                                        <Image
                                                            src={item.src}
                                                            alt={item.alt}
                                                            fill
                                                            className="object-contain rounded-lg"
                                                        />
                                                    </AspectRatio>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-2" />
                                    <CarouselNext className="right-2" />
                                </Carousel>
                            </div>
                            {/* Desktop: grid */}
                            <div className="mt-4 hidden grid-cols-3 gap-4 md:grid">
                                {[
                                    { src: "/vocaflip/ss_han_1.jpg", alt: "Vocaflip screenshot (Korean) 1" },
                                    { src: "/vocaflip/ss_han_2.jpg", alt: "Vocaflip screenshot (Korean) 2" },
                                    // NOTE: file name in /public/vocaflip is ss_han3.jpg (no underscore)
                                    { src: "/vocaflip/ss_han3.jpg", alt: "Vocaflip screenshot (Korean) 3" },
                                ].map((item) => (
                                    <div
                                        key={item.src}
                                        className="overflow-hidden rounded-xl border border-border bg-card"
                                    >
                                        <AspectRatio ratio={9 / 16}>
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 50vw, 33vw"
                                            />
                                        </AspectRatio>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Principles */}
                <section className="mt-16 space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Design Principles</h2>
                    <blockquote className="mt-2 border-l-2 border-border pl-4 text-base italic text-muted-foreground">
                        화려함보다, 오래 써도 피로하지 않은 구조
                    </blockquote>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            시각적 요소 최소화
                        </li>
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            반복 사용 시 동일한 패턴 유지
                        </li>
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            기능보다 흐름을 우선하는 UI
                        </li>
                    </ul>
                </section>

                {/* Result */}
                <section className="mt-16 space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Result</h2>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            Google Play 스토어 출시
                        </li>
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            오프라인 환경에서도 안정적 사용 가능
                        </li>
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            개인 학습 도구로 지속 사용 가능한 구조 확보
                        </li>
                    </ul>
                </section>

                {/* Learnings */}
                <section className="mt-16 space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">What We Learned</h2>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            기능 추가보다 제거가 더 중요한 경우가 있다
                        </li>
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            사용자를 붙잡는 장치보다 흐름이 중요하다
                        </li>
                        <li className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/50">
                            학습 UX의 핵심은 끊기지 않는 사용 경험이다
                        </li>
                    </ul>
                </section>

                {/* Links */}
                <section className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Links</h2>
                    <div className="mt-4">
                        <Link
                            href="https://play.google.com/store/apps/details?id=app.pocolab.vocaflip&pcampaignid=web_share"
                            className="inline-flex items-center text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Play
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}


