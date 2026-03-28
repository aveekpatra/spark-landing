import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const pageLinks = [
    { title: 'Domov', href: '#domov' },
    { title: 'O nas', href: '#o-nas' },
    { title: 'Storitve', href: '#storitve' },
    { title: 'Kontakt', href: '#kontakt' },
]

const socialLinks = [
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/share/1BkHCcVdgz/',
        icon: (
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
        ),
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/sparkservicekranj?igsh=bXExazRwM3JvYXds',
        icon: (
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
            </svg>
        ),
    },
    {
        title: 'Email',
        href: 'mailto:info@pompex.si',
        icon: (
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
            </svg>
        ),
    },
]

export default function FooterSection() {
    return (
        <footer className="relative font-sans">
            {/* Top divider line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-10 pt-20 pb-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-20 pb-16">

                    {/* Left — Logo, description, contact */}
                    <div className="max-w-sm">
                        <Image
                            src="/logo.png"
                            alt="Pompex"
                            width={200}
                            height={56}
                            className="h-12 w-auto mb-6"
                        />
                        <p className="text-white/40 text-[15px] leading-[1.7] mb-6">
                            Računalniški servis, programiranje, spletne strani in aplikacije — IT rešitve na enem mestu.
                        </p>
                        <div className="space-y-2 text-[14px] text-white/50">
                            <p>info@pompex.si</p>
                            <p>068 653 596</p>
                            <p>Kranj, Slovenija</p>
                        </div>
                    </div>

                    {/* Center — Page links */}
                    <div>
                        <h4 className="text-white text-[14px] font-semibold uppercase tracking-wider mb-5">
                            Strani
                        </h4>
                        <ul className="space-y-3">
                            {pageLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-white/40 hover:text-white text-[15px] transition-colors duration-200">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — Social */}
                    <div>
                        <h4 className="text-white text-[14px] font-semibold uppercase tracking-wider mb-5">
                            Družbena omrežja
                        </h4>
                        <ul className="space-y-3">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.title}
                                        className="text-white/40 hover:text-white text-[15px] transition-colors duration-200 flex items-center gap-2.5">
                                        {link.icon}
                                        <span>{link.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-[13px]">
                        © {new Date().getFullYear()} Pompex. Vse pravice pridržane.
                    </p>
                    <div className="flex items-center gap-6 text-[13px]">
                        <Link href="/zasebnost" className="text-white/30 hover:text-white/60 transition-colors duration-200">
                            Zasebnost
                        </Link>
                        <span className="text-white/10">|</span>
                        <Link href="/pogoji-uporabe" className="text-white/30 hover:text-white/60 transition-colors duration-200">
                            Pogoji uporabe
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
