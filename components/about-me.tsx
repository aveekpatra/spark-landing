import { Heart, Handshake, ShieldCheck } from 'lucide-react'

export default function AboutMe() {
    return (
        <section className="relative py-24 md:py-32 font-sans">
            {/* Ambient glow — mirrored from ContentSection so the two sections feel like a pair */}
            <div className="absolute top-[-20%] left-[8%] w-[350px] h-[1000px] pointer-events-none rotate-[-20deg] bg-[linear-gradient(180deg,transparent_0%,rgba(99,102,241,0.07)_40%,rgba(129,140,248,0.10)_50%,rgba(99,102,241,0.07)_60%,transparent_100%)] blur-[90px]" />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

                    {/* Left — Content */}
                    <div className="order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full pl-2.5 pr-4 py-1 mb-8">
                            <span className="w-2 h-2 rounded-full bg-white/60" />
                            <span className="text-white/50 text-[13px] font-medium">Spoznajte me</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-5">
                            <span className="text-white">Sem Gašper Pompe, </span>
                            <br />
                            <span className="text-white/50">lastnik Pompex-a.</span>
                        </h2>

                        {/* Description */}
                        <div className="space-y-5 text-white/[0.55] text-[15px] leading-[1.7] max-w-[520px] mb-10">
                            <p>
                                Kot podjetnik verjamem v pošteno delo, zanesljivost in profesionalen odnos do strank. Pri svojem delu se osredotočam na kakovost, hitro odzivnost in iskanje najboljših rešitev za vsako posamezno situacijo.
                            </p>
                            <p>
                                Pomembno mi je, da stranke vedo, da se lahko vedno zanesejo name, zato gradim poslovanje na zaupanju, odprti komunikaciji in dolgoročnem sodelovanju. Moj cilj ni le opravljena storitev, ampak zadovoljna stranka, ki se z veseljem vrne.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-16 h-px bg-white/[0.08] mb-8" />

                        {/* Value pillars */}
                        <div className="grid sm:grid-cols-3 gap-5">
                            <div className="flex flex-col gap-2">
                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                                    <ShieldCheck className="w-[18px] h-[18px] text-blue-400" />
                                </div>
                                <p className="text-white/80 text-[14px] font-semibold">Zanesljivost</p>
                                <p className="text-white/40 text-[13px] leading-[1.5]">Dogovori držijo, roki pa tudi.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                                    <Handshake className="w-[18px] h-[18px] text-blue-400" />
                                </div>
                                <p className="text-white/80 text-[14px] font-semibold">Zaupanje</p>
                                <p className="text-white/40 text-[13px] leading-[1.5]">Odprta in iskrena komunikacija.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                                    <Heart className="w-[18px] h-[18px] text-blue-400" />
                                </div>
                                <p className="text-white/80 text-[14px] font-semibold">Predanost</p>
                                <p className="text-white/40 text-[13px] leading-[1.5]">Zadovoljna stranka je cilj.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Portrait with premium frame */}
                    <div className="relative order-1 lg:order-2">
                        {/* Outer glow behind frame */}
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-blue-500/[0.06] blur-xl pointer-events-none" />

                        {/* Frame */}
                        <div className="relative rounded-[20px] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] p-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] max-w-[460px] mx-auto">
                            <div className="rounded-[16px] overflow-hidden shadow-[inset_0_2px_20px_rgba(0,0,0,0.4)]">
                                <img
                                    src="/gasper-photo.jpeg"
                                    alt="Gašper Pompe — lastnik Pompex"
                                    className="w-full aspect-[4/5] object-cover block"
                                    loading="lazy"
                                />
                            </div>

                            {/* Name plate overlay */}
                            <div className="absolute left-5 right-5 bottom-5 rounded-xl bg-black/50 backdrop-blur-md border border-white/[0.08] px-4 py-3 flex items-center justify-between">
                                <div>
                                    <p className="text-white text-[14px] font-semibold leading-tight">Gašper Pompe</p>
                                    <p className="text-white/50 text-[12px] leading-tight mt-0.5">Lastnik · Pompex</p>
                                </div>
                                <span className="text-white/40 text-[11px] uppercase tracking-wider">Kranj</span>
                            </div>
                        </div>

                        {/* Bottom edge reflection */}
                        <div className="absolute -bottom-1 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}
