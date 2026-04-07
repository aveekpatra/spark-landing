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

                    {/* Animated fluid gradient blobs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Blob 1 — deep blue */}
                        <motion.div
                            className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-80 mix-blend-screen"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.55) 0%, rgba(37,99,235,0.25) 35%, rgba(37,99,235,0) 70%)',
                                filter: 'blur(80px)',
                            }}
                            animate={{
                                x: ['0%', '25%', '-10%', '15%', '0%'],
                                y: ['0%', '15%', '30%', '10%', '0%'],
                                scale: [1, 1.15, 0.95, 1.1, 1],
                            }}
                            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        {/* Blob 2 — indigo / violet */}
                        <motion.div
                            className="absolute top-[10%] -right-[15%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full opacity-75 mix-blend-screen"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(129,140,248,0.50) 0%, rgba(99,102,241,0.22) 35%, rgba(99,102,241,0) 70%)',
                                filter: 'blur(90px)',
                            }}
                            animate={{
                                x: ['0%', '-20%', '10%', '-15%', '0%'],
                                y: ['0%', '20%', '5%', '25%', '0%'],
                                scale: [1, 0.9, 1.2, 1.05, 1],
                            }}
                            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        {/* Blob 3 — cyan accent */}
                        <motion.div
                            className="absolute top-[40%] left-[20%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full opacity-70 mix-blend-screen"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.40) 0%, rgba(14,165,233,0.18) 35%, rgba(14,165,233,0) 70%)',
                                filter: 'blur(100px)',
                            }}
                            animate={{
                                x: ['0%', '30%', '-15%', '20%', '0%'],
                                y: ['0%', '-20%', '10%', '-10%', '0%'],
                                scale: [1, 1.2, 0.85, 1.1, 1],
                            }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        {/* Blob 4 — magenta highlight */}
                        <motion.div
                            className="absolute -bottom-[20%] right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full opacity-65 mix-blend-screen"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.45) 0%, rgba(139,92,246,0.20) 35%, rgba(139,92,246,0) 70%)',
                                filter: 'blur(95px)',
                            }}
                            animate={{
                                x: ['0%', '-25%', '15%', '-10%', '0%'],
                                y: ['0%', '-15%', '-30%', '-5%', '0%'],
                                scale: [1, 1.1, 0.9, 1.15, 1],
                            }}
                            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        {/* Subtle top sheen */}
                        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-blue-600/[0.10] to-transparent" />

                        {/* Grain/contrast layer to keep text readable */}
                        <div className="absolute inset-0 bg-[#080B16]/30" />
                    </div>

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
