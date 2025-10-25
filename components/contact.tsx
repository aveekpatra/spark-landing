import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="font-['Comfortaa'] mb-12 text-center text-4xl font-semibold lg:text-5xl">Kontakt</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="font-['Comfortaa'] mb-3 text-lg font-semibold">Kontaktni podatki</h2>
                            <Link
                                href="mailto:info@sparkservice.si"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400 font-['Comfortaa']">
                                info@sparkservice.si
                            </Link>
                            <p className="mt-3 text-sm font-['Comfortaa']">070 450 996</p>
                            <p className="mt-1 text-sm text-muted-foreground font-['Comfortaa']">Kranj, Slovenija</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="font-['Comfortaa'] mb-3 text-lg font-semibold">Lokacija</h3>
                            <p className="text-lg font-['Comfortaa']">Kranj</p>
                            <p className="mt-3 text-sm text-muted-foreground font-['Comfortaa']">Slovenija</p>
                            <p className="mt-1 text-sm text-muted-foreground font-['Comfortaa']">IT rešitve na enem mestu</p>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <form
                    action=""
                    className="border px-4 py-12 lg:px-0 lg:py-24">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold font-['Comfortaa']">Pošljite povpraševanje</h3>
                        <p className="mt-4 text-sm font-['Comfortaa']">Stopite v stik z nami! Radi bi izvedeli več o vaših potrebah in kako vam lahko pomagamo.</p>

                        <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <Label
                                        htmlFor="firstName"
                                        className="space-y-2 font-['Comfortaa']">
                                        Ime
                                    </Label>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="lastName"
                                        className="space-y-2 font-['Comfortaa']">
                                        Priimek
                                    </Label>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="space-y-2 font-['Comfortaa']">
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
                                    htmlFor="phone"
                                    className="space-y-2 font-['Comfortaa']">
                                    Telefon (neobvezno)
                                </Label>
                                <Input
                                    type="tel"
                                    id="phone"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="service"
                                    className="space-y-2 font-['Comfortaa']">
                                    Kaj vas zanima?
                                </Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Izberite storitev" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="website">Razvoj spletnih strani</SelectItem>
                                        <SelectItem value="app">Razvoj aplikacij</SelectItem>
                                        <SelectItem value="repair">Računalniški servis</SelectItem>
                                        <SelectItem value="other">Drugo</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="msg"
                                    className="space-y-2 font-['Comfortaa']">
                                    Sporočilo (neobvezno)
                                </Label>
                                <Textarea
                                    id="msg"
                                    rows={4}
                                    placeholder="Opišite vaše potrebe ali vprašanja..."
                                />
                            </div>
                            <Button className="w-full font-['Comfortaa']">Pošlji</Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}
