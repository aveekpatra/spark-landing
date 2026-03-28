'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { motion } from 'motion/react'

const fadeUp = {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main>
                <section className="relative min-h-screen">

                    {/* Light streaks */}
                    <div className="absolute top-[-20%] left-[10%] w-[600px] h-[1200px] pointer-events-none rotate-[-25deg] bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.12)_30%,rgba(59,130,246,0.20)_50%,rgba(37,99,235,0.12)_70%,transparent_100%)] blur-[80px]" />
                    <div className="absolute top-[-10%] right-[5%] w-[400px] h-[1000px] pointer-events-none rotate-[15deg] bg-[linear-gradient(180deg,transparent_0%,rgba(99,102,241,0.08)_30%,rgba(79,70,229,0.14)_50%,rgba(99,102,241,0.08)_70%,transparent_100%)] blur-[100px]" />
                    <div className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none bg-gradient-to-b from-blue-600/[0.10] to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-10 min-h-screen flex flex-col">

                        <div className="h-[72px] shrink-0" />

                        {/* Centred content */}
                        <div className="flex-1 flex items-center py-12 lg:py-0">
                            <div className="max-w-[750px]">
                                {/* Badge */}
                                <AnimatedGroup
                                    variants={{
                                        container: { visible: { transition: { delayChildren: 0.1 } } },
                                        item: fadeUp,
                                    }}>
                                    <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full pl-1.5 pr-4 py-1 mb-8">
                                        <span className="bg-blue-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                            Novo
                                        </span>
                                        <span className="text-white/50 text-[13px] font-medium">
                                            IT rešitve na enem mestu
                                        </span>
                                    </div>
                                </AnimatedGroup>

                                {/* Heading */}
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    per="line"
                                    className="font-sans text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[1.12] tracking-[-0.025em] mb-6"
                                    segmentClassName="gradient-text">
                                    Vaš zanesljiv partner za digitalne rešitve.
                                </TextEffect>

                                {/* Subtitle */}
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="font-sans text-white/[0.45] text-[16px] leading-[1.7] max-w-[480px] mb-10">
                                    Računalniški servis, programiranje, spletne strani in aplikacije — vse na enem mestu.
                                </TextEffect>

                                {/* Buttons */}
                                <AnimatedGroup
                                    variants={{
                                        container: { visible: { transition: { staggerChildren: 0.06, delayChildren: 0.75 } } },
                                        item: fadeUp,
                                    }}
                                    className="flex flex-wrap gap-3">
                                    <Button
                                        asChild
                                        className="bg-white text-[#080B16] hover:bg-white/90 font-semibold border-0 h-[46px] px-7 text-[15px]">
                                        <Link href="#kontakt">
                                            Pošlji povpraševanje
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-white/[0.12] text-white hover:bg-white/[0.04] hover:text-white font-semibold h-[46px] px-7 text-[15px]">
                                        <Link href="tel:068653596">
                                            Pokliči nas
                                        </Link>
                                    </Button>
                                </AnimatedGroup>

                                {/* Partner logos */}
                                <AnimatedGroup
                                    variants={{
                                        container: { visible: { transition: { staggerChildren: 0.08, delayChildren: 1 } } },
                                        item: fadeUp,
                                    }}
                                    className="flex items-center gap-10 mt-14">
                                    <img className="h-7 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" src="/companies/kranfix.png" alt="KranFix" />
                                    <img className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" src="/companies/Techtrade.png" alt="Tech Trade" />
                                    <img className="h-7 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" src="/companies/gamenight-logo.png" alt="Game Night" />
                                </AnimatedGroup>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}
