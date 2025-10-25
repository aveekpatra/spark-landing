import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="font-sans mb-12 text-center text-4xl font-semibold lg:text-5xl">Kontakt</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="font-sans mb-3 text-lg font-semibold">Kontaktni podatki</h2>
                            <Link
                                href="mailto:info@sparkservice.si"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                info@sparkservice.si
                            </Link>
                            <p className="mt-3 text-sm">070 450 996</p>
                            <p className="mt-1 text-sm text-muted-foreground">Kranj, Slovenija</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="font-sans mb-3 text-lg font-semibold">Lokacija</h3>
                            <p className="text-lg">Kranj</p>
                            <p className="mt-3 text-sm text-muted-foreground">Slovenija</p>
                            <p className="mt-1 text-sm text-muted-foreground">IT rešitve na enem mestu</p>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <form
                    action=""
                    className="border px-4 py-12 lg:px-0 lg:py-24">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold">Pošljite povpraševanje</h3>
                        <p className="mt-4 text-sm">Stopite v stik z nami! Radi bi izvedeli več o vaših potrebah in kako vam lahko pomagamo.</p>

                        <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                            <div>
                                <Label
                                    htmlFor="name"
                                    className="space-y-2">
                                    Ime
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="space-y-2">
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="msg"
                                    className="space-y-2">
                                    Sporočilo
                                </Label>
                                <Textarea
                                    id="msg"
                                    rows={4}
                                    placeholder="Opišite vaše potrebe ali vprašanja..."
                                />
                            </div>
                            <Button className="w-full">Pošlji</Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}
