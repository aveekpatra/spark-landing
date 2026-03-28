'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const faqItems = [
    {
        id: 'item-1',
        question: 'Koliko časa traja popravilo računalnika?',
        answer: 'Čas popravila je odvisen od vrste težave. Enostavne posege (npr. čiščenje, namestitev programov) opravimo v 1–2 delovnih dneh. Pri zahtevnejših oz. kompleksnejših popravilih je rok lahko daljši, vendar največ do 14 dni. O predvidenem času popravila vas vedno obvestimo vnaprej.',
    },
    {
        id: 'item-2',
        question: 'Ali ponujate garancijo na storitve?',
        answer: 'Da, na vse naše storitve nudimo garancijo. Za računalniški servis velja 14-dnevna garancija, pod pogojem, da je priložen ali shranjen račun o opravljeni storitvi. Za spletne strani nudimo 3 mesece brezplačne podpore, za aplikacije pa 30 dni garancije za popravke napak.',
    },
    {
        id: 'item-3',
        question: 'Koliko stane izdelava spletne strani?',
        answer: 'Cena je vedno odvisna od zahtevnosti projekta in vaših želja. Vsako spletno stran oblikujemo individualno glede na vsebino, funkcionalnosti in vaš slog. Pred začetkom sodelovanja pripravimo brezplačen in neobvezujoč predračun, da točno veste, kaj prejmete.',
    },
    {
        id: 'item-4',
        question: 'Ali nudite tudi vzdrževanje spletnih strani?',
        answer: 'Seveda! Poskrbimo za redno vzdrževanje vaše spletne strani, kar vključuje posodobitve, varnostne kopije, optimizacijo hitrosti in tehnično podporo. Vzdrževanje lahko uredimo mesečno, letno ali po potrebi.',
    },
    {
        id: 'item-5',
        question: 'Kako poteka razvoj aplikacije?',
        answer: 'Proces začnemo z analizo potreb, nato pripravimo dizajn in prototip. Sledi razvoj, testiranje in objava. Ves čas vas obveščamo o napredku in vključujemo v odločitve.',
    },
    {
        id: 'item-6',
        question: 'Ali opravite tudi celostno grafično podobo (CGP)?',
        answer: 'Da, po dogovoru poskrbimo tudi za celostno grafično podobo. Skupaj z našim oblikovalcem oblikujemo in lansiramo celostno vizualno podobo, popolnoma prilagojeno potrebam in slogu podjetja.',
    },
]

function FAQItem({ item }: { item: typeof faqItems[0] }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden transition-colors duration-200 hover:bg-white/[0.05]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                aria-expanded={isOpen}
            >
                <span className="text-white text-[15px] font-medium">{item.question}</span>
                <div className="shrink-0 w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center">
                    {isOpen ? (
                        <Minus className="w-4 h-4 text-white/60" />
                    ) : (
                        <Plus className="w-4 h-4 text-white/60" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 text-white/40 text-[14px] leading-[1.7]">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQsTwo() {
    return (
        <section className="relative py-24 md:py-32 font-sans">
            <div className="absolute top-[-20%] right-[10%] w-[300px] h-[900px] pointer-events-none rotate-[15deg] bg-[linear-gradient(180deg,transparent_0%,rgba(99,102,241,0.05)_35%,rgba(79,70,229,0.08)_50%,rgba(99,102,241,0.05)_65%,transparent_100%)] blur-[80px]" />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
                    {/* Left — heading */}
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full pl-2.5 pr-4 py-1 mb-8">
                            <span className="w-2 h-2 rounded-full bg-white/60" />
                            <span className="text-white/50 text-[13px] font-medium uppercase tracking-wider">FAQ</span>
                        </div>

                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-5">
                            <span className="text-white">Pogosto </span>
                            <br />
                            <span className="text-white/50">zastavljena vprašanja</span>
                        </h2>

                        <p className="text-white/35 text-[15px] leading-[1.7] max-w-[380px]">
                            Odgovori na najpogostejša vprašanja o naših storitvah, cenah in načinu dela.
                        </p>
                    </div>

                    {/* Right — accordion cards */}
                    <div className="flex flex-col gap-3">
                        {faqItems.map((item) => (
                            <FAQItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
