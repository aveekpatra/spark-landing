import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Monitor, Code, Globe, Smartphone } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

export default function ServicesSection() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="font-sans text-balance text-3xl font-semibold md:text-4xl">Storitve</h2>
                        <p className="text-muted-foreground mt-6">Odkrijte naš celovit nabor storitev, prilagojenih vašim potrebam.</p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                        <ServiceCard
                            title="Računalniški servis"
                            description="Popravila, čiščenje, diagnostika in reševanje podatkov za vse vrste računalnikov.">
                            <Monitor className="h-12 w-12 text-primary" />
                        </ServiceCard>

                        <ServiceCard
                            title="Programiranje"
                            description="Skripte, avtomatizacija procesov in razvoj programskih rešitev po meri.">
                            <Code className="h-12 w-12 text-primary" />
                        </ServiceCard>

                        <ServiceCard
                            title="Spletne strani"
                            description="WordPress, SEO optimizacija, hitrost nalaganja in sodoben dizajn.">
                            <Globe className="h-12 w-12 text-primary" />
                        </ServiceCard>

                        <ServiceCard
                            title="Aplikacije"
                            description="Mobilne in spletne aplikacije z uporabniškim vmesnikom (UX/UI).">
                            <Smartphone className="h-12 w-12 text-primary" />
                        </ServiceCard>
                    </div>

                    <div className="mt-12 text-center">
                        <Button asChild size="lg">
                            <Link href="#contact">
                                Pošlji povpraševanje
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
const ServiceCard = ({ title, description, children, link = '#contact' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="p-6">
            <div className="relative">
                <div className="*:size-12">{children}</div>

                <div className="space-y-2 py-6">
                    <h3 className="font-sans text-base font-medium">{title}</h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none">
                        <Link href={link}>
                            Več informacij
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}
