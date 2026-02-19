import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "이어드림 개인정보처리방침 | pocolab",
    description: "부모님과 자녀를 이어주는 이어드림 앱의 개인정보 수집 및 이용에 관한 처리방침입니다.",
}

export default function EardreamPrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
                <div className="mb-12">
                    <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        개인정보처리방침
                    </h1>
                    <p className="mt-3 text-base text-muted-foreground">시행일자: 2025년 3월 10일</p>
                    <div className="mt-6 h-px bg-border" />
                </div>

                <section className="space-y-10 text-base leading-relaxed text-foreground">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">1. 개인정보의 처리 목적</h2>
                        <p className="text-muted-foreground">
                            이어드림(이하 &quot;앱&quot;)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                        </p>
                        <ul className="ml-6 space-y-2.5 text-muted-foreground">
                            <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                                회원 가입 및 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인, 불만처리 등 민원처리, 고지사항 전달
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                                서비스 제공: 부모님과 자녀 간의 음성 메시지 전송, 활동 모니터링(걸음 수, 위치), 약 복용 알림, 추억 상자(사진/영상) 공유 기능 제공
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">2. 처리하는 개인정보의 항목</h2>
                        <p className="text-muted-foreground">앱은 다음의 개인정보 항목을 처리하고 있습니다.</p>
                        <ul className="ml-6 space-y-2.5 text-muted-foreground">
                            <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                                필수항목: 이메일, 비밀번호, 이름(닉네임), 역할(부모/보호자)
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground/40">
                                서비스 이용 과정에서 수집되는 정보: 음성 데이터, 사진/영상 데이터, 위치 정보, 걸음 수 데이터, 기기 정보, 접속 로그
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">3. 개인정보의 처리 및 보유 기간</h2>
                        <p className="text-muted-foreground">
                            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">4. 개인정보의 제3자 제공</h2>
                        <p className="text-muted-foreground">
                            앱은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자들이 사전에 동의한 경우나 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우는 예외로 합니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">5. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
                        <p className="text-muted-foreground">
                            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">6. 개인정보 보호책임자</h2>
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