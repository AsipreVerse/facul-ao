'use client'

import { useId, useState, FormEvent } from 'react'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

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

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrorMessage('')

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            interest: formData.get('interest'),
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Erro ao enviar mensagem')
            }

            setSubmitStatus('success')
            form.reset()
        } catch (error) {
            setSubmitStatus('error')
            setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitStatus === 'success') {
        return (
            <FadeIn className="lg:order-last">
                <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-green-900">
                        Mensagem enviada com sucesso!
                    </h3>
                    <p className="mt-2 text-green-700">
                        Enviámos uma confirmação para o seu email. Responderemos o mais brevemente possível.
                    </p>
                    <button
                        onClick={() => setSubmitStatus('idle')}
                        className="mt-6 text-sm font-medium text-green-600 hover:text-green-700"
                    >
                        Enviar outra mensagem
                    </button>
                </div>
            </FadeIn>
        )
    }

    return (
        <FadeIn className="lg:order-last">
            <form onSubmit={handleSubmit}>
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Formulário de Contacto
                </h2>
                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <TextInput label="Nome" name="name" autoComplete="name" required />
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                    />
                    <TextInput
                        label="Empresa"
                        name="company"
                        autoComplete="organization"
                    />
                    <TextInput label="Telefone" type="tel" name="phone" autoComplete="tel" />
                    <TextInput label="Mensagem" name="message" required />
                    <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                        <fieldset>
                            <legend className="text-base/6 text-neutral-500">Interesse</legend>
                            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                <RadioInput label="Formação" name="interest" value="formacao" />
                                <RadioInput label="Consultoria" name="interest" value="consultoria" />
                                <RadioInput label="Publicações" name="interest" value="publicacoes" />
                                <RadioInput label="Outro" name="interest" value="outro" />
                            </div>
                        </fieldset>
                    </div>
                </div>

                {submitStatus === 'error' && (
                    <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
                        {errorMessage}
                    </div>
                )}

                <Button type="submit" className="mt-10" disabled={isSubmitting}>
                    {isSubmitting ? 'A enviar...' : 'Enviar mensagem'}
                </Button>
            </form>
        </FadeIn>
    )
}
