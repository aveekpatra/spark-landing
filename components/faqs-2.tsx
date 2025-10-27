'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
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
            answer: 'Seveda! Poskrbimo za redno vzdrževanje vaše spletne strani, kar vključuje posodobitve, varnostne kopije, optimizacijo hitrosti in tehnično podporo. Vzdrževanje lahko uredimo mesečno, letno ali po potrebi, na voljo pa so tudi različni paketi, ki so ugodnejši in prilagojeni vašim potrebam.',
        },
        {
            id: 'item-5',
            question: 'Kako poteka razvoj aplikacije?',
            answer: 'Proces začnemo z analizo potreb, nato pripravimo dizajn in prototip. Sledi razvoj, testiranje in objava. Ves čas vas obveščamo o napredku in vključujemo v odločitve.',
        },
        {
            id: 'item-6',
            question: 'Ali opravite tudi celostno grafično podobo (CGP)?',
            answer: 'Da, po dogovoru poskrbimo tudi za celostno grafično podobo. V primeru, da stranka še nima svoje grafične podobe ali ideje, imamo v ekipi kader, ki se s tem ukvarja. Skupaj z našim oblikovalcem se usedemo, dogovorimo podrobnosti ter oblikujemo in lansiramo celostno vizualno podobo, popolnoma prilagojeno potrebam in slogu podjetja.',
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
                            href="#kontakt"
                            className="font-sans text-primary font-medium hover:underline">
                            podporo
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
