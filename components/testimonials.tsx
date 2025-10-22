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
        name: 'Jonathan Yombo',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.',
    },
    {
        name: 'Yves Kalume',
        role: 'GDE - Android',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        quote: 'With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Tailkits Creator',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'Great work on tailfolio template. This is one of the best personal website that I have seen so far :)',
    },
    {
        name: 'Anonymous author',
        role: 'Doing something',
        image: 'https://randomuser.me/api/portraits/men/8.jpg',
        quote: 'I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have. I downloaded the one of Tailus template which is very clear to understand at the start and you could modify the codes/blocks to fit perfectly on your purpose of the page.',
    },
    {
        name: 'Shekinah Tshiokufila',
        role: 'Senior Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        quote: 'Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it. I can only recommend this incredible wonder.',
    },
    {
        name: 'Oketa Fred',
        role: 'Fullstack Developer',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        quote: 'I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.',
    },
    {
        name: 'Zeki',
        role: 'Founder of ChatExtend',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        quote: "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
    },
    {
        name: 'Joseph Kitheka',
        role: 'Fullstack Developer',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        quote: 'Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development!',
    },
    {
        name: 'Khatab Wedaa',
        role: 'MerakiUI Creator',
        image: 'https://randomuser.me/api/portraits/men/10.jpg',
        quote: "Tailus is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project.",
    },
    {
        name: 'Rodrigo Aguilar',
        role: 'TailwindAwesome Creator',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        quote: 'I love Tailus ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.',
    },
    {
        name: 'Eric Ampire',
        role: 'Mobile Engineer at @BRPNews • @GoogleDevExpert for Android',
        image: 'https://randomuser.me/api/portraits/men/12.jpg',
        quote: 'Tailus templates are the perfect solution for anyone who wants to create a beautiful and functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Tailus templates to anyone who is looking to create a website.',
    },
    {
        name: 'Roland Tubonge',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
        quote: 'Tailus is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!',
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
                <h3 className="font-medium">{testimonial.name}</h3>
                <span className="text-muted-foreground block text-sm tracking-wide">{testimonial.role}</span>
                <blockquote className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300">{testimonial.quote}</p>
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
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Loved by the Community</h2>
                        <p className="mt-6">Harum quae dolore orrupti aut temporibus ariatur.</p>
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
                                    className="relative overflow-hidden"
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
