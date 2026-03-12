import {
  FileText, Zap, BarChart2,
  Gauge, Activity, CalendarCheck, BedDouble, Battery,
  ShieldCheck, TrendingUp, Salad, Heart, Target
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Réponds au questionnaire',
    desc: '10 questions sur ton entraînement. 3 minutes suffisent.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'On analyse ton plan',
    desc: 'Notre algorithme évalue chaque pilier et génère un diagnostic personnalisé.',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Reçois ton diagnostic',
    desc: "Score sur 100, points de blocage identifiés, et plan d'action concret.",
  },
]

const pillars = [
  { number: '01', icon: Gauge,        title: 'Volume',              desc: 'Cours-tu assez — ou trop — pour progresser ?' },
  { number: '02', icon: Activity,     title: 'Intensités',          desc: 'Ton mix lent / rapide est-il le bon ?' },
  { number: '03', icon: CalendarCheck,title: 'Planification',       desc: 'As-tu un plan structuré ou tu improvises ?' },
  { number: '04', icon: BedDouble,    title: 'Récupération',        desc: 'Tes jours de repos sont-ils vraiment planifiés ?' },
  { number: '05', icon: Battery,      title: 'Gestion de la fatigue', desc: 'Te sens-tu frais avant chaque séance ?' },
  { number: '06', icon: ShieldCheck,  title: 'Blessures',           desc: 'Ton corps résiste-t-il à la charge ?' },
  { number: '07', icon: TrendingUp,   title: 'Progression',         desc: 'Progresses-tu vraiment, ou tu stagnes ?' },
  { number: '08', icon: Salad,        title: 'Nutrition',           desc: 'Manges-tu pour performer ou juste pour vivre ?' },
  { number: '09', icon: Heart,        title: 'Motivation',          desc: "Es-tu encore dans le bon état d'esprit ?" },
  { number: '10', icon: Target,       title: 'Objectif',            desc: 'As-tu une course cible avec une vraie date ?' },
]

export default function HomePage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-[#0A0A0A]">

      {/* ── HERO ── */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center gap-8">
        <img src="/logo.svg" alt="Second Souffle" style={{ width: '160px', height: 'auto' }} />

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
            Ton plan d'entraînement en course à pied est-il vraiment efficace ?
          </h1>
          <p className="text-[#A0A0A0] text-base sm:text-lg leading-relaxed">
            Réponds à 10 questions. Reçois ton score sur 100. Comprends exactement ce qui te freine.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#1A1A1A] text-[#A0A0A0] text-sm">
          <span>⏱</span>
          <span>3 minutes</span>
        </div>

        <div className="w-full flex flex-col items-center gap-3">
          <button
            onClick={onStart}
            className="w-full max-w-xs bg-[#6a00ff] hover:bg-[#5a00d9] active:bg-[#4a00b3] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#6a00ff]/20 hover:shadow-[#6a00ff]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Démarrer le diagnostic →
          </button>
          <p className="text-[#A0A0A0] text-xs">Gratuit et sans engagement</p>
        </div>
      </div>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="w-full max-w-4xl mx-auto mt-24 flex flex-col items-center gap-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Comment ça marche</h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map(({ number, icon: Icon, title, desc }) => (
            <div key={number} className="flex flex-col items-center text-center gap-4 bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-[#6a00ff]/10 border border-[#6a00ff]/20 flex items-center justify-center">
                <Icon size={22} className="text-[#6a00ff]" />
              </div>
              <span className="text-[#6a00ff] font-bold text-xl">{number}</span>
              <p className="text-white font-semibold text-sm sm:text-base">{title}</p>
              <p className="text-[#808080] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LES 10 PILIERS ── */}
      <section className="w-full max-w-4xl mx-auto mt-24 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Les 10 piliers d'un plan efficace</h2>
          <p className="text-[#808080] text-sm sm:text-base">Chaque pilier est évalué. Ton score total est sur 100.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {pillars.map(({ number, icon: Icon, title, desc }) => (
            <div key={number} className="flex flex-col items-center text-center gap-3 bg-[#141414] border border-[#2A2A2A] hover:border-[#6a00ff]/40 rounded-2xl p-4 transition-colors duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#6a00ff]/10 border border-[#6a00ff]/20 flex items-center justify-center">
                <Icon size={18} className="text-[#6a00ff]" />
              </div>
              <span className="text-[#6a00ff] font-bold text-sm">{number}</span>
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-[#808080] text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="w-full max-w-md mx-auto mt-24 flex flex-col items-center gap-4 text-center">
        <p className="text-[#A0A0A0] text-sm">Prêt à savoir ce qui te freine vraiment ?</p>
        <button
          onClick={onStart}
          className="w-full bg-[#6a00ff] hover:bg-[#5a00d9] active:bg-[#4a00b3] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#6a00ff]/20 hover:shadow-[#6a00ff]/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          Démarrer le diagnostic →
        </button>
        <p className="text-[#A0A0A0] text-xs">Gratuit et sans engagement</p>
      </section>

      <div className="mt-16" />
    </div>
  )
}
