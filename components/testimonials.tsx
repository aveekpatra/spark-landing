import { Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Testimonial = {
    name: string
    role: string
    company: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Marko Novak',
        role: 'Lastnik podjetja',
        company: 'Innovate Solutions',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        quote: 'Pompex mi je rešil računalnik v rekordnem času. Profesionalna storitev in odličen pristop!',
    },
    {
        name: 'Ana Kovač',
        role: 'Freelancer',
        company: 'Nexus Digital',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'Potrebovala sem spletno stran za svoj posel. Ekipa Pompex je naredila čudovito stran, ki je hitro naložena in SEO optimizirana.',
    },
    {
        name: 'Janez Horvat',
        role: 'IT Manager',
        company: 'GreenLeaf Enterprises',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        quote: 'Avtomatizacija procesov, ki so jo naredili, nam je prihranila ogromno časa. Priporočam vsem!',
    },
    {
        name: 'Petra Kovač',
        role: 'Podjetnica',
        company: 'PixelWorks Studio',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        quote: 'Mobilna aplikacija za moj salon je presegla vsa pričakovanja. Stranke so navdušene nad enostavnostjo uporabe.',
    },
    {
        name: 'Luka Krajnc',
        role: 'Razvijalec',
        company: 'Mandro Designs',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        quote: 'Pompex ponuja vse IT rešitve na enem mestu. Od popravila računalnika do razvoja aplikacij - vse je na najvišji ravni.',
    },
    {
        name: 'Maja Vidmar',
        role: 'Marketing Manager',
        company: 'Fusion Studios',
        image: 'https://randomuser.me/api/portraits/women/85.jpg',
        quote: 'WordPress stran, ki so jo ustvarili, je popolnoma odzivna in enostavna za upravljanje. Odličen dizajn!',
    },
]

function Stars() {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
            ))}
        </div>
    )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between hover:bg-white/[0.05] transition-colors duration-200">
            {/* Top: avatar + stars */}
            <div>
                <div className="flex items-start justify-between mb-4">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                    />
                </div>

                <Stars />

                {/* Quote */}
                <p className="text-white/40 text-[14px] leading-[1.7] mt-4">
                    &ldquo;{testimonial.quote}&rdquo;
                </p>
            </div>

            {/* Bottom: name & role */}
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-white text-[14px] font-semibold">
                    {testimonial.name}
                    <span className="text-white/30 font-normal mx-2">&middot;</span>
                    <span className="text-white/50 font-normal">{testimonial.role}</span>
                </p>
                <p className="text-white/30 text-[13px] mt-0.5">{testimonial.company}</p>
            </div>
        </div>
    )
}

export default function WallOfLoveSection() {
    return (
        <section className="relative py-24 md:py-32 font-sans">
            <div className="absolute top-[-15%] left-[20%] w-[400px] h-[1000px] pointer-events-none rotate-[-20deg] bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.06)_35%,rgba(59,130,246,0.10)_50%,rgba(37,99,235,0.06)_65%,transparent_100%)] blur-[90px]" />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4">
                        <span className="text-white">Zadovoljne stranke o </span>
                        <br className="hidden sm:block" />
                        <span className="text-white/50">kakovosti naših storitev.</span>
                    </h2>
                    <p className="text-white/35 text-[15px] leading-[1.7] max-w-lg mx-auto mb-8">
                        Mnenja naših strank o kakovosti storitev Pompex. Poglejte, kako smo jim pomagali doseči njihove cilje.
                    </p>

                    {/* Company logos */}
                    <div className="flex items-center justify-center gap-8 mb-8">
                        <img className="h-5 w-auto object-contain brightness-0 invert opacity-50" src="/companies/kranfix.png" alt="KranFix" />
                        <img className="h-5 w-auto object-contain opacity-50" src="/companies/Techtrade.png" alt="Tech Trade" />
                        <img className="h-5 w-auto object-contain brightness-0 invert opacity-50" src="/companies/gamenight-logo.png" alt="Game Night" />
                    </div>

                    <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-500 text-white border-0 h-11 px-7 text-[15px] font-semibold">
                        <Link href="#o-nas">
                            Več o Pompex
                        </Link>
                    </Button>
                </div>

                {/* Testimonial grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}
