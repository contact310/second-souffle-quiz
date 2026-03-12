import { useEffect } from 'react'

export default function CTABlock() {
  useEffect(() => {
    // Load iClosed widget script if not already loaded
    if (!document.querySelector('script[src="https://app.iclosed.io/assets/widget.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://app.iclosed.io/assets/widget.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
          Tu veux comprendre exactement ce qui te bloque ?
        </h3>
        <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
          Nos coachs analysent ton profil et te donnent un plan d'action précis — en 30 minutes d'appel gratuit.
        </p>
      </div>

      {/* iClosed inline widget */}
      <div
        className="iclosed-widget"
        data-url="https://app.iclosed.io/e/runninglab/diagnostic-running-lab-1"
        title="Diagnostic Second Souffle 👟"
        style={{ width: '100%', height: '620px' }}
      />
    </div>
  )
}
