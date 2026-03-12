import { useEffect, useState } from 'react'
import ScoreDisplay from './ScoreDisplay.jsx'
import DiagnosticBlock from './DiagnosticBlock.jsx'
import CTABlock from './CTABlock.jsx'
import { getScoreLevel, getActiveDiagnostics } from '../utils/scoring.js'

export default function ResultsView({ totalScore, normalizedScore, answers, onRestart }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const scoreLevel = getScoreLevel(normalizedScore)
  const diagnostics = getActiveDiagnostics(answers, normalizedScore)
  const hasNegativeDiagnostics = diagnostics.length > 0

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 max-w-lg mx-auto">

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/logo.svg" alt="Second Souffle" style={{ width: '130px', height: 'auto' }} />
      </div>

      <div
        className={`flex flex-col gap-8 transition-all duration-500 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >

        {/* Score display */}
        <ScoreDisplay
          score={normalizedScore}
          color={scoreLevel.color}
          emoji={scoreLevel.emoji}
          title={scoreLevel.title}
          subtitle={scoreLevel.subtitle}
        />

        {/* Divider */}
        <div className="w-full h-px bg-[#2A2A2A]" />

        {/* Diagnostic section */}
        {hasNegativeDiagnostics ? (
          <DiagnosticBlock diagnostics={diagnostics} staggerIndex={0} />
        ) : (
          <div
            className="px-4 py-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#D0D0D0] leading-relaxed animate-fade-in-up"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            💚 Ton entraînement est solide sur tous les plans. Garde le cap — et si tu veux aller encore plus loin, nos coachs peuvent t'aider à exploiter tes dernières marges.
          </div>
        )}

        {/* Divider */}
        <div className="w-full h-px bg-[#2A2A2A]" />

        {/* CTA Block */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '800ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          <CTABlock />
        </div>

        {/* Restart */}
        <div
          className="flex justify-center animate-fade-in-up"
          style={{ animationDelay: '1000ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          <button
            onClick={onRestart}
            className="text-[#A0A0A0] hover:text-white transition-colors text-sm underline underline-offset-4 py-2"
          >
            Recommencer le quiz
          </button>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />

      </div>
    </div>
  )
}
