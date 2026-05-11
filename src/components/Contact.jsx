import { useState } from 'react'
import SectionHeader from './SectionHeader'

const contactItems = [
  { icon: '📧', label: 'Email', value: 'alex@portfolio.dev' },
  { icon: '📍', label: 'Localisation', value: 'Dakar, Sénégal' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/alex-dev' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/alex-dev' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-8 max-w-5xl mx-auto">
      <SectionHeader tag="Contact" title="Travaillons" highlight="ensemble" />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div className="reveal-left">
          <p className="text-slate-400 leading-relaxed mb-8 text-[0.95rem]">
            Je suis toujours ouvert à de nouvelles opportunités, que ce soit un projet
            freelance, une mission ou un poste en CDI. N'hésitez pas à me contacter !
          </p>
          <div className="flex flex-col gap-3">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.03]"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(124,58,237,0.2))' }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500">{item.label}</div>
                  <div className="text-sm font-medium text-slate-200">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal-right flex flex-col gap-4">
          {[
            { name: 'name', label: 'Nom', type: 'text', placeholder: 'Votre nom complet' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com' },
          ].map((f) => (
            <div key={f.name} className="flex flex-col gap-1.5">
              <label className="text-sm text-slate-400 font-medium">{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="input w-full bg-white/[0.04] border border-white/[0.07] text-slate-200 placeholder-slate-600 focus:border-violet-500 focus:outline-none rounded-xl"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-400 font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="Décrivez votre projet..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="textarea w-full bg-white/[0.04] border border-white/[0.07] text-slate-200 placeholder-slate-600 focus:border-violet-500 focus:outline-none rounded-xl resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn w-full text-white border-none font-semibold mt-2"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)' }}
          >
            {sent ? '✓ Message envoyé !' : 'Envoyer le message ✦'}
          </button>
        </form>
      </div>
    </section>
  )
}
