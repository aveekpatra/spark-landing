import Link from 'next/link'
import React from 'react'
import { TextHoverEffect } from '@/components/text/text-hover-effect'

const links = [
    {
        title: 'Domov',
        href: '#domov',
    },
    {
        title: 'O nas',
        href: '#o-nas',
    },
    {
        title: 'Storitve',
        href: '#storitve',
    },
    {
        title: 'Kontakt',
        href: '#kontakt',
    },
]

export default function FooterSection() {
    return (
        <footer className="relative py-16 md:py-32 overflow-visible font-sans">
            {/* Sky blue gradient background */}
            <div
                className="absolute inset-x-0 top-0 h-full pointer-events-none -z-10"
                style={{
                    background: `linear-gradient(
                        to top,
                        #87CEEB 0%,
                        #ADD8E6 15%,
                        #B0E0E6 25%,
                        #C0E8F0 35%,
                        #D0F0FA 45%,
                        #E0F6FF 55%,
                        #F0FAFF 65%,
                        rgba(240, 248, 255, 0.8) 75%,
                        rgba(248, 252, 255, 0.6) 85%,
                        rgba(255, 255, 255, 0.3) 95%,
                        transparent 100%
                    )`
                } as React.CSSProperties}
            />
            {/* Sky blue gradient background for dark mode */}
            <div
                className="absolute inset-x-0 top-0 h-full pointer-events-none -z-10 dark:block hidden"
                style={{
                    background: `linear-gradient(
                        to top,
                        #4682B4 0%,
                        #5F9EA0 15%,
                        #6495ED 25%,
                        #7B68EE 35%,
                        #87CEEB 45%,
                        #B0C4DE 55%,
                        #D3D3D3 65%,
                        rgba(176, 196, 222, 0.6) 75%,
                        rgba(211, 211, 211, 0.4) 85%,
                        rgba(220, 220, 220, 0.2) 95%,
                        transparent 100%
                    )`
                } as React.CSSProperties}
            />
            <div className="mx-auto max-w-5xl px-6 relative z-10">
                <div className="w-full mb-8 flex items-center justify-center">
                    <TextHoverEffect
                        text="Spark Service"
                        duration={0.1}
                        className="mx-auto w-[90vw] max-w-4xl h-[110px] sm:h-[130px] md:h-[150px] lg:h-[170px] scale-90 sm:scale-100"
                    />
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm font-bold">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                        </svg>
                    </Link>
                    <Link
                        href="mailto:info@sparkservice.si"
                        aria-label="Email"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path>
                        </svg>
                    </Link>
                </div>
                <div className="text-center space-y-2 font-bold">
                    <p className="text-muted-foreground text-sm">© {new Date().getFullYear()}</p>
                    <p className="text-muted-foreground text-sm">Računalniški servis • Programiranje • Spletne strani • Aplikacije</p>
                    <p className="text-muted-foreground text-sm">info@sparkservice.si | 068 653 596</p>
                    <p className="text-muted-foreground text-sm">Kranj, Slovenija</p>
                    <p className="text-muted-foreground text-sm">Davčna številka: 93787880 • Matična številka: 9973770000</p>
                    <p className="text-muted-foreground text-sm font-medium">IT rešitve na enem mestu.</p>
                </div>
            </div>
        </footer>
    )
}
