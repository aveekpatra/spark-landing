'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Domov', href: '#domov' },
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

            {/* Mobile Menu */}
            <div className={cn(
                "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden",
                menuState ? "opacity-100 visible" : "opacity-0 invisible"
            )}>
                <div className={cn(
                    "absolute top-20 left-4 right-4 mx-auto max-w-sm bg-[#0d1225] rounded-2xl border border-white/10 p-6 shadow-2xl transition-all duration-300",
                    menuState ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                )}>
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMenuState(false)}
                                    className="text-white/60 hover:text-white hover:bg-white/5 block px-4 py-3 rounded-lg text-[16px] font-medium transition-all duration-200">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <Button
                            asChild
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white border-0 h-11 text-[15px] font-semibold">
                            <Link href="#kontakt" onClick={() => setMenuState(false)}>
                                Začni zdaj
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
