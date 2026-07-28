import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeader from './SectionHeader'
import emailIcon from '../assets/icon/gmail.png'
import locationIcon from '../assets/icon/broche-de-localisation.png'
import githubIcon from '../assets/icon/logo-github.png'

const contactItems = [
  { icon: emailIcon, label: 'Email', value: 'ppabocha03@gmail.com', href: 'mailto:ppabocha03@gmail.com' },
  { icon: locationIcon, label: 'Localisation', value: 'Liberté 6 Dakar, Sénégal' },
  { icon: githubIcon, label: 'GitHub', value: 'github.com/Pabocha', href: 'https://github.com/Pabocha' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Le nom est requis'
    if (!form.email.trim()) newErrors.email = "L'email est requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email invalide'
    if (!form.message.trim()) newErrors.message = 'Le message est requis'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    try {
      await emailjs.send(
        'service_x92odoj',
        'template_pum766k',
        { name: form.name, email: form.email, message: form.message },
        'lekPtoShq21k2CJVw'
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setErrors({})
      setTimeout(() => setSent(false), 3000)
    } catch {
      setErrors({ submit: "Erreur lors de l'envoi. Réessayez." })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-8 max-w-5xl mx-auto">
      <SectionHeader tag="Contact" title="Travaillons" highlight="ensemble" />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div className="reveal-left">
          <p className="text-base-content/50 leading-relaxed mb-8 text-[0.95rem]">
            Je suis toujours ouvert à de nouvelles opportunités, que ce soit un projet
            freelance, une mission ou un poste en CDI ou CDD. N'hésitez pas à me contacter !
          </p>
          <div className="flex flex-col gap-3">
            {contactItems.map((item) => {
              const card = (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 p-4 rounded-xl border border-base-content/10 bg-base-content/5 ${item.href ? 'hover:border-primary/30 transition-colors cursor-pointer' : ''}`}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(124,58,237,0.2))' }}
                  >
                    <img src={item.icon} alt={item.label} className="w-[18px] h-[18px] object-contain" />
                  </div>
                  <div>
                    <div className="text-xs text-base-content/40">{item.label}</div>
                    <div className="text-sm font-medium text-base-content">{item.value}</div>
                  </div>
                </div>
              )

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {card}
                  </a>
                )
              }
              return card
            })}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal-right flex flex-col gap-4">
          {[
            { name: 'name', label: 'Nom', type: 'text', placeholder: 'Votre nom complet' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com' },
          ].map((f) => (
            <div key={f.name} className="flex flex-col gap-1.5">
              <label className="text-sm text-base-content/50 font-medium">{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={(e) => { setForm({ ...form, [f.name]: e.target.value }); setErrors({ ...errors, [f.name]: '' }); }}
                className={`input w-full bg-base-content/5 text-base-content placeholder-base-content/30 focus:border-primary focus:outline-none rounded-xl ${errors[f.name] ? 'border-error' : 'border-base-content/10'}`}
              />
              {errors[f.name] && <span className="text-xs text-error">{errors[f.name]}</span>}
            </div>
          ))}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-base-content/50 font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="Décrivez votre projet..."
              value={form.message}
              onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
              className={`textarea w-full bg-base-content/5 text-base-content placeholder-base-content/30 focus:border-primary focus:outline-none rounded-xl resize-none ${errors.message ? 'border-error' : 'border-base-content/10'}`}
            />
            {errors.message && <span className="text-xs text-error">{errors.message}</span>}
          </div>

          {errors.submit && <span className="text-sm text-error">{errors.submit}</span>}
          <button
            type="submit"
            disabled={sending}
            className="btn btn-primary w-full text-white border-none font-semibold mt-2 disabled:opacity-50"
          >
            {sending ? 'Envoi en cours...' : sent ? '✓ Message envoyé !' : 'Envoyer le message ✦'}
          </button>
        </form>
      </div>
    </section>
  )
}
