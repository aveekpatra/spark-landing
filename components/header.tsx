'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'
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
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav className="fixed z-50 w-full px-2 font-sans">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'max-w-4xl bg-background/50 rounded-full border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span className="font-sans text-black text-lg md:text-xl font-bold leading-none">Spark Service</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-60 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className={cn("m-auto size-6 duration-200", menuState && "rotate-180 scale-0 opacity-0")} />
                                <X className={cn("absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200", menuState && "rotate-0 scale-100 opacity-100")} />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm font-semibold">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden lg:flex lg:w-fit lg:gap-6">
                            <Button
                                asChild
                                size="sm"
                                className="relative">
                                <Link href="#kontakt" className="flex items-center pr-13">
                                    <span>Začni</span>
                                    <div className="absolute right-2 flex items-center justify-center w-6 h-6 bg-white rounded-full">
                                        <ArrowUpRight className="h-3.5 w-3.5 text-black" />
                                    </div>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer - Completely separate from header */}
            <div className={cn(
                "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300 lg:hidden",
                menuState ? "opacity-100 visible" : "opacity-0 invisible"
            )}>
                <div className={cn(
                    "absolute top-20 left-2 right-2 mx-auto max-w-sm bg-background rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 transition-all duration-300",
                    menuState ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                )}>
                    <div className="space-y-6">
                        <ul className="space-y-6 text-base font-semibold">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuState(false)}
                                        className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 border-t">
                            <Button
                                asChild
                                size="sm"
                                className="relative w-full">
                                <Link href="#kontakt" onClick={() => setMenuState(false)} className="flex items-center justify-center pr-13">
                                    <span>Začni</span>
                                    <div className="absolute right-2 flex items-center justify-center w-6 h-6 bg-white rounded-full">
                                        <ArrowUpRight className="h-3.5 w-3.5 text-black" />
                                    </div>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
