import { Monitor, Code, Globe, Smartphone } from 'lucide-react'

const services = [
    {
        icon: Monitor,
        image: '/custom-pc-build-nzxt.jpeg',
        title: 'Računalniški servis',
        description: 'Popravila, čiščenje, diagnostika in reševanje podatkov. Poskrbimo za vaš računalnik in ga pripravimo za nemoteno delovanje.',
    },
    {
        icon: Code,
        image: '/min/Coding Workspace Close-Up-min.png',
        title: 'Programiranje',
        description: 'Skripte, avtomatizacija in razvoj po meri. Ustvarjamo programske rešitve, ki olajšajo vaše vsakodnevne naloge.',
    },
    {
        icon: Globe,
        image: '/min/Cozy Cafe Workstation-min.png',
        title: 'Spletne strani',
        description: 'WordPress, SEO, hitrost in dizajn. Izdelujemo moderne spletne strani, ki so hitro naložene in optimizirane za iskalnike.',
    },
    {
        icon: Smartphone,
        image: '/min/Hand Holding Smartphone-min.png',
        title: 'Aplikacije',
        description: 'Mobilne in spletne aplikacije z odličnim UX/UI. Razvijamo uporabniško prijazne aplikacije za različne platforme.',
    },
]

export default function Features() {
    return (
        <section className="relative py-24 md:py-32 font-sans">
            <div className="absolute top-[-20%] left-[5%] w-[300px] h-[900px] pointer-events-none rotate-[-30deg] bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.06)_40%,rgba(59,130,246,0.09)_50%,rgba(37,99,235,0.06)_60%,transparent_100%)] blur-[80px]" />
            <div className="absolute bottom-[-25%] right-[15%] w-[250px] h-[800px] pointer-events-none rotate-[25deg] bg-[linear-gradient(180deg,transparent_0%,rgba(99,102,241,0.05)_40%,rgba(79,70,229,0.08)_50%,rgba(99,102,241,0.05)_60%,transparent_100%)] blur-[90px]" />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full pl-2.5 pr-4 py-1 mb-8">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-white/50 text-[13px] font-medium">Naše storitve</span>
                    </div>

                    <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] mb-5">
                        <span className="text-white">Ne samo popravimo. Gradimo. </span>
                        <br className="hidden sm:block" />
                        <span className="text-white/45">Če si zamislite, mi ustvarimo!</span>
                    </h2>

                    <p className="text-white/35 text-[15px] leading-[1.7] max-w-lg mx-auto">
                        Pompex ponuja celovite IT rešitve — od računalniškega servisa do razvoja spletnih strani in aplikacij.
                    </p>
                </div>

                {/* 2×2 grid — perfectly geometric */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] rounded-[24px] overflow-hidden bg-white/[0.06]">
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={i}
                                className="group relative bg-[#0a0e1a] overflow-hidden"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-indigo-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Image */}
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover block group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    {/* Image overlays for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/30 to-transparent pointer-events-none" />
                                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                                </div>

                                {/* Content */}
                                <div className="relative p-6 pt-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                            <Icon className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <h3 className="text-white text-[17px] font-semibold">{service.title}</h3>
                                    </div>
                                    <p className="text-white/30 text-[14px] leading-[1.7]">{service.description}</p>
                                </div>

                                {/* Inner edge highlights */}
                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
