'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactSection() {
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setMessage(null)

        const form = event.currentTarget
        const formData = new FormData(form)

        const payload = {
            firstName: String(formData.get('given-name') || ''),
            lastName: String(formData.get('family-name') || ''),
            email: String(formData.get('email') || ''),
            phone: String(formData.get('tel') || ''),
            service: String(formData.get('service') || ''),
            message: String(formData.get('message') || ''),
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data?.error || 'Request failed')
            }

            setMessage({ type: 'success', text: 'Sporočilo je bilo uspešno poslano!' })
            form.reset()
        } catch (error) {
            console.error('Contact form error:', error)
            setMessage({ type: 'error', text: 'Prišlo je do napake. Poskusite znova.' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="relative py-24 md:py-32 font-sans">
            {/* Ambient glows — match site theme */}
            <div className="absolute top-[-15%] right-[8%] w-[320px] h-[900px] pointer-events-none rotate-[25deg] bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.07)_40%,rgba(59,130,246,0.10)_50%,rgba(37,99,235,0.07)_60%,transparent_100%)] blur-[90px]" />
            <div className="absolute bottom-[-20%] left-[5%] w-[280px] h-[800px] pointer-events-none rotate-[-25deg] bg-[linear-gradient(180deg,transparent_0%,rgba(99,102,241,0.06)_40%,rgba(79,70,229,0.09)_50%,rgba(99,102,241,0.06)_60%,transparent_100%)] blur-[90px]" />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full pl-2.5 pr-4 py-1 mb-8">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-white/50 text-[13px] font-medium">Kontakt</span>
                    </div>

                    <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] mb-5">
                        <span className="text-white">Stopite v stik. </span>
                        <br className="hidden sm:block" />
                        <span className="text-white/45">Pomagamo vam najti rešitev.</span>
                    </h2>

                    <p className="text-white/35 text-[15px] leading-[1.7] max-w-lg mx-auto">
                        Imate vprašanje ali povpraševanje? Pišite nam — odgovorimo hitro in brez obveznosti.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 items-stretch">

                    {/* Left — Contact info card */}
                    <div className="relative rounded-[20px] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.01] p-[1px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                        <div className="rounded-[19px] bg-[#0a0e1a] p-8 sm:p-10 h-full flex flex-col justify-between">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-white text-[18px] font-semibold mb-2">Kontaktni podatki</h3>
                                    <p className="text-white/35 text-[14px] leading-[1.6]">
                                        Na voljo smo vam vsak delovni dan.
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    <Link
                                        href="mailto:info@pompex.si"
                                        className="group flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:border-blue-400/30 transition-colors">
                                            <Mail className="w-[18px] h-[18px] text-blue-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-white/40 text-[12px] uppercase tracking-wider mb-0.5">Email</p>
                                            <p className="text-white/90 text-[14px] group-hover:text-blue-300 transition-colors break-all">info@pompex.si</p>
                                        </div>
                                    </Link>

                                    <Link href="tel:+38668653596" className="group flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:border-blue-400/30 transition-colors">
                                            <Phone className="w-[18px] h-[18px] text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-[12px] uppercase tracking-wider mb-0.5">Telefon</p>
                                            <p className="text-white/90 text-[14px] group-hover:text-blue-300 transition-colors">068 653 596</p>
                                        </div>
                                    </Link>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                            <MapPin className="w-[18px] h-[18px] text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-[12px] uppercase tracking-wider mb-0.5">Lokacija</p>
                                            <p className="text-white/90 text-[14px]">Kranj, Slovenija</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="mt-10 pt-8 border-t border-white/[0.06]">
                                <p className="text-white/40 text-[12px] uppercase tracking-wider mb-4">Sledite nam</p>
                                <div className="flex gap-3">
                                    <Link
                                        href="https://www.facebook.com/share/1BkHCcVdgz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-blue-300 hover:border-blue-400/30 transition-colors"
                                    >
                                        <svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/sparkservicekranj?igsh=bXExazRwM3JvYXds"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-blue-300 hover:border-blue-400/30 transition-colors"
                                    >
                                        <svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form card */}
                    <div className="relative rounded-[20px] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.01] p-[1px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                        <div className="rounded-[19px] bg-[#0a0e1a] p-8 sm:p-10">
                            <h3 className="text-white text-[18px] font-semibold mb-2">Pošljite povpraševanje</h3>
                            <p className="text-white/35 text-[14px] leading-[1.6] mb-8">
                                Izpolnite obrazec in odgovorimo v najkrajšem možnem času.
                            </p>

                            {message && (
                                <div
                                    className={`mb-6 flex items-start gap-3 rounded-xl border px-4 py-3 text-[14px] ${
                                        message.type === 'success'
                                            ? 'border-emerald-400/20 bg-emerald-500/[0.08] text-emerald-300'
                                            : 'border-red-400/20 bg-red-500/[0.08] text-red-300'
                                    }`}
                                >
                                    {message.type === 'success' ? (
                                        <CheckCircle2 className="w-[18px] h-[18px] shrink-0 mt-0.5" />
                                    ) : (
                                        <AlertCircle className="w-[18px] h-[18px] shrink-0 mt-0.5" />
                                    )}
                                    <span>{message.text}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} autoComplete="on" className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-white/70 text-[13px] font-medium">Ime</Label>
                                        <Input
                                            type="text"
                                            id="firstName"
                                            name="given-name"
                                            autoComplete="given-name"
                                            required
                                            className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:border-blue-400/40 focus-visible:ring-blue-400/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-white/70 text-[13px] font-medium">Priimek</Label>
                                        <Input
                                            type="text"
                                            id="lastName"
                                            name="family-name"
                                            autoComplete="family-name"
                                            required
                                            className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:border-blue-400/40 focus-visible:ring-blue-400/20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-white/70 text-[13px] font-medium">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:border-blue-400/40 focus-visible:ring-blue-400/20"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-white/70 text-[13px] font-medium">
                                        Telefon <span className="text-white/30">(neobvezno)</span>
                                    </Label>
                                    <Input
                                        type="tel"
                                        id="phone"
                                        name="tel"
                                        autoComplete="tel"
                                        className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:border-blue-400/40 focus-visible:ring-blue-400/20"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service" className="text-white/70 text-[13px] font-medium">Kaj vas zanima?</Label>
                                    <Select name="service">
                                        <SelectTrigger
                                            id="service"
                                            className="w-full bg-white/[0.03] border-white/[0.08] text-white data-[placeholder]:text-white/30 focus-visible:border-blue-400/40 focus-visible:ring-blue-400/20"
                                        >
                                            <SelectValue placeholder="Izberite storitev" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#0a0e1a] border-white/[0.08] text-white">
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

                                <div className="space-y-2">
                                    <Label htmlFor="msg" className="text-white/70 text-[13px] font-medium">
                                        Sporočilo <span className="text-white/30">(neobvezno)</span>
                                    </Label>
                                    <Textarea
                                        id="msg"
                                        name="message"
                                        rows={5}
                                        placeholder="Opišite vaše potrebe ali vprašanja..."
                                        autoComplete="off"
                                        className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:border-blue-400/40 focus-visible:ring-blue-400/20 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white border-0 text-[15px] font-semibold mt-2"
                                >
                                    {isLoading ? 'Pošiljam...' : 'Pošlji povpraševanje'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
