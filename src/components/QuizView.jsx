import { useState, useEffect } from 'react'
import { questions } from '../data/questions.js'
import ProgressBar from './ProgressBar.jsx'
import QuestionCard from './QuestionCard.jsx'

const TOTAL = questions.length // 10
const AUTO_ADVANCE_DELAY = 400 // ms

export default function QuizView({ currentQuestion, answers, onAnswer, onNext, onBack, onFinish }) {
  const [pendingAdvance, setPendingAdvance] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const question = questions[currentQuestion]
  const currentAnswer = answers.find(a => a.questionId === question.id)

  // Reset pending advance when question changes
  useEffect(() => {
    setPendingAdvance(false)
  }, [currentQuestion])

  const handleSelect = (option) => {
    if (pendingAdvance) return // Prevent double-click during delay

    onAnswer(question.id, option)
    setPendingAdvance(true)

    setTimeout(() => {
      if (currentQuestion === TOTAL - 1) {
        onFinish()
      } else {
        setIsTransitioning(true)
        setTimeout(() => {
          setIsTransitioning(false)
          onNext()
        }, 50)
      }
    }, AUTO_ADVANCE_DELAY)
  }

  const handleBack = () => {
    if (pendingAdvance) return
    onBack()
  }

  return (
    <div className="min-h-screen flex flex-col px-4 py-6 max-w-lg mx-auto">

      {/* Header */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/logo.svg" alt="Second Souffle" style={{ width: '110px', height: 'auto' }} />
        </div>

        {/* Progress */}
        <ProgressBar current={currentQuestion + 1} total={TOTAL} />
      </div>

      {/* Question area — grows to fill space */}
      <div className="flex-1 flex flex-col justify-center">
        {!isTransitioning && (
          <QuestionCard
            key={question.id}
            question={question}
            selectedLabel={currentAnswer?.label}
            onSelect={handleSelect}
          />
        )}
      </div>

      {/* Back button */}
      <div className="mt-8 flex items-center">
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#A0A0A0] hover:text-white transition-colors text-sm py-2"
          >
            <span>←</span>
            <span>Retour</span>
          </button>
        )}
      </div>

    </div>
  )
}
