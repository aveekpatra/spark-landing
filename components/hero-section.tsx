import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    container: {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-16 md:pt-24">
                        {/* Sky blue gradient background */}
                        <div
                            className="absolute inset-x-0 top-0 h-full pointer-events-none -z-10 sky-gradient-light"
                        />
                        {/* Sky blue gradient background for dark mode */}
                        <div
                            className="absolute inset-x-0 top-0 h-full pointer-events-none -z-10 dark:block hidden sky-gradient-dark"
                        />


                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    per="line"
                                    className="font-sans mx-auto mt-6 max-w-4xl text-balance leading-[1.15] text-5xl max-md:font-semibold md:text-7xl lg:mt-12 xl:text-[5.25rem]"
                                    segmentClassName="gradient-text">
                                    Vaš zanesljiv partner za digitalne rešitve
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="font-sans mx-auto mt-6 max-w-2xl text-balance text-lg">
                                    Računalniški servis, programiranje, spletne strani in aplikacije - vse na enem mestu.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        item: transitionVariants.item,
                                    }}
                                    className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-full border p-1">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-full px-6 text-base">
                                            <Link href="#kontakt">
                                                <span className="text-nowrap">Pošlji povpraševanje</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-11 rounded-full px-6">
                                        <Link href="#kontakt">
                                            <span className="text-nowrap">Pokliči nas</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                item: transitionVariants.item,
                            }}>
                            <div className="mask-b-from-55% relative mt-6 overflow-hidden px-1 sm:mt-8 md:mt-14">
                                <div className="inset-shadow-2xs  dark:inset-shadow-white/20 bg-background relative mx-auto max-w-xs overflow-hidden rounded-xl border p-1 shadow-lg shadow-zinc-950/15 sm:max-w-lg sm:rounded-2xl sm:p-2 md:max-w-2xl md:p-3 lg:max-w-3xl xl:max-w-4xl">

                                    <Image
                                        className="bg-background z-2 aspect-video relative size-full object-cover rounded-xl sm:aspect-[4/3] sm:rounded-2xl md:aspect-15/8"
                                        src="/min/mydesk1-min.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-12 pt-12 md:pb-24">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="text-center mb-6">
                            <p className="text-sm text-accent-foreground font-medium font-['Comfortaa']">
                                Zaupajo nam
                            </p>
                        </div>
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Spoznajte naše stranke</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit object-contain"
                                    src="https://popravilotelefonov.si/wp-content/uploads/2022/08/kranfix.png"
                                    alt="Popravilo Telefonov Logo"
                                    height="64"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit object-contain"
                                    src="https://gamenight.si/wp-content/uploads/2022/09/cropped-gamenight-logo.png"
                                    alt="Game Night Logo"
                                    height="64"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit object-contain"
                                    src="https://www.techtrade.si/images/thumbs/0054977.png"
                                    alt="Tech Trade Logo"
                                    height="64"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
