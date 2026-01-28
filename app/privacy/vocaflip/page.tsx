import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "vocaflip 개인정보처리방침 | pocolab",
  description: "vocaflip 앱 개인정보처리방침",
}

export default function VocaflipPrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            개인정보처리방침
          </h1>
          <p className="mt-3 text-base text-muted-foreground">시행일자: 2025년 9월 5일</p>
          <div className="mt-6 h-px bg-border" />
        </div>

        <section className="space-y-10 text-base leading-relaxed text-foreground">
          <div>
            <p className="text-muted-foreground">
              vocaflip (이하 &quot;앱&quot;)은 오프라인 기반의 단어 학습 도구로, 사용자의 개인정보를 최소한으로 수집하며 다음과 같이
              처리합니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. 수집하는 정보</h2>
            <ul className="ml-6 space-y-2.5 text-muted-foreground">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                닉네임: 앱 내 사용자 식별을 위한 용도 (실명이 아닌 임의의 이름)
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                학습 진도: 학습한 단어, 퀴즈 결과 등 (사용자 기기에만 저장)
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. 수집하지 않는 정보</h2>
            <p className="text-muted-foreground">앱은 다음과 같은 개인정보를 수집하지 않습니다.</p>
            <ul className="ml-6 space-y-2.5 text-muted-foreground">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                실명, 전화번호, 이메일 주소
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                위치 정보, 연락처, 사진
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                기타 민감한 개인정보
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. 데이터 저장 및 보안</h2>
            <ul className="ml-6 space-y-2.5 text-muted-foreground">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                모든 데이터는 사용자의 기기에만 저장되며, 서버나 외부 시스템으로 전송되지 않습니다.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                로컬 기기에 안전하게 저장되며, 앱 삭제 시 모든 데이터가 자동으로 삭제됩니다.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. 제3자 제공</h2>
            <p className="text-muted-foreground">앱은 사용자의 개인정보를 어떠한 제3자에게도 제공하지 않습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. 문의</h2>
            <p className="text-muted-foreground">개인정보 관련 문의는 아래 이메일로 연락주시기 바랍니다.</p>
            <div className="mt-4 rounded-lg bg-muted/50 p-4">
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
        </section>
      </div>
    </main>
  )
}

