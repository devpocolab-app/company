import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Smartphone, Bot, Image as ImageIcon, MapPin, Activity, Images, LayoutDashboard } from "lucide-react"

export const metadata: Metadata = {
    title: "eardream | pocolab",
    description: "A smart companion app connecting elderly parents and their guardians.",
}

export default function EardreamPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-24 md:py-32">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-[-100px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"></div>
                    </div>
                    
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Text Content */}
                            <div className="flex-1 max-w-2xl">
                                <div className="mb-4">
                                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                        Available on Android & iOS
                                    </span>
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                                    eardream
                                </h1>
                                <p className="mt-4 text-xl font-medium text-gray-700">
                                    A smart companion connecting elderly parents and their families.
                                </p>
                                <p className="mt-6 text-lg leading-relaxed text-gray-600 text-pretty">
                                    Whether you're near or far, eardream gives you peace of mind. Designed specifically for seniors, it simplifies daily smartphone use while providing family members with powerful caregiving tools.
                                </p>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Link href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-all">
                                        <Smartphone className="h-5 w-5" />
                                        App Store (iOS)
                                    </Link>
                                    <Link href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
                                        <Bot className="h-5 w-5" />
                                        Google Play
                                    </Link>
                                </div>
                            </div>

                            {/* Hero Images */}
                            <div className="flex-1 w-full max-w-lg relative h-[500px] sm:h-[600px] hidden md:block">
                                {/* Screen 1 (Back/Right) */}
                                <div className="absolute right-0 top-10 w-[240px] rounded-[2rem] border-[6px] border-gray-800 bg-gray-100 shadow-2xl overflow-hidden transform rotate-6 transition-transform duration-500 hover:rotate-0 hover:z-20">
                                    <Image src="/eardream/guardian.jpeg" alt="Guardian Screen" width={240} height={533} className="w-full h-auto object-cover" />
                                </div>
                                
                                {/* Screen 2 (Front/Left) */}
                                <div className="absolute left-4 bottom-10 w-[240px] rounded-[2rem] border-[6px] border-gray-800 bg-gray-100 shadow-2xl overflow-hidden transform -rotate-2 transition-transform duration-500 hover:rotate-0 hover:z-20 z-10">
                                    <Image src="/eardream/parents.jpg" alt="Parent Screen" width={240} height={533} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            
                            {/* Hero Images (Mobile view) */}
                            <div className="flex-1 w-full flex md:hidden gap-4 overflow-x-auto pb-4 snap-x">
                                <div className="shrink-0 w-[240px] rounded-[2rem] border-[6px] border-gray-800 bg-gray-100 shadow-xl overflow-hidden snap-center">
                                    <Image src="/eardream/parents.jpg" alt="Parent Screen" width={240} height={533} className="w-full h-auto object-cover" />
                                </div>
                                <div className="shrink-0 w-[240px] rounded-[2rem] border-[6px] border-gray-800 bg-gray-100 shadow-xl overflow-hidden snap-center">
                                    <Image src="/eardream/guardian.jpeg" alt="Guardian Screen" width={240} height={533} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="border-t border-gray-200 bg-white py-24 md:py-32">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16 max-w-2xl">
                            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Features</p>
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Everything you need to care.</h2>
                            <p className="mt-4 text-lg text-gray-600">Thoughtfully designed tools that bring families closer together, effortlessly.</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                            {/* Feature 1 */}
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Real-time Location Tracker</h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Stay reassured with precise, real-time location updates. Guardians can check their parent's current whereabouts instantly from the dashboard.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Daily Activity Sensing</h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Keep an eye on their daily well-being. The app tracks step counts seamlessly in the background, making it easy to see if your parents are staying active.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                                    <Images className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Memory Slideshows</h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Bring smiles to their faces. The Parent Mode features an auto-playing photo slideshow, allowing families to easily share precious moments.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                                    <LayoutDashboard className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Dual App Modes</h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Parent Mode offers a highly simplified, intuitive interface. Guardian Mode provides a comprehensive dashboard for family members to monitor activity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-gray-200 bg-gray-50 py-24">
                    <div className="mx-auto max-w-3xl px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bring peace of mind to your family today.</h2>
                        <p className="mt-4 text-lg text-gray-600">Download the eardream app and start connecting with your loved ones in a more meaningful way.</p>
                        <div className="mt-10 flex justify-center gap-4">
                            <Link href="#" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
