import { useState, useEffect } from 'react'

export default function LeadForm({ onSubmit }) {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ prenom: '', email: '', telephone: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const validate = () => {
    const e = {}
    if (!form.prenom.trim()) e.prenom = 'Champ requis'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
    if (!form.telephone.trim() || !/^[\d\s\+\-\(\)]{7,}$/.test(form.telephone)) e.telephone = 'Numéro invalide'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    onSubmit(form)
  }

  const field = (name, label, type = 'text', placeholder = '') => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-[#A0A0A0]">{label}</label>
      <input
        type={type}
        value={form[name]}
        onChange={e => {
          setForm(prev => ({ ...prev, [name]: e.target.value }))
          setErrors(prev => ({ ...prev, [name]: undefined }))
        }}
        placeholder={placeholder}
        className={`w-full bg-[#1A1A1A] border rounded-xl px-4 py-3 text-white placeholder-[#555] text-sm outline-none transition-colors
          ${errors[name] ? 'border-red-500' : 'border-[#2A2A2A] focus:border-[#6a00ff]'}`}
      />
      {errors[name] && <span className="text-xs text-red-400">{errors[name]}</span>}
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 max-w-lg mx-auto">

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/logo.svg" alt="Second Souffle" style={{ width: '130px', height: 'auto' }} />
      </div>

      <div
        className={`flex flex-col gap-6 transition-all duration-500 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl font-bold text-white">Ton score est prêt !</h2>
          <p className="text-[#A0A0A0] text-sm leading-relaxed">
            Laisse-nous tes coordonnées pour recevoir ton diagnostic complet et être recontacté par un coach.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {field('prenom', 'Prénom', 'text', 'Jean')}
          {field('email', 'Email', 'email', 'jean@example.com')}
          {field('telephone', 'Téléphone', 'tel', '+33 6 12 34 56 78')}

          <button
            type="submit"
            className="w-full bg-[#6a00ff] hover:bg-[#5a00d9] active:bg-[#4a00b3] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#6a00ff]/20 hover:shadow-[#6a00ff]/30 hover:-translate-y-0.5 active:translate-y-0 mt-2"
          >
            Voir mes résultats →
          </button>
        </form>

        <p className="text-center text-[#555] text-xs">
          Tes données sont confidentielles et ne seront jamais partagées.
        </p>
      </div>
    </div>
  )
}
