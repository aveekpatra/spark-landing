'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Koliko časa traja popravilo računalnika?',
            answer: 'Čas popravila je odvisen od težave. Enostavne popravke (čiščenje, namestitev programov) opravimo v 1-2 dneh, kompleksnejše težave pa lahko trajajo 3-5 dni. Vedno vas obvestimo o predvidenem času.',
        },
        {
            id: 'item-2',
            question: 'Ali ponujate garancijo na storitve?',
            answer: 'Da, na vse naše storitve dajemo garancijo. Za računalniški servis 30 dni, za spletne strani 6 mesecev brezplačne podpore, za aplikacije pa 3 mesece popravkov napak.',
        },
        {
            id: 'item-3',
            question: 'Koliko stane izdelava spletne strani?',
            answer: 'Cena je odvisna od zahtevnosti projekta. Enostavna predstavitvena stran stane od 300€, kompleksnejše spletne trgovine pa od 800€. Vedno pripravimo brezplačen predračun.',
        },
        {
            id: 'item-4',
            question: 'Ali nudite tudi vzdrževanje spletnih strani?',
            answer: 'Seveda! Ponujamo redne posodobitve, varnostne kopije, optimizacijo hitrosti in tehnično podporo. Vzdrževanje lahko dogovorimo mesečno ali po potrebi.',
        },
        {
            id: 'item-5',
            question: 'Kako poteka razvoj aplikacije?',
            answer: 'Proces začnemo z analizo potreb, nato pripravimo dizajn in prototip. Sledi razvoj, testiranje in objava. Ves čas vas obveščamo o napredku in vključujemo v odločitve.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="font-sans text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Pogosto zastavljena vprašanja</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Odgovori na najpogostejša vprašanja o naših storitvah, cenah in načinu dela.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Ne najdete odgovora na vaše vprašanje? Kontaktirajte našo{' '}
                        <Link
                            href="#contact"
                            className="font-sans text-primary font-medium hover:underline">
                            podporo
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
