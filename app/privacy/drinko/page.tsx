import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Drinko 개인정보처리방침 | pocolab",
    description: "Drinko 앱 개인정보처리방침",
}

export default function DrinkoPrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
                <div className="mb-12">
                    <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        개인정보처리방침
                    </h1>
                    <p className="mt-3 text-base text-muted-foreground">시행일자: 2026년 1월 29일</p>
                    <div className="mt-6 h-px bg-border" />
                </div>

                <section className="space-y-10 text-base leading-relaxed text-foreground">
                    <div>
                        <p className="text-muted-foreground">
                            Drinko(이하 &quot;앱&quot;)는 사용자의 수분 섭취 습관 형성을 돕기 위해 서비스 제공에 필요한 최소한의 데이터를 사용합니다.
                            <br />
                            본 앱은 별도의 서버를 운영하지 않으며, 모든 데이터는 사용자의 휴대폰 내부 저장소(Local Storage)에만 저장됩니다. 따라서 사용자의 데이터는 외부로 전송되거나 개발자에게 수집되지 않습니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">1. 개인정보의 처리 목적 및 저장 위치</h2>
                        <p className="text-muted-foreground">
                            앱은 사용자의 원활한 서비스 이용을 위해 필수적인 정보를 기기 내부에만 저장하며, 수집된 정보는 외부 서버로 전송되지 않습니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">2. 수집(저장)하는 개인정보의 항목</h2>
                        <p className="text-muted-foreground">앱 이용 편의를 위해 다음의 정보가 사용자의 기기 내에 저장됩니다:</p>
                        <ul className="ml-6 space-y-2.5 text-muted-foreground">
                            <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                                닉네임 (앱 내 표시 목적)
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                                신체 정보 (체중 - 권장 섭취량 계산 목적)
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                                수분 섭취 기록 (섭취량, 음료 종류, 시간)
                            </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-border/50">
                            <p className="font-semibold text-foreground">수집하지 않는 정보:</p>
                            <p className="mt-2 text-muted-foreground">
                                본 앱은 회원가입을 요구하지 않으며, 전화번호, 이메일, 기기 고유 식별자(IMEI 등)와 같은 개인을 식별할 수 있는 민감한 정보는 일체 수집하거나 저장하지 않습니다.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">3. 개인정보의 보유 및 이용 기간</h2>
                        <p className="text-muted-foreground">
                            모든 데이터는 앱이 설치된 기간 동안에만 사용자의 기기에 보관됩니다. 앱을 삭제하거나 데이터 초기화 기능을 사용할 경우, 기기에 저장된 모든 데이터는 즉시 파기(삭제)되며 복구할 수 없습니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">4. 제3자 제공 및 위탁</h2>
                        <p className="text-muted-foreground">
                            앱은 사용자의 개인정보를 외부 서버로 전송하지 않으므로, 제3자에게 제공하거나 위탁하는 행위가 원천적으로 불가능합니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">5. 문의처</h2>
                        <p className="text-muted-foreground">개인정보 처리와 관련된 문의사항은 아래 이메일 또는 앱 스토어의 개발자 연락처를 통해 문의해 주시기 바랍니다.</p>
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
