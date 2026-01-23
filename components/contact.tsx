'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
    // const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0]
    //     if (file) {
    //         setSelectedFile(file)
    //     }
    // }

    // const removeFile = () => {
    //     setSelectedFile(null)
    //     // Reset the input value
    //     const fileInput = document.getElementById('photo') as HTMLInputElement
    //     if (fileInput) {
    //         fileInput.value = ''
    //     }
    // }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setMessage(null)

        const form = event.currentTarget
        const formData = new FormData(form)

        // Prepare template parameters
        const templateParams = {
            from_name: `${formData.get('given-name')} ${formData.get('family-name')}`,
            from_email: formData.get('email'),
            phone: formData.get('tel') || 'Ni podano',
            service: formData.get('service') || 'Ni izbrano',
            message: formData.get('message') || 'Ni sporočila',
            to_name: 'Spark Service',
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )

            setMessage({ type: 'success', text: 'Sporočilo je bilo uspešno poslano!' })
            form.reset()
            // setSelectedFile(null)
        } catch (error) {
            console.error('EmailJS error:', error)
            setMessage({ type: 'error', text: 'Prišlo je do napake. Poskusite znova.' })
        } finally {
            setIsLoading(false)
        }
    }
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
                            <p className="mt-3 text-sm font-['Comfortaa']">068 653 596</p>
                            <p className="mt-1 text-sm text-muted-foreground font-['Comfortaa']">Kranj, Slovenija</p>
                            <div className="mt-4 flex gap-4">
                                <Link
                                    href="https://www.facebook.com/share/1BkHCcVdgz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    <svg
                                        className="size-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/sparkservicekranj?igsh=bXExazRwM3JvYXds"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    <svg
                                        className="size-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                                    </svg>
                                </Link>
                            </div>
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
                    onSubmit={handleSubmit}
                    className="border px-4 py-12 lg:px-0 lg:py-24"
                    autoComplete="on">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold font-['Comfortaa']">Pošljite povpraševanje</h3>
                        <p className="mt-4 text-sm font-['Comfortaa']">Stopite v stik z nami! Radi bi izvedeli več o vaših potrebah in kako vam lahko pomagamo.</p>

                        {message && (
                            <div className={`mt-4 p-4 rounded-md ${message.type === 'success'
                                    ? 'bg-green-50 text-green-800 border border-green-200'
                                    : 'bg-red-50 text-red-800 border border-red-200'
                                }`}>
                                {message.text}
                            </div>
                        )}

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
                                        name="given-name"
                                        autoComplete="given-name"
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
                                        name="family-name"
                                        autoComplete="family-name"
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
                                    name="email"
                                    autoComplete="email"
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
                                    name="tel"
                                    autoComplete="tel"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="service"
                                    className="space-y-2 font-['Comfortaa']">
                                    Kaj vas zanima?
                                </Label>
                                <Select name="service">
                                    <SelectTrigger id="service" className="w-full">
                                        <SelectValue placeholder="Izberite storitev" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="website">Razvoj spletnih strani</SelectItem>
                                        <SelectItem value="app">Razvoj aplikacij</SelectItem>
                                        <SelectItem value="programming">Programiranje & skripte</SelectItem>
                                        <SelectItem value="ecommerce">Razvoj spletnih trgovin</SelectItem>
                                        <SelectItem value="cgp">Izdelava CGP</SelectItem>
                                        <SelectItem value="remote">Oddaljena pomoč</SelectItem>
                                        <SelectItem value="computer-order">Naročilo računalnika</SelectItem>
                                        <SelectItem value="it-consulting">IT svetovanje</SelectItem>
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
                                    name="message"
                                    rows={4}
                                    placeholder="Opišite vaše potrebe ali vprašanja..."
                                    autoComplete="off"
                                />
                            </div>
                            {/* File upload section temporarily hidden
                            <div>
                                <Label
                                    htmlFor="photo"
                                    className="space-y-2 font-['Comfortaa']">
                                    Priložite fotografijo (neobvezno)
                                </Label>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="photo"
                                            name="photo"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <Button
                                             type="button"
                                             variant="outline"
                                             className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 border-0 rounded-md font-medium text-sm"
                                         >
                                             Naloži datoteko...
                                         </Button>
                                    </div>
                                    {selectedFile && (
                                        <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                                <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                                    <span className="text-sm font-['Comfortaa'] truncate">
                                                        {selectedFile.name}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                                                        ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                                                    </span>
                                                </div>
                                            </div>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={removeFile}
                                                className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive flex-shrink-0 ml-3"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </Button>
                                        </div>
                                    )}
                                    <p className="text-xs text-muted-foreground font-['Comfortaa']">
                                        Podprte so slike (JPG, PNG, GIF). Maksimalna velikost: 10MB
                                    </p>
                                </div>
                            </div>
                            */}
                            <Button type="submit" className="w-full font-['Comfortaa']" disabled={isLoading}>
                                {isLoading ? 'Pošiljam...' : 'Pošlji'}
                            </Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}
