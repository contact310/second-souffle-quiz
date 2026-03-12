import { useState, useEffect } from 'react'

export default function ScoreDisplay({ score, color, emoji, title, subtitle }) {
  const [displayScore, setDisplayScore] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Fade in
    const fadeTimer = setTimeout(() => setVisible(true), 100)

    // Animate counter from 0 to score
    const duration = 1500
    const startTime = Date.now()
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOut(progress)
      setDisplayScore(Math.round(easedProgress * score))

      if (progress >= 1) {
        clearInterval(interval)
        setDisplayScore(score)
      }
    }, 16)

    return () => {
      clearTimeout(fadeTimer)
      clearInterval(interval)
    }
  }, [score])

  // Compute stroke dashoffset for circular gauge
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const strokeProgress = (score / 100) * circumference
  const strokeDashoffset = circumference - strokeProgress

  return (
    <div
      className={`flex flex-col items-center gap-6 transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      {/* Circular gauge */}
      <div className="relative flex items-center justify-center">
        <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
          {/* Background track */}
          <circle
            cx="70" cy="70" r={radius}
            fill="none"
            stroke="#2A2A2A"
            strokeWidth="10"
          />
          {/* Progress arc */}
          <circle
            cx="70" cy="70" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
          />
        </svg>

        {/* Score text centered inside circle */}
        <div className="absolute flex flex-col items-center">
          <span className="text-4xl font-bold text-white leading-none tabular-nums">
            {displayScore}
          </span>
          <span className="text-sm text-[#A0A0A0] mt-0.5">/ 100</span>
        </div>
      </div>

      {/* Emoji + level label */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
          {title}
        </h2>
        <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed max-w-sm">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
