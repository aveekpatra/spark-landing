import Link from 'next/link'
import { CheckCircle2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContentSection() {
    return (
        <section className="relative py-24 md:py-32 font-sans">
            <div className="absolute top-[-30%] right-[10%] w-[350px] h-[1000px] pointer-events-none rotate-[20deg] bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.07)_40%,rgba(59,130,246,0.10)_50%,rgba(37,99,235,0.07)_60%,transparent_100%)] blur-[90px]" />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

                    {/* Left — Image with premium frame */}
                    <div className="relative">
                        {/* Outer glow behind frame */}
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/[0.08] via-transparent to-indigo-500/[0.06] blur-xl pointer-events-none" />

                        {/* Frame with padding, border glow, inner shadow */}
                        <div className="relative rounded-[20px] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] p-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                            <div className="rounded-[16px] overflow-hidden shadow-[inset_0_2px_20px_rgba(0,0,0,0.4)]">
                                <img
                                    src="/workshop-multi-monitor-desk.jpeg"
                                    alt="Pompex IT workspace"
                                    className="w-full aspect-[3/2] object-cover block"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Bottom edge reflection */}
                        <div className="absolute -bottom-1 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Right — Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full pl-2.5 pr-4 py-1 mb-8">
                            <span className="w-2 h-2 rounded-full bg-white/60" />
                            <span className="text-white/50 text-[13px] font-medium">O nas</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-5">
                            <span className="text-white">Celovite IT rešitve </span>
                            <br />
                            <span className="text-white/50">pod eno streho!</span>
                        </h2>

                        {/* Description */}
                        <p className="text-white/[0.38] text-[15px] leading-[1.7] max-w-[460px] mb-8">
                            Pompex je dinamično podjetje, specializirano za celovite IT storitve — od sistemske podpore in razvoja programskih rešitev do izdelave spletnih platform in aplikacij.
                        </p>

                        {/* Divider */}
                        <div className="w-16 h-px bg-white/[0.08] mb-8" />

                        {/* Check items */}
                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-white/70 text-[15px]">Računalniški servis, programiranje in razvoj.</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-white/70 text-[15px]">Spletne strani in aplikacije po meri.</span>
                            </div>
                        </div>

                        {/* CTA + rating */}
                        <div className="flex flex-wrap items-center gap-6">
                            <Button
                                asChild
                                className="bg-blue-600 hover:bg-blue-500 text-white border-0 h-11 px-7 text-[15px] font-semibold">
                                <Link href="#o-nas">
                                    Več o Pompex
                                </Link>
                            </Button>

                            <div>
                                <div className="flex gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-white text-white" />
                                    ))}
                                </div>
                                <p className="text-white/30 text-[13px]">Zaupanje strank</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
