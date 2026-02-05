'use client'

import { useId, useState, useRef } from 'react'
import { FadeIn } from '@/components/FadeIn'

// Contact details
const WHATSAPP_NUMBER = '244929048205'
const EMAIL_ADDRESS = 'geral@facul.ao'

function TextInput({
    label,
    ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    const id = useId()

    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                type="text"
                id={id}
                {...props}
                placeholder=" "
                className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
            >
                {label}
            </label>
        </div>
    )
}

function RadioInput({
    label,
    ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    return (
        <label className="flex gap-x-3">
            <input
                type="radio"
                {...props}
                className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            />
            <span className="text-base/6 text-neutral-950">{label}</span>
        </label>
    )
}

export function ContactFormEN() {
    const formRef = useRef<HTMLFormElement>(null)
    const [formValid, setFormValid] = useState(false)

    const interestLabels: Record<string, string> = {
        training: 'Training',
        consulting: 'Consulting',
        publishing: 'Publishing',
        other: 'Other',
    }

    function getFormData() {
        if (!formRef.current) return null
        const formData = new FormData(formRef.current)
        return {
            name: formData.get('name') as string || '',
            email: formData.get('email') as string || '',
            company: formData.get('company') as string || '',
            phone: formData.get('phone') as string || '',
            message: formData.get('message') as string || '',
            interest: formData.get('interest') as string || '',
        }
    }

    function buildMessage(data: ReturnType<typeof getFormData>) {
        if (!data) return ''
        const lines = [
            `*New contact message*`,
            ``,
            `*Name:* ${data.name}`,
            `*Email:* ${data.email}`,
        ]
        if (data.company) lines.push(`*Company:* ${data.company}`)
        if (data.phone) lines.push(`*Phone:* ${data.phone}`)
        if (data.interest) lines.push(`*Interest:* ${interestLabels[data.interest] || data.interest}`)
        lines.push(``, `*Message:*`, data.message)
        return lines.join('\n')
    }

    function handleWhatsApp() {
        const data = getFormData()
        if (!data || !data.name || !data.email || !data.message) {
            formRef.current?.reportValidity()
            return
        }
        const message = encodeURIComponent(buildMessage(data))
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    }

    function handleEmail() {
        const data = getFormData()
        if (!data || !data.name || !data.email || !data.message) {
            formRef.current?.reportValidity()
            return
        }
        const subject = encodeURIComponent(`Contact from ${data.name} - ${interestLabels[data.interest] || 'General'}`)
        const body = encodeURIComponent(buildMessage(data).replace(/\*/g, ''))
        window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`
    }

    function checkFormValidity() {
        if (formRef.current) {
            setFormValid(formRef.current.checkValidity())
        }
    }

    return (
        <FadeIn className="lg:order-last">
            <form ref={formRef} onChange={checkFormValidity} onSubmit={(e) => e.preventDefault()}>
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Contact Form
                </h2>
                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <TextInput label="Name" name="name" autoComplete="name" required />
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                    />
                    <TextInput
                        label="Company"
                        name="company"
                        autoComplete="organization"
                    />
                    <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
                    <TextInput label="Message" name="message" required />
                    <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                        <fieldset>
                            <legend className="text-base/6 text-neutral-500">Interest</legend>
                            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                <RadioInput label="Training" name="interest" value="training" />
                                <RadioInput label="Consulting" name="interest" value="consulting" />
                                <RadioInput label="Publishing" name="interest" value="publishing" />
                                <RadioInput label="Other" name="interest" value="other" />
                            </div>
                        </fieldset>
                    </div>
                </div>

                <p className="mt-6 text-sm text-neutral-600">
                    Choose your preferred way to contact us:
                </p>

                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#1da851] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Send via WhatsApp
                    </button>
                    <button
                        type="button"
                        onClick={handleEmail}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-base font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send via Email
                    </button>
                </div>
            </form>
        </FadeIn>
    )
}
