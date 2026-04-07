import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type ContactPayload = {
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    service?: string
    message?: string
}

const SERVICE_LABELS: Record<string, string> = {
    website: 'Razvoj spletnih strani',
    app: 'Razvoj aplikacij',
    programming: 'Programiranje & skripte',
    ecommerce: 'Razvoj spletnih trgovin',
    cgp: 'Izdelava CGP',
    remote: 'Oddaljena pomoč',
    'computer-order': 'Naročilo računalnika',
    'it-consulting': 'IT svetovanje',
    repair: 'Računalniški servis',
    other: 'Drugo',
}

function escapeHtml(s: string) {
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
    let body: ContactPayload
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const firstName = (body.firstName || '').trim()
    const lastName = (body.lastName || '').trim()
    const email = (body.email || '').trim()
    const phone = (body.phone || '').trim()
    const service = (body.service || '').trim()
    const message = (body.message || '').trim()

    if (!firstName || !lastName || !email) {
        return NextResponse.json({ error: 'Manjkajoča obvezna polja.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: 'Neveljaven email naslov.' }, { status: 400 })
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.error('Missing SMTP env vars')
        return NextResponse.json({ error: 'Strežnik ni pravilno nastavljen.' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT || 465),
        secure: SMTP_SECURE ? SMTP_SECURE === 'true' : Number(SMTP_PORT || 465) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const fullName = `${firstName} ${lastName}`
    const serviceLabel = service ? SERVICE_LABELS[service] || service : 'Ni izbrano'

    const text =
        `Novo povpraševanje s spletne strani\n\n` +
        `Ime: ${fullName}\n` +
        `Email: ${email}\n` +
        `Telefon: ${phone || 'Ni podano'}\n` +
        `Storitev: ${serviceLabel}\n\n` +
        `Sporočilo:\n${message || 'Ni sporočila'}\n`

    const html =
        `<h2>Novo povpraševanje s spletne strani</h2>` +
        `<p><strong>Ime:</strong> ${escapeHtml(fullName)}</p>` +
        `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>` +
        `<p><strong>Telefon:</strong> ${escapeHtml(phone || 'Ni podano')}</p>` +
        `<p><strong>Storitev:</strong> ${escapeHtml(serviceLabel)}</p>` +
        `<p><strong>Sporočilo:</strong><br>${escapeHtml(message || 'Ni sporočila').replace(/\n/g, '<br>')}</p>`

    try {
        await transporter.sendMail({
            from: `"Spark Service – Spletni obrazec" <${SMTP_USER}>`,
            to: CONTACT_TO || SMTP_USER,
            replyTo: `"${fullName}" <${email}>`,
            subject: `Novo povpraševanje – ${fullName}`,
            text,
            html,
        })
        return NextResponse.json({ ok: true })
    } catch (err) {
        console.error('SMTP send failed:', err)
        return NextResponse.json({ error: 'Pošiljanje ni uspelo.' }, { status: 502 })
    }
}
