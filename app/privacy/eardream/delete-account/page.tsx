import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "이어드림(EarDream) 계정 삭제 요청 | pocolab",
  description: "이어드림 앱 계정 및 데이터 삭제 요청 방법 안내",
}

export default function EardreamDeleteAccountPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            이어드림(EarDream) 계정 삭제 요청
          </h1>
          <div className="mt-6 h-px bg-border" />
        </div>

        <section className="space-y-10 text-base leading-relaxed text-foreground">
          <div>
            <p className="text-muted-foreground">
              이어드림 앱의 계정 및 데이터 삭제를 원하시는 경우, 아래 이메일로 요청해 주시기 바랍니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">접수 이메일</h2>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-base font-medium text-foreground">
                📬{" "}
                <a
                  href="mailto:dev.pocolab@gmail.com"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-foreground/80"
                >
                  dev.pocolab@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">필수 기재 사항</h2>
            <ul className="ml-6 space-y-2.5 text-muted-foreground">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                가입 시 사용한 이메일 주소
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">처리 절차</h2>
            <p className="text-muted-foreground">
              요청 접수 후 확인을 거쳐 계정 및 모든 개인정보를 영구 삭제합니다.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
