'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'motion/react'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Marko Novak',
        role: 'Lastnik podjetja',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        quote: 'Spark Service mi je rešil računalnik v rekordnem času. Profesionalna storitev in odličen pristop!',
    },
    {
        name: 'Ana Kovač',
        role: 'Freelancer',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'Potrebovala sem spletno stran za svoj posel. Ekipa Spark Service je naredila čudovito stran, ki je hitro naložena in SEO optimizirana.',
    },
    {
        name: 'Janez Horvat',
        role: 'IT Manager',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        quote: 'Avtomatizacija procesov, ki so jo naredili, nam je prihranila ogromno časa. Priporočam vsem!',
    },
    {
        name: 'Petra Kovač',
        role: 'Podjetnica',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        quote: 'Mobilna aplikacija za moj salon je presegla vsa pričakovanja. Stranke so navdušene nad enostavnostjo uporabe.',
    },
    {
        name: 'Luka Krajnc',
        role: 'Razvijalec',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        quote: 'Spark Service ponuja vse IT rešitve na enem mestu. Od popravila računalnika do razvoja aplikacij - vse je na najvišji ravni.',
    },
    {
        name: 'Maja Vidmar',
        role: 'Marketing Manager',
        image: 'https://randomuser.me/api/portraits/women/85.jpg',
        quote: 'WordPress stran, ki so jo ustvarili, je popolnoma odzivna in enostavna za upravljanje. Odličen dizajn!',
    },
    {
        name: 'Tomaž Golob',
        role: 'Startup Founder',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        quote: 'Potreboval sem hitro in zanesljivo tehnično podporo. Spark Service je postal moj glavni partner za vse IT zadeve.',
    },
    {
        name: 'Nina Turk',
        role: 'Oblikovalka',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
        quote: 'UX/UI dizajn aplikacije je fantastičen. Uporabniki so navdušeni nad intuitivnostjo in lepoto vmesnika.',
    },
    {
        name: 'Miha Podjetnik',
        role: 'CEO',
        image: 'https://randomuser.me/api/portraits/men/83.jpg',
        quote: 'Spark Service je rešil naše IT težave in nam omogočil, da se osredotočimo na naš glavni posel. Hvala!',
    },
    {
        name: 'Sara Božič',
        role: 'Freelance Writer',
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        quote: 'Diagnostika in čiščenje računalnika sta bila opravljena strokovno. Računalnik zdaj deluje kot nov!',
    },
    {
        name: 'David Kralj',
        role: 'System Administrator',
        image: 'https://randomuser.me/api/portraits/men/18.jpg',
        quote: 'Reševanje podatkov z okvarjenega diska je bilo uspešno. Profesionalen pristop in hitra rešitev problema.',
    },
    {
        name: 'Eva Zupan',
        role: 'Business Owner',
        image: 'https://randomuser.me/api/portraits/women/67.jpg',
        quote: 'Spark Service je zanesljiv partner za vse digitalne rešitve. Priporočam vsem, ki iščejo kakovostne IT storitve.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

// Create duplicated chunks for seamless scrolling
const createScrollingChunks = (chunks: Testimonial[][]) => {
    return chunks.map(chunk => [...chunk, ...chunk])
}

const scrollingChunks = createScrollingChunks(testimonialChunks)

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card className="mb-3">
        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
            <Avatar className="size-9">
                <AvatarImage
                    alt={testimonial.name}
                    src={testimonial.image}
                    loading="lazy"
                    width="120"
                    height="120"
                />
                <AvatarFallback>ST</AvatarFallback>
            </Avatar>

            <div>
                <h3 className="font-['Comfortaa'] font-medium">{testimonial.name}</h3>
                <span className="text-muted-foreground block text-sm tracking-wide font-['Comfortaa']">{testimonial.role}</span>
                <blockquote className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300 font-['Comfortaa']">{testimonial.quote}</p>
                </blockquote>
            </div>
        </CardContent>
    </Card>
)

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-['Comfortaa'] text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Zadovoljne stranke
                        </h2>
                        <p className="mt-2 font-['Comfortaa'] text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Mnenja naših strank o kakovosti storitev Spark Service.
                        </p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 overflow-hidden">
                        {scrollingChunks.map((chunk, chunkIndex) => {
                            // First and third columns scroll down (top to bottom)
                            // Second column scrolls up (bottom to top)
                            const isReverse = chunkIndex === 1
                            const duration = 30 + chunkIndex * 5 // Slightly different speeds for variety
                            
                            return (
                                <div
                                    key={chunkIndex}
                                    className={`relative overflow-hidden ${chunkIndex === 0 || chunkIndex === 2 ? 'hidden lg:block' : ''}`}
                                    style={{ height: '600px' }} // Fixed height for overflow
                                >
                                    <motion.div
                                        className="flex flex-col"
                                        animate={{
                                            y: isReverse ? ['0%', '-50%'] : ['-50%', '0%']
                                        }}
                                        transition={{
                                            duration: duration,
                                            repeat: Infinity,
                                            ease: 'linear',
                                            repeatType: 'loop'
                                        }}
                                    >
                                        {chunk.map((testimonial, index) => (
                                            <TestimonialCard 
                                                key={`${chunkIndex}-${index}`} 
                                                testimonial={testimonial} 
                                            />
                                        ))}
                                    </motion.div>
                                    
                                    {/* Top blur gradient */}
                                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80 dark:to-transparent pointer-events-none z-10" />
                                    
                                    {/* Bottom blur gradient */}
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80 dark:to-transparent pointer-events-none z-10" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
