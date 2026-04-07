'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Storitve', href: '#storitve' },
    { name: 'Kontakt', href: '#kontakt' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <header>
            <nav className="fixed z-50 w-full bg-[#0a0f1f]/60 backdrop-blur-2xl border-b border-white/[0.06]">
                <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Left: Logo + separator + nav */}
                        <div className="flex items-center">
                            <Link href="/" aria-label="home" className="flex items-center shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Pompex"
                                    width={200}
                                    height={56}
                                    className="h-14 w-auto"
                                />
                            </Link>

                            <div className="hidden lg:block h-6 w-px bg-white/20 mx-8" />

                            <ul className="hidden lg:flex items-center gap-8">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white/60 hover:text-white text-[16px] font-medium transition-colors duration-200">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: CTA */}
                        <div className="hidden lg:block">
                            <Button
                                asChild
                                className="bg-blue-600 hover:bg-blue-500 text-white border-0 h-11 px-6 text-[15px] font-semibold">
                                <Link href="#kontakt">
                                    Začni zdaj
                                </Link>
                            </Button>
                        </div>

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            className="relative z-60 block cursor-pointer p-2 lg:hidden">
                            <Menu className={cn("size-6 text-white transition-all duration-200", menuState && "rotate-180 scale-0 opacity-0")} />
                            <X className={cn("absolute inset-0 m-auto size-6 text-white -rotate-180 scale-0 opacity-0 transition-all duration-200", menuState && "rotate-0 scale-100 opacity-100")} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu — full-screen panel matching site theme */}
            <div
                className={cn(
                    "fixed inset-0 z-40 lg:hidden transition-all duration-300",
                    menuState ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-[#080B16]/85 backdrop-blur-xl" />

                {/* Ambient glow to match the rest of the site */}
                <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[800px] pointer-events-none rotate-[20deg] bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.10)_40%,rgba(59,130,246,0.16)_50%,rgba(37,99,235,0.10)_60%,transparent_100%)] blur-[90px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[800px] pointer-events-none rotate-[-25deg] bg-[linear-gradient(180deg,transparent_0%,rgba(99,102,241,0.08)_40%,rgba(79,70,229,0.14)_50%,rgba(99,102,241,0.08)_60%,transparent_100%)] blur-[90px]" />

                {/* Content */}
                <div
                    className={cn(
                        "relative h-full flex flex-col px-6 pt-[88px] pb-10 transition-all duration-300",
                        menuState ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    )}
                >
                    <ul className="flex flex-col gap-1 mt-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMenuState(false)}
                                    className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] px-5 py-4 transition-all duration-200"
                                >
                                    <span className="text-white text-[18px] font-semibold tracking-tight">
                                        {item.name}
                                    </span>
                                    <span className="text-white/30 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA pinned near bottom */}
                    <div className="mt-auto pt-8">
                        <div className="rounded-[20px] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.01] p-[1px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                            <div className="rounded-[19px] bg-[#0a0e1a] p-5">
                                <p className="text-white/50 text-[13px] mb-3 leading-[1.5]">
                                    Pripravljeni za sodelovanje?
                                </p>
                                <Button
                                    asChild
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white border-0 h-12 text-[15px] font-semibold"
                                >
                                    <Link href="#kontakt" onClick={() => setMenuState(false)}>
                                        Začni zdaj
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <p className="text-center text-white/30 text-[12px] mt-5">
                            Pompex · IT rešitve na enem mestu
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
