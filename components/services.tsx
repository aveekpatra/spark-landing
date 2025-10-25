'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Monitor, Code, Globe, Smartphone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/ui/border-beam'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: '/min/Close-Up Motherboard View-min.png',
            alt: 'Computer service and hardware repair',
        },
        'item-2': {
            image: '/min/Coding Workspace Close-Up-min.png',
            alt: 'Programming and development workspace',
        },
        'item-3': {
            image: '/min/Cozy Café Workstation-min.png',
            alt: 'Website development workspace',
        },
        'item-4': {
            image: '/min/Hand Holding Smartphone-min.png',
            alt: 'Mobile application development',
        },
    }

    return (
        <section className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="font-['Comfortaa'] text-balance text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Naše storitve</h2>
                    <p className="font-['Comfortaa'] text-base leading-7 text-gray-600 dark:text-gray-300">Spark Service ponuja celovite IT rešitve - od računalniškega servisa do razvoja spletnih strani in aplikacij. Vse na enem mestu.</p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base font-['Comfortaa']">
                                    <Monitor className="size-4" />
                                    Računalniški servis
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="font-['Comfortaa']">Popravila, čiščenje, diagnostika in reševanje podatkov. Poskrbimo za vaš računalnik in ga pripravimo za nemoteno delovanje.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base font-['Comfortaa']">
                                    <Code className="size-4" />
                                    Programiranje
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="font-['Comfortaa']">Skripte, avtomatizacija in razvoj po meri. Ustvarjamo programske rešitve, ki olajšajo vaše vsakodnevne naloge.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base font-['Comfortaa']">
                                    <Globe className="size-4" />
                                    Spletne strani
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="font-['Comfortaa']">WordPress, SEO, hitrost in dizajn. Izdelujemo moderne spletne strani, ki so hitro naložene in optimizirane za iskalnike.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base font-['Comfortaa']">
                                    <Smartphone className="size-4" />
                                    Aplikacije
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="font-['Comfortaa']">Mobilne in spletne aplikacije z odličnim UX/UI. Razvijamo uporabniško prijazne aplikacije za različne platforme.</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
