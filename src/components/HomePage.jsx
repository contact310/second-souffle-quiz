export default function HomePage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center gap-8">

        {/* Logo */}
        <img src="/logo.svg" alt="Second Souffle" style={{ width: '160px', height: 'auto' }} />

        {/* Main content */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
            Ton plan d'entraînement en course à pied est-il vraiment efficace ?
          </h1>
          <p className="text-[#A0A0A0] text-base sm:text-lg leading-relaxed">
            Réponds à 10 questions. Reçois ton score sur 100. Comprends exactement ce qui te freine.
          </p>
        </div>

        {/* Duration badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#1A1A1A] text-[#A0A0A0] text-sm">
          <span>⏱</span>
          <span>3 minutes</span>
        </div>

        {/* CTA */}
        <div className="w-full flex flex-col items-center gap-3">
          <button
            onClick={onStart}
            className="w-full max-w-xs bg-[#6a00ff] hover:bg-[#5a00d9] active:bg-[#4a00b3] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#6a00ff]/20 hover:shadow-[#6a00ff]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Démarrer le diagnostic →
          </button>
          <p className="text-[#A0A0A0] text-xs">
            Gratuit et sans engagement
          </p>
        </div>

      </div>
    </div>
  )
}
